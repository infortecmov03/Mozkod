
"use client";

import { useState, useEffect, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Terminal, BookOpen, Play, CheckCircle2, ChevronLeft, 
  Trophy, Zap, Loader2, Menu, ListChecks, 
  Code2, ShieldCheck, HelpCircle, Info
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  const { markAsCompleted, isCompleted } = useProgress();

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
    setTimeout(async () => {
      setIsRunning(false);
      if (!practice) return;

      const newCompleted = practice.objectives
        .filter(obj => new RegExp(obj.validationRegex, 'i').test(code))
        .map(obj => obj.id);

      setCompletedObjectives(newCompleted);

      if (newCompleted.length === practice.objectives.length) {
        setOutput("> ✅ Todos os objetivos concluídos!\n> Pronto para submeter.");
      } else {
        setOutput(`> ⚠️ ${newCompleted.length}/${practice.objectives.length} objetivos alcançados.\n> Revise o checklist e as dicas.`);
      }
    }, 800);
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
      toast({ title: t.wellDone, description: `Resultado: ${score}%` });
      await handleComplete(score);
    } else {
      toast({ 
        variant: "destructive", 
        title: "Tente novamente", 
        description: `Resultado: ${score}%. Precisas de pelo menos 70%.` 
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
      toast({ title: "Sucesso!", description: "Progresso guardado." });
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro", description: err.message });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Navigation />
      
      {/* Header Contextual */}
      <div className="bg-card/50 border-b px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push('/modules')} className="rounded-full">
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
           <Sheet>
             <SheetTrigger asChild>
               <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary/20 bg-primary/5">
                 <Menu className="w-4 h-4 text-primary" />
                 <span className="hidden sm:inline">Conteúdo do Módulo</span>
               </Button>
             </SheetTrigger>
             <SheetContent side="left" className="w-80">
               <SheetHeader className="mb-6">
                 <SheetTitle>Navegação</SheetTitle>
               </SheetHeader>
               <div className="space-y-6">
                 <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                     <BookOpen className="w-3 h-3" /> Teoria
                   </h4>
                   <div className="grid gap-1">
                     {ka.theoryLessons.map(l => (
                        <Button 
                          key={l.id} 
                          variant={lessonId === l.id ? "secondary" : "ghost"}
                          className="w-full justify-start text-xs h-9 rounded-lg"
                          onClick={() => router.push(`/learn/${l.id}`)}
                        >
                          {isCompleted(l.id) && <CheckCircle2 className="w-3 h-3 mr-2 text-green-500" />}
                          {l.title}
                        </Button>
                     ))}
                   </div>
                 </div>
                 {ka.practiceExercises.length > 0 && (
                   <div>
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                       <Terminal className="w-3 h-3" /> Laboratórios
                     </h4>
                     <div className="grid gap-1">
                       {ka.practiceExercises.map(p => (
                          <Button 
                            key={p.id} 
                            variant={lessonId === p.id ? "secondary" : "ghost"}
                            className="w-full justify-start text-xs h-9 rounded-lg"
                            onClick={() => router.push(`/learn/${p.id}`)}
                          >
                            {isCompleted(p.id) && <CheckCircle2 className="w-3 h-3 mr-2 text-green-500" />}
                            {p.title}
                          </Button>
                       ))}
                     </div>
                   </div>
                 )}
               </div>
             </SheetContent>
           </Sheet>
        </div>
      </div>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className={cn("flex-1 overflow-y-auto bg-background", practice && "md:w-3/5 border-r")}>
          {theory ? (
            <div className="max-w-3xl mx-auto p-8 md:p-16 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="space-y-6">
                  <h1 className="font-headline text-3xl md:text-5xl font-bold">{theory.title}</h1>
                  
                  <Card className="bg-primary/5 border-primary/10 p-6 rounded-2xl flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Para quem nunca programou:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{theory.beginnerExplanation}</p>
                    </div>
                  </Card>

                  <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                    {theory.content.split('\n').map((para, i) => <p key={i}>{para}</p>)}
                  </div>
               </div>

               {theory.quiz.length > 0 && (
                 <div className="bg-card/30 border border-white/5 rounded-3xl p-8 md:p-12 space-y-8">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-6 h-6 text-accent" />
                      <h3 className="font-headline font-bold text-xl">Quiz de Validação</h3>
                    </div>
                    {theory.quiz.map((q) => (
                      <div key={q.id} className="space-y-4">
                        <p className="font-medium">{q.question}</p>
                        <RadioGroup 
                          onValueChange={(val) => setQuizAnswers(prev => ({...prev, [q.id]: parseInt(val)}))}
                          className="grid gap-3"
                        >
                          {q.options.map((opt, i) => (
                            <div key={i} className="flex items-center space-x-2 p-4 rounded-xl border bg-background/50 hover:bg-primary/5 transition-all cursor-pointer">
                              <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} />
                              <Label htmlFor={`${q.id}-${i}`} className="flex-1 cursor-pointer font-normal">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}
                    <Button onClick={handleQuizSubmit} className="w-full h-14 rounded-2xl font-bold text-lg" disabled={isSaving}>
                      {isSaving ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <ShieldCheck className="w-5 h-5 mr-2" />}
                      Validar e Avançar
                    </Button>
                 </div>
               )}
            </div>
          ) : practice ? (
            <div className="h-full flex flex-col bg-[#0d1117]">
               <div className="p-3 border-b border-white/5 flex items-center justify-between bg-black/20">
                  <div className="flex gap-2">
                    {ka.supportedLanguages.map(lang => (
                      <Button
                        key={lang}
                        variant={selectedLang === lang ? "secondary" : "ghost"}
                        size="sm"
                        className={cn("h-7 px-3 rounded-md text-[10px] uppercase font-bold", selectedLang === lang && "bg-primary text-primary-foreground")}
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
               
               <div className="flex-1 relative">
                 <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full bg-transparent p-6 font-code text-sm resize-none outline-none text-blue-300 leading-relaxed"
                  spellCheck={false}
                 />
               </div>

               <div className="h-40 border-t border-white/5 bg-black/40 p-4 font-code text-xs">
                  <div className="text-muted-foreground mb-2 flex items-center gap-2 uppercase tracking-widest font-bold text-[10px]">
                    <Terminal className="w-3 h-3" /> Consola de Saída
                  </div>
                  <div className={cn("whitespace-pre overflow-y-auto h-24", output.includes('✅') ? 'text-green-400' : 'text-blue-300')}>
                    {output || "> Pronto para o laboratório. Escreve o teu código e clica em EXECUTAR."}
                  </div>
               </div>
            </div>
          ) : null}
        </div>

        {practice && (
          <div className="md:w-2/5 bg-card/20 flex flex-col border-l border-white/5 overflow-hidden">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-primary" />
                  <h3 className="font-headline font-bold text-sm uppercase tracking-widest">Passo a Passo</h3>
                </div>
                <div className="text-[10px] font-bold text-muted-foreground">
                  {completedObjectives.length}/{practice.objectives.length} CONCLUÍDO
                </div>
              </div>

              <div className="mb-6 bg-accent/10 border border-accent/20 p-4 rounded-xl">
                 <h4 className="text-xs font-bold text-accent mb-1 flex items-center gap-2 uppercase">
                   <Zap className="w-3 h-3" /> Guia de Início
                 </h4>
                 <p className="text-xs text-muted-foreground leading-relaxed">{practice.beginnerGuide}</p>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {practice.objectives.map((obj, i) => (
                    <AccordionItem 
                      key={obj.id} 
                      value={obj.id}
                      className={cn(
                        "rounded-xl border transition-all overflow-hidden",
                        completedObjectives.includes(obj.id) 
                          ? "bg-green-500/5 border-green-500/20" 
                          : "bg-background/40 border-white/5"
                      )}
                    >
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <div className="flex items-center gap-3 text-left">
                          <div className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                            completedObjectives.includes(obj.id) ? "bg-green-500" : "bg-secondary"
                          )}>
                            {completedObjectives.includes(obj.id) ? <CheckCircle2 className="w-3 h-3 text-white" /> : <span className="text-[10px]">{i + 1}</span>}
                          </div>
                          <span className={cn("text-xs font-bold", completedObjectives.includes(obj.id) && "text-green-500")}>
                            {obj.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 space-y-4">
                        <div className="space-y-2">
                           <p className="text-xs text-muted-foreground leading-relaxed">{obj.description}</p>
                           <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                              <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tighter">Explicação Passo a Passo:</p>
                              <p className="text-[11px] text-muted-foreground">{obj.explanation}</p>
                           </div>
                           <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                              <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tighter">💡 Dica de Código:</p>
                              <code className="text-[10px] font-code text-primary/80">{obj.hint}</code>
                           </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {completedObjectives.length === practice.objectives.length && (
                <Button 
                  onClick={() => handleComplete(100)} 
                  className="w-full mt-6 h-14 rounded-2xl font-bold text-lg bg-primary shadow-xl shadow-primary/20 animate-in fade-in slide-in-from-bottom-2"
                  disabled={isSaving}
                >
                  {isSaving ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Trophy className="w-5 h-5 mr-2" />}
                  Finalizar Exercício
                </Button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
