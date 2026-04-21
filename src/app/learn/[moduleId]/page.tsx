
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
  AlertCircle, MessageSquare, XCircle, Eye, ExternalLink
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { 
  findKnowledgeAreaByLessonId, findTheoryLesson, findPracticeExercise, 
  findQuizById, findNextLessonId, findPreviousLessonId, findOrderedLessons 
} from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function LearnPage() {
  const params = useParams();
  const lessonId = params.moduleId as string;
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const { profile } = useAuth();
  const { markAsCompleted, isCompleted, progress } = useProgress();

  const data = useMemo(() => findKnowledgeAreaByLessonId(lessonId), [lessonId]);
  const theory = useMemo(() => findTheoryLesson(lessonId), [lessonId]);
  const practice = useMemo(() => findPracticeExercise(lessonId), [lessonId]);
  const quiz = useMemo(() => theory?.quizId ? findQuizById(theory.quizId) : null, [theory]);

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [completedObjectives, setCompletedObjectives] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (practice) {
      setSelectedLang(practice.language);
      
      if (practice.isProjectPart) {
        // Lógica de herança melhorada: busca o código do último laboratório completado
        const ordered = findOrderedLessons();
        const currentIndex = ordered.indexOf(lessonId);
        
        let lastFoundCode = "";
        for (let i = currentIndex - 1; i >= 0; i--) {
          const prevLessonProgress = progress.find(p => p.lesson_id === ordered[i]);
          if (prevLessonProgress?.last_code) {
            lastFoundCode = prevLessonProgress.last_code;
            break;
          }
        }

        if (lastFoundCode) {
          setCode(lastFoundCode);
          return;
        }
      }
      
      setCode(practice.template || "");
    }
  }, [practice, lessonId, progress]);

  const allAnswersCorrect = useMemo(() => {
    if (!quiz) return false;
    return quiz.questions.length > 0 && quiz.questions.every(q => quizAnswers[q.id] === q.correctAnswer);
  }, [quiz, quizAnswers]);

  if (!mounted) return null;
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
        const nextObjective = practice.objectives.find(obj => !newCompleted.includes(obj.id));
        setOutput(`> ⚠️ Simulação: ${newCompleted.length}/${practice.objectives.length} objetivos alcançados.\n> Próximo passo: ${nextObjective?.description || 'Verifique os requisitos.'}`);
      }
    }, 800);
  };

  const handlePreview = () => {
    const previewWindow = window.open('', '_blank');
    if (previewWindow) {
      previewWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Codworks Preview</title>
            <meta charset="UTF-8">
            <style>
              body { font-family: 'Inter', sans-serif; background: #0f172a; color: white; padding: 2rem; }
              ${practice?.language === 'css' ? code : ''}
            </style>
          </head>
          <body>
            ${practice?.language === 'html' ? code : (practice?.language === 'css' ? '<!-- Renderizando estilos sobre o conteúdo anterior -->' : '')}
          </body>
        </html>
      `);
      previewWindow.document.close();
    }
  };

  const handleQuizAction = async () => {
    if (!quiz) return;

    if (!allAnswersCorrect) {
      setShowQuizFeedback(true);
      toast({ 
        variant: "destructive", 
        title: "Ainda há erros", 
        description: "Analisa as dicas pedagógicas e tenta novamente." 
      });
      return;
    }

    setIsSaving(true);
    try {
      await markAsCompleted(lessonId, level.id, ka.id, 'theory', 100);
      setIsSuccess(true);
      toast({ title: "Perfeito! 🏆", description: "Excelente trabalho! Redirecionando para a prática..." });

      setTimeout(() => {
        const nextId = findNextLessonId(lessonId);
        if (nextId) router.push(`/learn/${nextId}`);
        else router.push('/dashboard');
      }, 2000);
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao guardar progresso", description: err.message });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCompletePractice = async () => {
    if (!profile) return;
    setIsSaving(true);
    try {
      await markAsCompleted(lessonId, level.id, ka.id, 'exercise', 100, code);
      toast({ title: t.wellDone, description: "Laboratório concluído! Seguindo para o próximo tópico..." });
      
      setTimeout(() => {
        const nextId = findNextLessonId(lessonId);
        if (nextId) router.push(`/learn/${nextId}`);
        else router.push('/dashboard');
      }, 2000);
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao guardar progresso", description: err.message });
    } finally {
      setIsSaving(false);
    }
  };

  const getMonacoLanguage = (lang: string) => {
    const map: Record<string, string> = { 
      javascript: "javascript", 
      typescript: "typescript", 
      python: "python", 
      java: "java", 
      cpp: "cpp", 
      html: "html", 
      css: "css", 
      sql: "sql", 
      bash: "shell", 
      concept: "markdown",
      english: "plaintext"
    };
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
             <Button 
               variant="outline" 
               size="sm" 
               onClick={() => router.push(`/community/exercise/${lessonId}`)}
               className="gap-2 rounded-full border-accent/20 bg-accent/5 text-accent hover:bg-accent/10"
             >
               <MessageSquare className="w-4 h-4" />
               <span className="hidden sm:inline">{t.requestHelp}</span>
             </Button>
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
                 <SheetDescription>Explora os tópicos deste nível.</SheetDescription>
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
                          <p className="text-sm text-muted-foreground">Valida o teu conhecimento para avançar para a prática.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-12">
                      {quiz.questions.map((q, qIndex) => {
                        const isCorrect = quizAnswers[q.id] === q.correctAnswer;
                        const hasSelected = quizAnswers[q.id] !== undefined;
                        const showHint = showQuizFeedback && !isCorrect && hasSelected;

                        return (
                          <div key={q.id} className="space-y-6">
                            <div className="flex gap-4">
                              <span className="text-2xl font-headline font-bold text-primary opacity-20">{String(qIndex + 1).padStart(2, '0')}</span>
                              <p className="text-lg font-medium pt-1">{q.question}</p>
                            </div>
                            
                            <RadioGroup 
                              disabled={isSuccess}
                              onValueChange={(val) => {
                                setQuizAnswers(prev => ({...prev, [q.id]: parseInt(val)}));
                              }} 
                              value={quizAnswers[q.id]?.toString()}
                              className="grid gap-4 ml-10"
                            >
                              {q.options.map((opt, i) => {
                                const isOptionSelected = quizAnswers[q.id] === i;
                                
                                let variantClass = "border bg-background/50 hover:border-primary/30";
                                if (isOptionSelected) {
                                  if (showQuizFeedback) {
                                    variantClass = isCorrect ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10";
                                  } else {
                                    variantClass = "border-primary bg-primary/5";
                                  }
                                }

                                return (
                                  <div key={i} className={cn("flex items-center space-x-2 p-5 rounded-2xl transition-all cursor-pointer", variantClass)}>
                                    <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} className="text-primary" />
                                    <Label htmlFor={`${q.id}-${i}`} className="flex-1 cursor-pointer font-normal text-base flex items-center justify-between">
                                      {opt}
                                      {showQuizFeedback && isOptionSelected && (
                                        isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />
                                      )}
                                    </Label>
                                  </div>
                                );
                              })}
                            </RadioGroup>
                            
                            {showHint && q.explanation && (
                              <div className="ml-10 p-5 rounded-2xl border bg-blue-500/5 border-blue-500/20 flex gap-4 animate-in fade-in slide-in-from-top-2">
                                <Info className="w-5 h-5 text-blue-500 shrink-0" />
                                <div>
                                  <p className="text-sm font-bold mb-1 text-blue-500">Dica Pedagógica:</p>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{q.explanation}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                    <Button 
                      onClick={handleQuizAction} 
                      className={cn(
                        "w-full h-16 rounded-2xl font-bold text-xl transition-all mt-10 shadow-xl",
                        allAnswersCorrect ? "bg-green-600 hover:bg-green-700 shadow-green-500/20" : "bg-primary shadow-primary/20"
                      )} 
                      disabled={isSaving || isSuccess || Object.keys(quizAnswers).length < quiz.questions.length}
                    >
                      {isSaving ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : <ShieldCheck className="w-6 h-6 mr-2" />}
                      {allAnswersCorrect ? "Finalizar Teoria e Praticar" : "Verificar Respostas"}
                    </Button>
                 </div>
               )}
            </div>
          ) : practice ? (
            <div className="h-full flex flex-col bg-[#1e1e1e]">
               <div className="p-3 border-b border-white/5 flex items-center justify-between bg-black/20">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-md bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                      {practice.language}
                    </span>
                    {practice.isProjectPart && (
                      <span className="px-3 py-1 rounded-md bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/20">
                        Projeto Master
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {['html', 'css', 'javascript'].includes(practice.language.toLowerCase()) && (
                       <Button variant="outline" size="sm" onClick={handlePreview} className="border-white/20 bg-white/5 hover:bg-white/10 h-8 rounded-full text-xs font-bold px-6 gap-2">
                          PRÉ-VISUALIZAR
                          <Eye className="w-3 h-3" />
                       </Button>
                    )}
                    <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 h-8 rounded-full text-xs font-bold px-6">
                      {isRunning ? "VALIDANDO..." : "EXECUTAR"}
                      <Play className="w-3 h-3 ml-2 fill-current" />
                    </Button>
                  </div>
               </div>
               <div className="flex-1 relative">
                 <Editor
                   height="100%"
                   language={getMonacoLanguage(selectedLang)}
                   theme="vs-dark"
                   value={code}
                   onChange={(value) => setCode(value || "")}
                   options={{ 
                     minimap: { enabled: false }, 
                     fontSize: 14, 
                     lineNumbers: 'on', 
                     scrollBeyondLastLine: false, 
                     automaticLayout: true, 
                     padding: { top: 20 },
                     wordWrap: "on"
                   }}
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
                  <h3 className="font-headline font-bold text-sm uppercase tracking-widest">Missão Atual</h3>
                </div>
                <div className="text-[10px] font-bold text-muted-foreground">
                  {completedObjectives.length}/{practice.objectives.length} CONCLUÍDO
                </div>
              </div>
              
              <div className="mb-6 bg-accent/5 border border-accent/10 p-4 rounded-xl prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: practice.detailedExplanation }} />
              
              <div className="flex-1 overflow-y-auto pr-2">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  <AccordionItem value="objectives-list" className="border-none">
                    <AccordionTrigger className="bg-primary/10 hover:bg-primary/20 transition-all rounded-xl px-4 py-3 hover:no-underline border border-primary/20">
                       <div className="flex items-center gap-3">
                          <Zap className="w-4 h-4 text-primary fill-primary" />
                          <span className="font-headline font-bold text-xs uppercase tracking-tighter">Ver Todos os Objetivos</span>
                       </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-3">
                      {practice.objectives.map((obj, i) => (
                        <div 
                          key={obj.id} 
                          className={cn(
                            "rounded-xl border p-4 transition-all", 
                            completedObjectives.includes(obj.id) 
                              ? "bg-green-500/10 border-green-500/20" 
                              : "bg-background/40 border-white/5"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div className={cn(
                              "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5", 
                              completedObjectives.includes(obj.id) ? "bg-green-500" : "bg-secondary"
                            )}>
                              {completedObjectives.includes(obj.id) ? <CheckCircle2 className="w-3 h-3 text-white" /> : <span className="text-[10px]">{i + 1}</span>}
                            </div>
                            <div className="flex-1 space-y-2">
                              <span className={cn("text-xs font-bold leading-tight block", completedObjectives.includes(obj.id) && "text-green-500")}>
                                {obj.description}
                              </span>
                              {obj.hint && !completedObjectives.includes(obj.id) && (
                                <div className="p-2 bg-primary/5 rounded-lg border border-primary/10 mt-2">
                                  <code className="text-[9px] font-code text-primary/80 break-all">{obj.hint}</code>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {completedObjectives.length === practice.objectives.length && (
                <Button onClick={handleCompletePractice} className="w-full mt-6 h-14 rounded-2xl font-bold text-lg bg-primary shadow-xl shadow-primary/20" disabled={isSaving}>
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
