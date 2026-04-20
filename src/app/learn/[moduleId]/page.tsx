
"use client";

import { useState, useEffect, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, BookOpen, Play, CheckCircle2, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { modules, findLessonById, getNextLessonId } from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageContext";
import { useFirestore, useUser, useCollection } from "@/firebase";
import { doc, setDoc, serverTimestamp, increment } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

export default function LearnPage() {
  const { moduleId } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const { user } = useUser();
  const firestore = useFirestore();

  // Encontrar lição atual (usamos moduleId como ID da lição por simplicidade na rota)
  const lessonData = useMemo(() => findLessonById(moduleId as string), [moduleId]);
  
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("theory");

  // Query progresso do usuário para saber o que já foi feito
  const progressQuery = useMemo(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid, 'progress', moduleId as string);
  }, [firestore, user, moduleId]);

  // Sincronizar estado inicial
  useEffect(() => {
    if (lessonData?.lesson.type === 'exercise' && lessonData.lesson.code) {
      setCode(lessonData.lesson.code);
      setActiveTab("code");
    } else {
      setActiveTab("theory");
    }
    setOutput("");
    setIsCompleted(false);
  }, [lessonData]);

  if (!lessonData) return <div className="p-8 text-center">Lição não encontrada</div>;

  const { lesson, ka, module } = lessonData;

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      if (lesson.solution && code.includes(lesson.solution)) {
        setOutput("✅ Testes passados com sucesso!");
        setIsCompleted(true);
        saveProgress(100);
      } else {
        setOutput("❌ Erro: O código não produziu o resultado esperado.\nDica: Verifique a lógica da função.");
      }
    }, 800);
  };

  const handleQuizSubmit = () => {
    const questions = lesson.quiz || [];
    const correctCount = questions.filter(q => quizAnswers[q.id] === q.correctAnswer).length;
    const score = Math.round((correctCount / questions.length) * 100);

    if (score >= 70) {
      toast({ title: "Excelente!", description: `Você acertou ${score}% do quiz.` });
      setIsCompleted(true);
      saveProgress(score);
    } else {
      toast({ 
        variant: "destructive", 
        title: "Tente novamente", 
        description: `Pontuação: ${score}%. É necessário pelo menos 70% para avançar.` 
      });
    }
  };

  const saveProgress = async (score: number) => {
    if (!user || !firestore) return;
    
    const pointsToAdd = lesson.type === 'theory' ? 10 : 20;
    const progressRef = doc(firestore, 'users', user.uid, 'progress', lesson.id);
    const userRef = doc(firestore, 'users', user.uid);

    const data = {
      levelId: parseInt(module.id),
      kaId: ka.id,
      lessonId: lesson.id,
      lessonType: lesson.type,
      completed: true,
      completedAt: serverTimestamp(),
      quizScore: score,
      quizPassed: score >= 70,
      lastCode: lesson.type === 'exercise' ? code : null
    };

    // Salvar progresso
    setDoc(progressRef, data, { merge: true }).catch(async () => {
      errorEmitter.emit('permission-error', new FirestorePermissionError({
        path: progressRef.path,
        operation: 'write',
        requestResourceData: data
      }));
    });

    // Atualizar pontos totais do perfil
    setDoc(userRef, { 
      totalPoints: increment(pointsToAdd),
      lastActive: serverTimestamp() 
    }, { merge: true });
  };

  const handleNext = () => {
    // Aqui buscaríamos o próximo ID logicamente
    // Para o MVP, se for a última lição do módulo, volta ao dashboard
    const nextId = getNextLessonId(lesson.id, []); // Idealmente passaríamos lições completadas do hook
    if (nextId) {
      router.push(`/learn/${nextId}`);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Navigation />
      
      {/* Header de Progresso */}
      <div className="bg-card/50 border-b px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')} className="rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div>
            <h2 className="font-headline font-bold text-xs md:text-sm truncate max-w-[150px] md:max-w-md">
              {ka.title}: {lesson.title}
            </h2>
          </div>
        </div>
        
        <div className="flex gap-2">
          {isCompleted && (
            <Button size="sm" onClick={handleNext} className="bg-primary hover:bg-primary/90 rounded-full font-bold">
              Seguinte
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Lado Esquerdo: Conteúdo Mobile-First (Abas no mobile, split no desktop) */}
        <div className="w-full md:w-1/2 flex flex-col border-r bg-background/50 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="px-4 border-b bg-card/30">
              <TabsList className="bg-transparent h-12 w-full justify-start gap-4">
                <TabsTrigger value="theory" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-12">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Teoria
                </TabsTrigger>
                {lesson.type === 'exercise' && (
                  <TabsTrigger value="code" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-12">
                    <Terminal className="w-4 h-4 mr-2" />
                    Editor
                  </TabsTrigger>
                )}
              </TabsList>
            </div>

            <TabsContent value="theory" className="flex-1 overflow-y-auto p-6 md:p-10 m-0">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="space-y-4">
                  <h1 className="font-headline text-2xl md:text-3xl font-bold">{lesson.title}</h1>
                  <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                    <p>{lesson.content}</p>
                  </div>
                </div>

                {lesson.quiz && (
                  <div className="pt-8 space-y-8">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Trophy className="w-5 h-5" />
                      <span>Quiz Obrigatório</span>
                    </div>
                    {lesson.quiz.map((q) => (
                      <div key={q.id} className="space-y-4">
                        <h3 className="font-medium">{q.question}</h3>
                        <RadioGroup 
                          onValueChange={(val) => setQuizAnswers(prev => ({...prev, [q.id]: parseInt(val)}))}
                          className="gap-3"
                        >
                          {q.options.map((opt, i) => (
                            <div key={i} className="flex items-center space-x-2 p-4 rounded-xl border bg-card/50 hover:bg-card hover:border-primary/50 transition-all cursor-pointer">
                              <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} />
                              <Label htmlFor={`${q.id}-${i}`} className="flex-1 cursor-pointer font-normal">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}
                    <Button onClick={handleQuizSubmit} className="w-full h-12 rounded-xl font-bold">
                      Validar Respostas
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="code" className="flex-1 flex flex-col m-0 bg-[#0d1117]">
               <div className="flex-1 p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full bg-transparent font-code text-sm resize-none outline-none text-blue-300 leading-relaxed"
                  spellCheck={false}
                  placeholder="// Escreva seu código aqui..."
                />
              </div>
              <div className="h-40 md:h-48 border-t bg-black/40 p-4 font-code text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> Console
                  </span>
                  <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 h-8 rounded-full">
                    {isRunning ? "A validar..." : "Executar"}
                    <Play className="w-3 h-3 ml-2 fill-current" />
                  </Button>
                </div>
                <div className="whitespace-pre text-muted-foreground overflow-y-auto h-full pb-4">
                  {output || "Aguardando execução..."}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Lado Direito: Preview (Apenas Desktop) */}
        <div className="hidden md:flex md:w-1/2 bg-[#0d1117] flex-col">
           {lesson.type === 'theory' ? (
             <div className="flex-1 flex flex-col items-center justify-center p-10 text-center opacity-40">
                <BookOpen className="w-16 h-16 mb-6 text-primary" />
                <h3 className="text-xl font-bold mb-2">Foco na Teoria</h3>
                <p className="max-w-sm">Leia atentamente as instruções à esquerda e complete o quiz para avançar.</p>
             </div>
           ) : (
             <div className="flex-1 flex flex-col">
                <div className="flex-1 p-4">
                  {/* Editor duplicado para o layout split no desktop */}
                  <div className="h-full flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-mono text-muted-foreground">JAVASCRIPT</span>
                       <div className="flex gap-2">
                          <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 h-8 rounded-full">
                            Rodar Testes
                            <Play className="w-3 h-3 ml-2 fill-current" />
                          </Button>
                       </div>
                    </div>
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="flex-1 bg-secondary/20 p-4 rounded-xl font-code text-sm resize-none outline-none text-blue-300 leading-relaxed border border-white/5"
                      spellCheck={false}
                    />
                    <div className="h-32 bg-black/60 rounded-xl p-4 font-code text-xs border border-white/5 overflow-y-auto">
                      <div className="text-[10px] text-muted-foreground mb-1">SAÍDA:</div>
                      {output || "> Pronto para executar..."}
                    </div>
                  </div>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
