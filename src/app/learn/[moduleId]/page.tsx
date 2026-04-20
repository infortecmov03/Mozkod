
"use client";

import { useState, useEffect, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Terminal, BookOpen, Play, CheckCircle2, ChevronLeft, 
  ChevronRight, Trophy, Zap, Loader2, Menu, ListChecks, 
  Code2, Laptop, ShieldCheck, HelpCircle
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { findKnowledgeAreaByLessonId, findTheoryLesson, findPracticeExercise } from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { cn } from "@/lib/utils";

export default function LearnPage() {
  const { moduleId: lessonId } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const { profile } = useAuth();
  const { markAsCompleted, isCompleted, progress } = useProgress();

  const data = useMemo(() => findKnowledgeAreaByLessonId(lessonId as string), [lessonId]);
  const theory = useMemo(() => findTheoryLesson(lessonId as string), [lessonId]);
  const practice = useMemo(() => findPracticeExercise(lessonId as string), [lessonId]);

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [completedObjectives, setCompletedObjectives] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (practice) {
      const initialLang = data?.ka.supportedLanguages[0] || "javascript";
      setSelectedLang(initialLang);
      setCode(practice.starterCode[initialLang] || "");
    }
  }, [practice, data]);

  if (!data) return <div className="p-8 text-center">Conteúdo não encontrado</div>;

  const { ka, module } = data;

  const handleRunCode = async () => {
    setIsRunning(true);
    // Simulação de execução e validação de objetivos
    setTimeout(async () => {
      setIsRunning(false);
      if (!practice) return;

      const newCompleted = practice.objectives
        .filter(obj => new RegExp(obj.validationRegex).test(code))
        .map(obj => obj.id);

      setCompletedObjectives(newCompleted);

      if (newCompleted.length === practice.objectives.length) {
        setOutput("> ✅ Todos os objetivos concluídos!\n> Pronto para submeter.");
      } else {
        setOutput(`> ⚠️ ${newCompleted.length}/${practice.objectives.length} objetivos alcançados.\n> Revise o checklist.`);
      }
    }, 1000);
  };

  const handleQuizSubmit = async () => {
    if (!theory) return;
    const questions = theory.quiz || [];
    if (questions.length === 0) {
      await handleComplete(100);
      return;
    }

    const correctCount = questions.filter(q => quizAnswers[q.id] === q.correctAnswer).length;
    const score = Math.round((correctCount / questions.length) * 100);

    if (score >= 70) {
      toast({ title: t.wellDone, description: `Score: ${score}%` });
      await handleComplete(score);
    } else {
      toast({ 
        variant: "destructive", 
        title: "Tente novamente", 
        description: `Score: ${score}%. Mínimo 70% necessário.` 
      });
    }
  };

  const handleComplete = async (score: number) => {
    if (!profile) return;
    setIsSaving(true);
    try {
      await markAsCompleted(
        lessonId as string,
        parseInt(module.id),
        ka.id,
        theory ? 'theory' : 'exercise',
        score,
        practice ? code : undefined
      );
      toast({ title: "Progresso Salvo!", description: "Continue para o próximo desafio." });
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao salvar", description: err.message });
    } finally {
      setIsSaving(false);
    }
  };

  const SidebarMenu = ({ title, items, currentId, type }: { title: string, items: any[], currentId: string, type: 'theory' | 'practice' }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 rounded-full">
          <Menu className="w-4 h-4" />
          <span className="hidden sm:inline">{title}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center gap-2">
            {type === 'theory' ? <BookOpen className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
            {title}
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-2">
          {items.map((item) => {
            const isDone = isCompleted(item.id);
            const isLocked = type === 'practice' && !isCompleted(ka.theoryLessons[items.indexOf(item)]?.id);
            
            return (
              <Button
                key={item.id}
                variant={currentId === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-12 rounded-xl",
                  currentId === item.id && "bg-primary/10 border-primary/20",
                  isLocked && "opacity-50 cursor-not-allowed"
                )}
                onClick={() => !isLocked && router.push(`/learn/${item.id}`)}
              >
                {isDone ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Zap className="w-4 h-4 text-muted-foreground" />}
                <span className="truncate text-xs font-medium">{item.title}</span>
              </Button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Navigation />
      
      {/* Header Contextual */}
      <div className="bg-card/50 border-b px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push('/dashboard')} className="rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex flex-col">
            <span className="text-[10px] text-primary uppercase font-bold tracking-widest">{ka.title}</span>
            <h2 className="font-headline font-bold text-sm truncate max-w-[200px] md:max-w-md">
              {theory?.title || practice?.title}
            </h2>
          </div>
        </div>
        
        <div className="flex gap-2">
          <SidebarMenu 
            title="Aulas Teóricas" 
            items={ka.theoryLessons} 
            currentId={lessonId as string} 
            type="theory" 
          />
          {ka.practiceExercises.length > 0 && (
            <SidebarMenu 
              title="Laboratórios" 
              items={ka.practiceExercises} 
              currentId={lessonId as string} 
              type="practice" 
            />
          )}
        </div>
      </div>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Lado Esquerdo: Conteúdo ou Editor */}
        <div className={cn(
          "flex-1 overflow-y-auto bg-background",
          practice && "md:w-1/2 border-r"
        )}>
          {theory ? (
            <div className="max-w-3xl mx-auto p-8 md:p-16 space-y-10 animate-in fade-in duration-700">
               <div className="space-y-6">
                  <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-tighter">Módulo de Teoria</span>
                  </div>
                  <h1 className="font-headline text-3xl md:text-4xl font-bold">{theory.title}</h1>
                  <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                    <p>{theory.content}</p>
                  </div>
               </div>

               {theory.quiz.length > 0 && (
                 <div className="bg-card/30 border border-white/5 rounded-3xl p-8 md:p-12 space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-headline font-bold text-xl">Validação de Conhecimento</h3>
                    </div>
                    {theory.quiz.map((q) => (
                      <div key={q.id} className="space-y-4">
                        <p className="font-medium">{q.question}</p>
                        <RadioGroup 
                          onValueChange={(val) => setQuizAnswers(prev => ({...prev, [q.id]: parseInt(val)}))}
                          className="grid gap-3"
                        >
                          {q.options.map((opt, i) => (
                            <div key={i} className="flex items-center space-x-2 p-4 rounded-2xl border bg-background/50 hover:bg-card transition-all cursor-pointer">
                              <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} />
                              <Label htmlFor={`${q.id}-${i}`} className="flex-1 cursor-pointer font-normal">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}
                    <Button onClick={handleQuizSubmit} className="w-full h-14 rounded-2xl font-bold text-lg" disabled={isSaving}>
                      {isSaving ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <ShieldCheck className="w-5 h-5 mr-2" />}
                      Validar Respostas
                    </Button>
                 </div>
               )}
            </div>
          ) : practice ? (
            <div className="h-full flex flex-col bg-[#0d1117]">
               <div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
                  <div className="flex gap-2">
                    {ka.supportedLanguages.map(lang => (
                      <Button
                        key={lang}
                        variant={selectedLang === lang ? "secondary" : "ghost"}
                        size="sm"
                        className={cn("h-8 px-4 rounded-full text-[10px] uppercase font-bold", selectedLang === lang && "bg-primary text-primary-foreground")}
                        onClick={() => {
                          setSelectedLang(lang);
                          setCode(practice.starterCode[lang] || "");
                        }}
                      >
                        {lang}
                      </Button>
                    ))}
                  </div>
                  <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 h-8 rounded-full text-xs font-bold px-6">
                    {isRunning ? "A VALIDAR..." : "EXECUTAR"}
                    <Play className="w-3 h-3 ml-2 fill-current" />
                  </Button>
               </div>
               <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 bg-transparent p-6 font-code text-sm resize-none outline-none text-blue-300 leading-relaxed"
                spellCheck={false}
               />
               <div className="h-48 border-t border-white/5 bg-black/40 p-6 font-code text-xs">
                  <div className="text-muted-foreground mb-3 flex items-center gap-2 uppercase tracking-widest font-bold">
                    <Terminal className="w-4 h-4" /> Consola de Saída
                  </div>
                  <div className={cn("whitespace-pre overflow-y-auto h-full", output.includes('✅') ? 'text-green-400' : 'text-blue-300')}>
                    {output || "> Pronto para o laboratório..."}
                  </div>
               </div>
            </div>
          ) : null}
        </div>

        {/* Lado Direito: Checklist de Objetivos (Apenas na Prática) */}
        {practice && (
          <div className="hidden md:flex md:w-80 bg-card/20 flex-col border-l border-white/5 overflow-y-auto">
            <div className="p-6 space-y-8">
              <div className="flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-primary" />
                <h3 className="font-headline font-bold uppercase tracking-widest text-xs">Objetivos da Prática</h3>
              </div>
              
              <div className="space-y-4">
                {practice.objectives.map((obj, i) => (
                  <div 
                    key={obj.id} 
                    className={cn(
                      "p-4 rounded-2xl border transition-all",
                      completedObjectives.includes(obj.id) 
                        ? "bg-green-500/10 border-green-500/30" 
                        : "bg-background/50 border-white/5"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        completedObjectives.includes(obj.id) ? "bg-green-500" : "bg-secondary"
                      )}>
                        {completedObjectives.includes(obj.id) && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <div className="space-y-2">
                        <p className={cn("text-xs font-medium", completedObjectives.includes(obj.id) && "text-green-500 line-through")}>
                          {obj.description}
                        </p>
                        {!completedObjectives.includes(obj.id) && (
                          <p className="text-[10px] text-muted-foreground italic">💡 Dica: {obj.hint}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {completedObjectives.length === practice.objectives.length && (
                <Button 
                  onClick={() => handleComplete(100)} 
                  className="w-full h-14 rounded-2xl font-bold text-lg bg-primary shadow-xl shadow-primary/20 animate-bounce"
                  disabled={isSaving}
                >
                  {isSaving ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Trophy className="w-5 h-5 mr-2" />}
                  Submeter Prática
                </Button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
