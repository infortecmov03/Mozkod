
"use client";

import { useState, useEffect, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Terminal, BookOpen, Play, Send, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";
import { modules } from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageContext";
import { useFirestore, useUser, useDoc } from "@/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

export default function LearnPage() {
  const { moduleId } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const { user } = useUser();
  const firestore = useFirestore();

  const module = useMemo(() => modules.find(m => m.id === moduleId), [moduleId]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentLesson = module?.lessons[currentLessonIndex];
  
  // Sync initial code
  useEffect(() => {
    if (currentLesson?.type === 'lab' && currentLesson.code) {
      setCode(currentLesson.code);
    }
    setOutput("");
    setIsCompleted(false);
  }, [currentLesson]);

  if (!module || !currentLesson) return <div className="p-8 text-center">Module not found</div>;

  const progress = ((currentLessonIndex + 1) / module.lessons.length) * 100;

  const saveProgress = async () => {
    if (!user || !firestore) return;
    
    const progressRef = doc(firestore, 'users', user.uid, 'progress', currentLesson.id);
    const data = {
      completed: true,
      completedAt: serverTimestamp(),
      lastCode: currentLesson.type === 'lab' ? code : null
    };

    setDoc(progressRef, data, { merge: true }).catch(async () => {
      errorEmitter.emit('permission-error', new FirestorePermissionError({
        path: progressRef.path,
        operation: 'write',
        requestResourceData: data
      }));
    });
  };

  const handleRunCode = () => {
    setIsRunning(true);
    // Simple simulated evaluation for MVP
    setTimeout(() => {
      setIsRunning(false);
      if (currentLesson.solution && code.includes(currentLesson.solution)) {
        setOutput("✅ Testes passados!\nSoma(5, 10) = 15");
        setIsCompleted(true);
      } else {
        setOutput("❌ Erro: O resultado não é o esperado.\nDica: Tente usar 'return a + b'");
      }
    }, 1000);
  };

  const handleQuizSubmit = () => {
    const allCorrect = currentLesson.quiz?.every(q => quizAnswers[q.id] === q.correctAnswer);
    if (allCorrect) {
      toast({ title: "Correto!", description: "Você passou no quiz!" });
      setIsCompleted(true);
    } else {
      toast({ 
        variant: "destructive", 
        title: "Incorreto", 
        description: "Algumas respostas estão erradas. Tente novamente." 
      });
    }
  };

  const handleNext = () => {
    saveProgress();
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Navigation />
      
      <div className="bg-card/50 border-b px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="font-headline font-bold text-sm truncate">{module.title}</h2>
        </div>
        
        <div className="flex-1 max-w-md mx-4 hidden sm:block">
          <Progress value={progress} className="h-1.5" />
        </div>

        <div className="flex gap-2">
          <Button 
            size="sm" 
            onClick={handleNext} 
            disabled={currentLesson.type !== 'theory' && !isCompleted}
          >
            {currentLessonIndex === module.lessons.length - 1 ? 'Finalizar' : 'Próximo'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 overflow-y-auto border-r p-6 md:p-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                {currentLesson.type}
              </span>
              <h1 className="font-headline text-3xl font-bold">{currentLesson.title}</h1>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {currentLesson.content}
              </p>
            </div>

            {currentLesson.type === 'quiz' && (
              <div className="space-y-8 mt-10">
                {currentLesson.quiz?.map((q) => (
                  <div key={q.id} className="space-y-4">
                    <h3 className="font-medium text-lg">{q.question}</h3>
                    <RadioGroup 
                      value={quizAnswers[q.id]?.toString()} 
                      onValueChange={(val) => setQuizAnswers(prev => ({...prev, [q.id]: parseInt(val)}))}
                    >
                      {q.options.map((opt, i) => (
                        <div key={i} className="flex items-center space-x-2 p-3 rounded-lg border bg-secondary/30 hover:bg-secondary/50 transition-colors">
                          <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} />
                          <Label htmlFor={`${q.id}-${i}`} className="flex-1 cursor-pointer">{opt}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
                <Button onClick={handleQuizSubmit} className="w-full h-12 rounded-xl font-bold">
                  Verificar Respostas
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Editor/Action Area */}
        <div className="w-full md:w-1/2 flex flex-col bg-[#0d1117] border-t md:border-t-0">
          {currentLesson.type === 'lab' ? (
            <>
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex items-center px-4 h-10 bg-secondary/50 border-b">
                  <span className="text-xs font-mono text-muted-foreground uppercase">{currentLesson.language}</span>
                </div>
                <div className="flex-1 p-4">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full bg-transparent font-code text-sm resize-none outline-none text-blue-300 leading-relaxed"
                    spellCheck={false}
                  />
                </div>
              </div>
              <div className="h-48 border-t bg-black/60 p-4 font-code text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> Console
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 h-8 rounded-full">
                      {isRunning ? "Executando..." : "Rodar Testes"}
                      <Play className="w-3 h-3 ml-2 fill-current" />
                    </Button>
                  </div>
                </div>
                <div className="whitespace-pre text-muted-foreground overflow-y-auto h-full">
                  {output || "Aguardando execução..."}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center p-10 opacity-30 text-center">
              <div>
                <BookOpen className="w-12 h-12 mx-auto mb-4" />
                <p>Leia a teoria à esquerda para prosseguir.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
