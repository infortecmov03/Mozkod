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
  ShieldCheck, HelpCircle, Info, ChevronRight, Video, Code2,
  ExternalLink, MonitorSmartphone, AlertCircle, MessageSquare,
  XCircle, RotateCcw
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { findKnowledgeAreaByLessonId, findTheoryLesson, findPracticeExercise, findQuizById, findNextLessonId } from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { cn } from "@/lib/utils";
import Editor from "@monaco-editor/react";
import Link from "next/link";

export default function LearnPage() {
  const params = useParams();
  const lessonId = params.moduleId as string;
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const { profile } = useAuth();
  const { markAsCompleted, isCompleted } = useProgress();

  const data = useMemo(() => findKnowledgeAreaByLessonId(lessonId), [lessonId]);
  const theory = useMemo(() => findTheoryLesson(lessonId), [lessonId]);
  const practice = useMemo(() => findPracticeExercise(lessonId), [lessonId]);
  const quiz = useMemo(() => theory?.quizId ? findQuizById(theory.quizId) : null, [theory]);

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [completedObjectives, setCompletedObjectives] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (practice) {
      setSelectedLang(practice.language);
      setCode(practice.template || "");
    }
  }, [practice]);

  if (!data) return <div className="p-20 text-center font-headline text-2xl">Conteúdo não encontrado</div>;

  const { ka, level } = data;

  const handleRunCode = async () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      if (!practice) return;

      const newCompleted = practice.objectives
        .filter(obj => code.includes(obj.test))
        .map(obj => obj.id);

      setCompletedObjectives(newCompleted);

      if (newCompleted.length === practice.objectives.length) {
        setOutput("> ✅ Simulação concluída com sucesso!\n> Todos os objetivos alcançados.\n> Pronto para submeter.");
      } else {
        setOutput(`> ⚠️ Simulação: ${newCompleted.length}/${practice.objectives.length} objetivos alcançados.\n> Verifique a sintaxe e os requisitos.`);
      }
    }, 800);
  };

  const handleOpenVSCode = () => {
    const extMap: Record<string, string> = {
      python: 'py', cpp: 'cpp', java: 'java', go: 'go', rust: 'rs', 
      kotlin: 'kt', ruby: 'rb', php: 'php', javascript: 'js', typescript: 'ts'
    };
    const ext = extMap[selectedLang] || 'txt';
    const vscodeUri = `vscode://file/codworks-moz/lessons/${lessonId}.${ext}`;
    window.location.href = vscodeUri;
    toast({ title: "Abrindo VS Code", description: "Certifique-se de que o VS Code está instalado." });
  };

  const handleQuizSubmit = async () => {
    if (!quiz) return;
    
    const correctCount = quiz.questions.filter(q => quizAnswers[q.id] === q.correctAnswer).length;
    const score = Math.round((correctCount / quiz.questions.length) * 100);

    setQuizSubmitted(true);

    if (score === 100) {
      toast({ 
        title: "Perfeito! 🏆", 
        description: "Excelente trabalho! Redirecionando para a próxima lição em 3 segundos..." 
      });
      
      await handleComplete(100);

      setTimeout(() => {
        const nextId = findNextLessonId(lessonId);
        if (nextId) router.push(`/learn/${nextId}`);
        else router.push('/dashboard');
      }, 3000);

    } else if (score >= quiz.passingScore) {
      toast({ title: t.wellDone, description: `Aprovado com ${score}%` });
      await handleComplete(score);
    } else {
      toast({ 
        variant: "destructive", 
        title: "Nota insuficiente", 
        description: `Pontuação: ${score}%. Analisa as dicas e tenta novamente.` 
      });
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const handleComplete = async (score: number) => {
    if (!profile) return;
    setIsSaving(true);
    try {
      await markAsCompleted(lessonId, level.id, ka.id, theory ? 'theory' : 'exercise', score, practice ? code : undefined);
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao guardar progresso", description: err.message });
    } finally {
      setIsSaving(false);
    }
  };

  const getMonacoLanguage = (lang: string) => {
    const map: Record<string, string> = { javascript: "javascript", typescript: "typescript", python: "python", java: "java", cpp: "cpp", html: "html", css: "css", sql: "sql", bash: "shell", go: "go", rust: "rust", kotlin: "kotlin", ruby: "ruby", php: "php", concept: "markdown" };
    return map[lang] || "plaintext";
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Navigation />
      
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
           {practice && (
             <>
               <Button 
                 variant="outline" 
                 size="sm" 
                 onClick={() => router.push(`/community/exercise/${lessonId}`)}
                 className="gap-2 rounded-full border-accent/20 bg-accent/5 text-accent hover:bg-accent/10"
               >
                 <MessageSquare className="w-4 h-4" />
                 <span className="hidden sm:inline">{t.requestHelp}</span>
               </Button>
             </>
           )}
           <Sheet>
             <SheetTrigger asChild>
               <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary/20 bg-primary/5">
                 <Menu className="w-4 h-4 text-primary" />
                 <span className="hidden sm:inline">Sumário</span>
               </Button>
             </SheetTrigger>
             <SheetContent side="left" className="w-80 overflow-y-auto">
               <SheetHeader className="mb-6">
                 <SheetTitle>Navegação do Módulo</SheetTitle>
               </SheetHeader>
               <div className="space-y-8">
                 {ka.theory?.length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-3 h-3" /> Teoria
                      </h4>
                      <div className="grid gap-1">
                        {ka.theory.map(l => (
                            <Button key={l.id} variant={lessonId === l.id ? "secondary" : "ghost"} className="w-full justify-start text-xs h-9 rounded-lg" onClick={() => router.push(`/learn/${l.id}`)}>
                              {isCompleted(l.id) && <CheckCircle2 className="w-3 h-3 mr-2 text-green-500" />}
                              {l.title}
                            </Button>
                        ))}
                      </div>
                    </div>
                 )}
                 {ka.practice && Object.keys(ka.practice).length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <Code2 className="w-3 h-3" /> Laboratórios
                      </h4>
                      {Object.entries(ka.practice).map(([lang, exercises]) => (
                        <div key={lang} className="mt-4 first:mt-0">
                            <p className="text-[9px] font-bold text-primary mb-2 uppercase opacity-60 ml-2">{lang}</p>
                            <div className="grid gap-1">
                              {exercises.map(ex => (
                                <Button key={ex.id} variant={lessonId === ex.id ? "secondary" : "ghost"} className="w-full justify-start text-xs h-9 rounded-lg" onClick={() => router.push(`/learn/${ex.id}`)}>
                                  {isCompleted(ex.id) && <CheckCircle2 className="w-3 h-3 mr-2 text-green-500" />}
                                  {ex.title}
                                </Button>
                              ))}
                            </div>
                        </div>
                      ))}
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
                  {theory.youtubeVideoId && (
                    <div className="aspect-video w-full rounded-3xl overflow-hidden bg-muted border shadow-2xl">
                       <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${theory.youtubeVideoId}`} title="Video" allowFullScreen />
                    </div>
                  )}
                  <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: theory.content }} />
               </div>
               {quiz && (
                 <div className="bg-card border-2 border-primary/10 rounded-[2.5rem] p-8 md:p-12 space-y-8 shadow-2xl relative overflow-hidden group mb-20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center"><HelpCircle className="w-6 h-6 text-primary" /></div>
                        <div>
                          <h3 className="font-headline font-bold text-2xl">{quiz.title}</h3>
                          <p className="text-sm text-muted-foreground">Valida o teu conhecimento para avançar.</p>
                        </div>
                      </div>
                      {quizSubmitted && (
                        <Button variant="outline" size="sm" onClick={resetQuiz} className="rounded-full gap-2 border-primary/20 hover:bg-primary/5">
                           <RotateCcw className="w-4 h-4" /> Tentar Novamente
                        </Button>
                      )}
                    </div>
                    <div className="space-y-12">
                      {quiz.questions.map((q, qIndex) => {
                        const isCorrect = quizAnswers[q.id] === q.correctAnswer;
                        const hasSelected = quizAnswers[q.id] !== undefined;

                        return (
                          <div key={q.id} className="space-y-6">
                            <div className="flex gap-4">
                              <span className="text-2xl font-headline font-bold text-primary opacity-20">{String(qIndex + 1).padStart(2, '0')}</span>
                              <p className="text-lg font-medium pt-1">{q.question}</p>
                            </div>
                            <RadioGroup 
                              disabled={quizSubmitted}
                              onValueChange={(val) => setQuizAnswers(prev => ({...prev, [q.id]: parseInt(val)}))} 
                              value={quizAnswers[q.id]?.toString()}
                              className="grid gap-4 ml-10"
                            >
                              {q.options.map((opt, i) => {
                                const isOptionSelected = quizAnswers[q.id] === i;
                                const isOptionCorrect = q.correctAnswer === i;
                                
                                let variantClass = "border bg-background/50 hover:border-primary/30";
                                if (quizSubmitted) {
                                  if (isOptionSelected && isCorrect) variantClass = "border-green-500 bg-green-500/10";
                                  else if (isOptionSelected && !isCorrect) variantClass = "border-red-500 bg-red-500/10";
                                  else if (isOptionCorrect) variantClass = "border-green-500/50 opacity-80";
                                } else if (isOptionSelected) {
                                  variantClass = "border-primary bg-primary/5";
                                }

                                return (
                                  <div key={i} className={cn("flex items-center space-x-2 p-5 rounded-2xl transition-all cursor-pointer", variantClass)}>
                                    <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} className="text-primary" />
                                    <Label htmlFor={`${q.id}-${i}`} className="flex-1 cursor-pointer font-normal text-base flex items-center justify-between">
                                      {opt}
                                      {quizSubmitted && isOptionCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                      {quizSubmitted && isOptionSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                                    </Label>
                                  </div>
                                );
                              })}
                            </RadioGroup>
                            
                            {quizSubmitted && q.explanation && (
                              <div className={cn("ml-10 p-5 rounded-2xl border flex gap-4 animate-in fade-in slide-in-from-top-2", isCorrect ? "bg-green-500/5 border-green-500/20" : "bg-blue-500/5 border-blue-500/20")}>
                                {isCorrect ? <Zap className="w-5 h-5 text-green-500 shrink-0" /> : <Info className="w-5 h-5 text-blue-500 shrink-0" />}
                                <div>
                                  <p className={cn("text-sm font-bold mb-1", isCorrect ? "text-green-500" : "text-blue-500")}>
                                    {isCorrect ? "Excelente!" : "Dica Pedagógica:"}
                                  </p>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {q.explanation}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                    <Button 
                      onClick={handleQuizSubmit} 
                      className="w-full h-16 rounded-2xl font-bold text-xl bg-primary shadow-xl shadow-primary/20 transition-all mt-10" 
                      disabled={isSaving || quizSubmitted || Object.keys(quizAnswers).length < quiz.questions.length}
                    >
                      {isSaving ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : <ShieldCheck className="w-6 h-6 mr-2" />}
                      Finalizar Lição
                    </Button>
                 </div>
               )}
            </div>
          ) : practice ? (
            <div className="h-full flex flex-col bg-[#1e1e1e]">
               <div className="p-3 border-b border-white/5 flex items-center justify-between bg-black/20">
                  <span className="px-3 py-1 rounded-md bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    {practice.language}
                  </span>
                  <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 h-8 rounded-full text-xs font-bold px-6">
                    {isRunning ? "VALIDANDO..." : "EXECUTAR"}
                    <Play className="w-3 h-3 ml-2 fill-current" />
                  </Button>
               </div>
               <div className="flex-1 relative">
                 <Editor
                   height="100%"
                   language={getMonacoLanguage(selectedLang)}
                   theme="vs-dark"
                   value={code}
                   onChange={(value) => setCode(value || "")}
                   options={{ minimap: { enabled: false }, fontSize: 14, lineNumbers: 'on', scrollBeyondLastLine: false, automaticLayout: true, padding: { top: 20 } }}
                 />
               </div>
               <div className="h-40 border-t border-white/5 bg-black/40 p-4 font-code text-xs">
                  <div className="text-muted-foreground mb-2 flex items-center gap-2 uppercase tracking-widest font-bold text-[10px]">
                    <Terminal className="w-3 h-3" /> Consola
                  </div>
                  <div className={cn("whitespace-pre overflow-y-auto h-24", output.includes('✅') ? 'text-green-400' : 'text-blue-300')}>
                    {output || `> Simulador de ${selectedLang} pronto.`}
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
                  <h3 className="font-headline font-bold text-sm uppercase tracking-widest">Objetivos</h3>
                </div>
                <div className="text-[10px] font-bold text-muted-foreground">
                  {completedObjectives.length}/{practice.objectives.length} CONCLUÍDO
                </div>
              </div>
              <div className="mb-6 bg-accent/5 border border-accent/10 p-4 rounded-xl prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: practice.detailedExplanation }} />
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {practice.objectives.map((obj, i) => (
                    <AccordionItem key={obj.id} value={obj.id} className={cn("rounded-xl border transition-all overflow-hidden", completedObjectives.includes(obj.id) ? "bg-green-500/5 border-green-500/20" : "bg-background/40 border-white/5")}>
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <div className="flex items-center gap-3 text-left">
                          <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", completedObjectives.includes(obj.id) ? "bg-green-500" : "bg-secondary")}>
                            {completedObjectives.includes(obj.id) ? <CheckCircle2 className="w-3 h-3 text-white" /> : <span className="text-[10px]">{i + 1}</span>}
                          </div>
                          <span className={cn("text-xs font-bold", completedObjectives.includes(obj.id) && "text-green-500")}>{obj.description}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 space-y-4">
                        {obj.hint && <div className="p-3 bg-primary/5 rounded-lg border border-primary/10"><code className="text-[10px] font-code text-primary/80">{obj.hint}</code></div>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              {completedObjectives.length === practice.objectives.length && (
                <Button onClick={() => handleComplete(100)} className="w-full mt-6 h-14 rounded-2xl font-bold text-lg bg-primary shadow-xl shadow-primary/20" disabled={isSaving}>
                  {isSaving ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Trophy className="w-5 h-5 mr-2" />}
                  Finalizar Laboratório
                </Button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
