'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Terminal, BookOpen, Play, CheckCircle2, ChevronLeft, 
  Trophy, Zap, Loader2, Menu, ListChecks, 
  ShieldCheck, HelpCircle, Info, ChevronRight, Video, Code2,
  AlertCircle, MessageSquare, XCircle, Eye, ExternalLink,
  PanelRightClose, PanelRightOpen, Lightbulb, ChevronDown, ChevronUp, GripHorizontal,
  FileCode, Palette, Braces, RefreshCcw, EyeOff, Layout, Brain, Sparkles
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { useIsMobile } from "@/hooks/use-mobile";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function LearnPage() {
  const params = useParams();
  const lessonId = params.moduleId as string;
  const router = useRouter();
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const { t } = useLanguage();
  const { profile } = useAuth();
  const { markAsCompleted, isCompleted, progress } = useProgress();

  const data = useMemo(() => findKnowledgeAreaByLessonId(lessonId), [lessonId]);
  const theory = useMemo(() => findTheoryLesson(lessonId), [lessonId]);
  const practice = useMemo(() => findPracticeExercise(lessonId), [lessonId]);
  const quiz = useMemo(() => theory?.quizId ? findQuizById(theory.quizId) : null, [theory]);

  // Code States
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [code, setCode] = useState("");
  
  const [activeTab, setActiveTab] = useState<string>("code");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [completedObjectives, setCompletedObjectives] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showPreview, setShowPreview] = useState(true);
  
  // Console & Preview States
  const [consoleHeight, setConsoleHeight] = useState(120);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isWebLang = useMemo(() => 
    ['html', 'css', 'javascript'].includes(practice?.language.toLowerCase() || ''), 
    [practice]
  );

  const isConceptLab = useMemo(() => practice?.language.toLowerCase() === 'concept', [practice]);

  // Persistence keys
  const getStorageKey = (lang: string) => `cwm_code_${lessonId}_${lang}`;

  // 1. Initial Load Logic
  useEffect(() => {
    setMounted(true);
    if (!practice) return;

    setSelectedLang(practice.language);
    
    // Set default active tab
    if (isWebLang) {
      const defaultTab = practice.language === 'javascript' ? 'js' : (practice.language === 'css' ? 'css' : 'html');
      setActiveTab(defaultTab);
    } else {
      setActiveTab('code');
    }

    const ordered = findOrderedLessons();
    const currentIndex = ordered.indexOf(lessonId);

    const loadCode = (langType: 'html' | 'css' | 'js' | 'code') => {
      const local = localStorage.getItem(getStorageKey(langType));
      if (local) return local;

      const currentProg = progress.find(p => p.lesson_id === lessonId);
      if (currentProg?.last_code && (
        (langType === 'html' && practice.language === 'html') ||
        (langType === 'css' && practice.language === 'css') ||
        (langType === 'js' && practice.language === 'javascript') ||
        (langType === 'code' && !isWebLang)
      )) {
        return currentProg.last_code;
      }

      if (practice.isProjectPart && langType !== 'code') {
        for (let i = currentIndex - 1; i >= 0; i--) {
          const prevId = ordered[i];
          const prevProg = progress.find(p => p.lesson_id === prevId);
          if (!prevProg?.last_code) continue;

          const prevEx = findPracticeExercise(prevId);
          if (!prevEx) continue;

          if (langType === 'html' && prevEx.language === 'html') return prevProg.last_code;
          if (langType === 'css' && prevEx.language === 'css') return prevProg.last_code;
          if (langType === 'js' && prevEx.language === 'javascript') return prevProg.last_code;
        }
      }

      if (langType === 'html') return practice.htmlTemplate || (practice.language === 'html' ? practice.template : "<!-- Estrutura HTML -->");
      if (langType === 'css') return practice.cssTemplate || (practice.language === 'css' ? practice.template : "/* Estilos CSS */");
      if (langType === 'js') return practice.jsTemplate || (practice.language === 'javascript' ? practice.template : "// Lógica JS");
      return practice.template || "";
    };

    setHtmlCode(loadCode('html'));
    setCssCode(loadCode('css'));
    setJsCode(loadCode('js'));
    setCode(loadCode('code'));

  }, [practice, lessonId, progress, isWebLang]);

  // 2. LocalStorage Sync
  useEffect(() => {
    if (mounted && practice) {
      localStorage.setItem(getStorageKey('html'), htmlCode);
      localStorage.setItem(getStorageKey('css'), cssCode);
      localStorage.setItem(getStorageKey('js'), jsCode);
      localStorage.setItem(getStorageKey('code'), code);
    }
  }, [htmlCode, cssCode, jsCode, code, mounted, lessonId]);

  // 3. Live Preview Logic
  const updatePreview = useCallback(() => {
    if (!iframeRef.current || !isWebLang) return;
    
    const doc = `
      <!DOCTYPE html>
      <html lang="pt-MZ">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Inter', sans-serif; background: #0f172a; color: white; padding: 1.5rem; margin: 0; }
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            (function() {
              try {
                ${jsCode}
              } catch (e) {
                console.error(e);
                document.body.innerHTML += '<div style="color: #f87171; background: #450a0a; padding: 1rem; margin-top: 2rem; border-radius: 0.5rem; border: 1px solid #991b1b; font-family: monospace; font-size: 12px;"><b>Runtime Error:</b> ' + e.message + '</div>';
              }
            })();
          </script>
        </body>
      </html>
    `;
    
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(doc);
      iframeDoc.close();
    }
  }, [htmlCode, cssCode, jsCode, isWebLang]);

  useEffect(() => {
    const timer = setTimeout(updatePreview, 500);
    return () => clearTimeout(timer);
  }, [updatePreview]);

  const handleRunCode = async () => {
    setIsRunning(true);
    if (!isConsoleOpen) setIsConsoleOpen(true);
    
    setTimeout(() => {
      setIsRunning(false);
      if (!practice) return;

      const currentLangCode = practice.language === 'html' ? htmlCode : 
                             practice.language === 'css' ? cssCode : 
                             practice.language === 'javascript' ? jsCode : code;

      const newCompleted = practice.objectives
        .filter(obj => currentLangCode.includes(obj.test))
        .map(obj => obj.id);

      setCompletedObjectives(newCompleted);

      if (newCompleted.length === practice.objectives.length) {
        setOutput("> ✅ Validação: SUCESSO\n> Todos os requisitos satisfeitos.\n> Pronto para submeter.");
        if (isMobile) setActiveTab("mission"); 
      } else {
        const nextObjective = practice.objectives.find(obj => !newCompleted.includes(obj.id));
        setOutput(`> ⚠️ Validação: ${newCompleted.length}/${practice.objectives.length}\n> Pendente: ${nextObjective?.description || 'Verifique os requisitos.'}`);
      }
    }, 600);
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
      toast({ title: "Teoria Validada! 🏆", description: "Seguindo para a aplicação prática..." });

      setTimeout(() => {
        const nextId = findNextLessonId(lessonId);
        if (nextId) router.push(`/learn/${nextId}`);
        else router.push('/dashboard');
      }, 1000);
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao guardar progresso", description: err.message });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCompletePractice = async () => {
    if (!profile || !practice) return;
    setIsSaving(true);
    try {
      const finalCode = practice.language === 'html' ? htmlCode : 
                        practice.language === 'css' ? cssCode : 
                        practice.language === 'javascript' ? jsCode : code;

      await markAsCompleted(lessonId, level.id, ka.id, 'exercise', 100, finalCode);
      toast({ title: t.wellDone, description: "Laboratório concluído com sucesso!" });
      
      localStorage.removeItem(getStorageKey('html'));
      localStorage.removeItem(getStorageKey('css'));
      localStorage.removeItem(getStorageKey('js'));
      localStorage.removeItem(getStorageKey('code'));

      setTimeout(() => {
        const nextId = findNextLessonId(lessonId);
        if (nextId) router.push(`/learn/${nextId}`);
        else router.push('/dashboard');
      }, 1000);
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao guardar progresso", description: err.message });
    } finally {
      setIsSaving(false);
    }
  };

  const allAnswersCorrect = useMemo(() => {
    if (!quiz) return false;
    return quiz.questions.length > 0 && quiz.questions.every(q => quizAnswers[q.id] === q.correctAnswer);
  }, [quiz, quizAnswers]);

  const getMonacoLanguage = (tab: string) => {
    if (tab === 'html') return 'html';
    if (tab === 'css') return 'css';
    if (tab === 'js') return 'javascript';
    if (isConceptLab) return 'markdown';
    const map: Record<string, string> = { 
      javascript: "javascript", python: "python", java: "java", 
      cpp: "cpp", bash: "shell", concept: "markdown"
    };
    return map[selectedLang] || "plaintext";
  };

  if (!mounted) return null;
  if (!data) return <div className="p-20 text-center font-headline text-2xl">Conteúdo não encontrado</div>;

  const { ka, level } = data;

  const MissionContent = practice ? (
    <div className="p-5 h-full flex flex-col scroll-container overflow-y-auto bg-card/30">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            {isConceptLab ? <Brain className="w-4 h-4 text-primary" /> : <ListChecks className="w-4 h-4 text-primary" />}
          </div>
          <h3 className="font-headline font-bold text-xs uppercase tracking-widest">
            {isConceptLab ? "Missão Conceptual" : "Missão Técnica"}
          </h3>
        </div>
        <div className="text-[9px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
          {completedObjectives.length}/{practice.objectives.length} OK
        </div>
      </div>

      {isConceptLab && (
        <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-3 animate-in zoom-in duration-300">
          <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
          <p className="text-[11px] text-blue-400 font-bold leading-tight">
            ESTE É UM DESAFIO DE LÓGICA PURA.<br/>
            <span className="font-normal opacity-80 mt-1 block">O editor serve apenas para escreveres a tua resposta lógica conforme as instruções do briefing abaixo.</span>
          </p>
        </div>
      )}
      
      <Accordion type="single" collapsible className="w-full mb-6">
        <AccordionItem value="explanation" className="border-none">
          <AccordionTrigger className="bg-accent/10 hover:bg-accent/20 transition-all rounded-xl px-4 py-3 hover:no-underline border border-accent/20 text-accent">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-4 h-4 fill-accent" />
              <span className="font-headline font-bold text-[10px] uppercase tracking-tighter">Briefing da Operação</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="bg-background/40 border border-white/5 p-4 rounded-xl prose prose-invert prose-sm max-w-none text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: practice.detailedExplanation }} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="flex-1 space-y-3 mb-6">
        <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-4">Requisitos do Sistema</h4>
        {practice.objectives.map((obj, i) => (
          <div 
            key={obj.id} 
            className={cn(
              "rounded-xl border p-4 transition-all relative overflow-hidden", 
              completedObjectives.includes(obj.id) 
                ? "bg-green-500/5 border-green-500/30" 
                : "bg-background/20 border-white/5"
            )}
          >
            <div className="flex items-start gap-3">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors", 
                completedObjectives.includes(obj.id) ? "bg-green-500" : "bg-white/10"
              )}>
                {completedObjectives.includes(obj.id) ? <CheckCircle2 className="w-3 h-3 text-white" /> : <span className="text-[9px] font-bold">{i + 1}</span>}
              </div>
              <div className="flex-1 space-y-1">
                <span className={cn("text-[11px] font-bold leading-tight block", completedObjectives.includes(obj.id) ? "text-green-400" : "text-foreground")}>
                  {obj.description}
                </span>
                {obj.hint && !completedObjectives.includes(obj.id) && (
                  <p className="text-[9px] text-muted-foreground italic">{obj.hint}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {(completedObjectives.length === practice.objectives.length || isCompleted(lessonId)) && (
        <Button onClick={handleCompletePractice} className="w-full mt-auto h-12 md:h-14 rounded-2xl font-black text-sm bg-primary shadow-xl shadow-primary/20 uppercase tracking-widest shrink-0" disabled={isSaving}>
          {isSaving ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Trophy className="w-5 h-5 mr-2" />}
          {isCompleted(lessonId) ? "Finalizar e Seguir" : "Submeter Solução"}
        </Button>
      )}
    </div>
  ) : null;

  return (
    <div className="flex flex-col h-[100dvh] bg-background overflow-hidden font-body">
      <Navigation />
      
      <div className="bg-card/50 border-b px-4 md:px-6 py-2 md:py-3 flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <Button variant="ghost" size="icon" onClick={() => router.push('/modules')} className="rounded-full shrink-0">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex flex-col min-w-0">
            <span className="text-[8px] md:text-[10px] text-primary uppercase font-bold tracking-widest truncate">{ka.title}</span>
            <h2 className="font-headline font-bold text-xs md:text-sm truncate">
              {theory?.title || practice?.title}
            </h2>
          </div>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
           {isCompleted(lessonId) && (
             <div className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 text-[8px] md:text-[10px] font-black uppercase">
                <CheckCircle2 className="w-3 h-3" /> <span className="hidden lg:inline">Concluído</span>
             </div>
           )}
           
           {practice && (
             <div className="flex gap-1.5">
               <Link href={`/community/exercise/${lessonId}`}>
                 <Button variant="outline" size="sm" className="h-8 w-8 md:w-auto md:px-4 gap-2 rounded-full border-primary/20 bg-primary/5 text-primary p-0">
                   <MessageSquare className="w-4 h-4" />
                   <span className="hidden md:inline">Dúvidas</span>
                 </Button>
               </Link>
             </div>
           )}
           
           <Sheet>
             <SheetTrigger asChild>
               <Button variant="outline" size="sm" className="h-8 px-3 gap-2 rounded-full border-primary/20 bg-primary/5">
                 <Menu className="w-4 h-4 text-primary" />
                 <span className="hidden md:inline">Tópicos</span>
               </Button>
             </SheetTrigger>
             <SheetContent side="left" className="w-[85vw] sm:w-80 overflow-y-auto">
               <SheetHeader className="mb-6">
                 <SheetTitle>Navegação</SheetTitle>
                 <SheetDescription>Explore este nível.</SheetDescription>
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

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        <div className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden relative">
          {theory ? (
            <div className="flex-1 overflow-y-auto scroll-container p-5 md:p-16 max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
               <div className="space-y-6">
                  <h1 className="font-headline text-3xl md:text-5xl font-bold leading-tight">{theory.title}</h1>
                  {theory.youtubeVideoId && (
                    <div className="aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden bg-muted border shadow-2xl">
                       <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${theory.youtubeVideoId}`} title="Video" allowFullScreen />
                    </div>
                  )}
                  <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-sm md:text-lg" dangerouslySetInnerHTML={{ __html: theory.content }} />
               </div>
               
               {quiz && (
                 <div className="bg-card border-2 border-primary/10 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 space-y-8 shadow-2xl relative overflow-hidden mb-20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center"><HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" /></div>
                        <div>
                          <h3 className="font-headline font-bold text-lg md:text-2xl">{quiz.title}</h3>
                          <p className="text-xs text-muted-foreground">Valida o teu conhecimento.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-10">
                      {quiz.questions.map((q, qIndex) => {
                        const isCorrect = quizAnswers[q.id] === q.correctAnswer;
                        const hasSelected = quizAnswers[q.id] !== undefined;
                        return (
                          <div key={q.id} className="space-y-4">
                            <div className="flex gap-3">
                              <span className="text-lg md:text-2xl font-headline font-bold text-primary opacity-20">{String(qIndex + 1).padStart(2, '0')}</span>
                              <p className="text-sm md:text-lg font-medium pt-0.5">{q.question}</p>
                            </div>
                            <RadioGroup 
                              disabled={isSuccess || isCompleted(lessonId)}
                              onValueChange={(val) => setQuizAnswers(prev => ({...prev, [q.id]: parseInt(val)}))} 
                              value={quizAnswers[q.id]?.toString()}
                              className="grid gap-2 md:gap-4 ml-2 md:ml-10"
                            >
                              {q.options.map((opt, i) => {
                                const isSelected = quizAnswers[q.id] === i;
                                let variant = "border bg-background/50 hover:border-primary/30";
                                if (isSelected) {
                                  if (showQuizFeedback || isCompleted(lessonId)) {
                                    variant = isCorrect ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10";
                                  } else variant = "border-primary bg-primary/5";
                                }
                                return (
                                  <div key={i} className={cn("flex items-center space-x-2 p-3 md:p-5 rounded-xl md:rounded-2xl transition-all cursor-pointer", variant)}>
                                    <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} className="text-primary" />
                                    <Label htmlFor={`${q.id}-${i}`} className="flex-1 cursor-pointer font-normal text-xs md:text-base flex items-center justify-between">
                                      {opt}
                                      {(showQuizFeedback || isCompleted(lessonId)) && isSelected && (
                                        isCorrect ? <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500" /> : <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                                      )}
                                    </Label>
                                  </div>
                                );
                              })}
                            </RadioGroup>
                          </div>
                        );
                      })}
                    </div>
                    
                    <Button onClick={handleQuizAction} className={cn("w-full h-12 md:h-16 rounded-xl md:rounded-2xl font-bold text-sm md:text-xl transition-all mt-6 shadow-xl", (allAnswersCorrect || isCompleted(lessonId)) ? "bg-green-600 hover:bg-green-700 shadow-green-500/20" : "bg-primary shadow-primary/20")} disabled={isSaving || isSuccess || Object.keys(quizAnswers).length < quiz.questions.length}>
                      {isSaving ? <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin mr-2" /> : <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 mr-2" />}
                      {isCompleted(lessonId) ? "Próxima Lição" : (allAnswersCorrect ? "Finalizar Teoria e Praticar" : "Verificar Respostas")}
                    </Button>
                 </div>
               )}
            </div>
          ) : practice ? (
            <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden relative">
               
               <div className="px-2 md:px-4 py-1 md:py-2 border-b border-white/5 flex items-center justify-between bg-black/40 shrink-0">
                  <div className="flex-1 flex items-center gap-1.5 overflow-x-auto scrollbar-hide py-1 no-scrollbar">
                    <div className="flex bg-white/5 p-1 rounded-lg gap-0.5 shrink-0">
                      {isWebLang && (
                        <>
                          <Button variant={activeTab === 'html' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('html')} className="h-7 gap-1 rounded-md text-[8px] md:text-[9px] font-bold px-2 md:px-3">
                            <FileCode className="w-3 h-3 text-orange-400" /> HTML
                          </Button>
                          <Button variant={activeTab === 'css' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('css')} className="h-7 gap-1 rounded-md text-[8px] md:text-[9px] font-bold px-2 md:px-3">
                            <Palette className="w-3 h-3 text-blue-400" /> CSS
                          </Button>
                          <Button variant={activeTab === 'js' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('js')} className="h-7 gap-1 rounded-md text-[8px] md:text-[9px] font-bold px-2 md:px-3">
                            <Braces className="w-3 h-3 text-yellow-400" /> JS
                          </Button>
                          <Button variant={activeTab === 'preview' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('preview')} className="lg:hidden h-7 gap-1 rounded-md text-[8px] md:text-[9px] font-bold px-2 md:px-3">
                            <Eye className="w-3 h-3 text-green-400" /> PREVIEW
                          </Button>
                        </>
                      )}
                      {!isWebLang && (
                        <Button variant={activeTab === 'code' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('code')} className="h-7 gap-1.5 rounded-md text-[9px] font-bold px-3 uppercase">
                          {isConceptLab ? <span className="flex items-center gap-1.5"><Brain className="w-3 h-3 text-blue-400" /> LÓGICA</span> : practice.language}
                        </Button>
                      )}
                      <Button variant={activeTab === 'mission' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('mission')} className="lg:hidden h-7 gap-1 rounded-md text-[8px] md:text-[9px] font-bold px-2 md:px-3">
                        <ListChecks className="w-3 h-3 text-primary" /> MISSÃO
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-2 shrink-0">
                    <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 h-7 md:h-8 rounded-full text-[8px] md:text-[10px] font-black px-3 md:px-6 gap-1.5">
                      {isRunning ? <RefreshCcw className="w-2.5 h-2.5 animate-spin" /> : <Play className="w-2.5 h-2.5 fill-current" />}
                      <span>{isConceptLab ? "VALIDAR" : "EXECUTAR"}</span>
                    </Button>
                  </div>
               </div>
               
               <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                 <div className={cn(
                    "flex-1 relative flex flex-col min-h-0",
                    (activeTab === 'preview' || activeTab === 'mission') && isMobile ? "hidden" : "flex",
                    showPreview && isWebLang && "lg:w-1/2 lg:border-r border-white/5"
                 )}>
                    <Editor
                      height="100%"
                      language={getMonacoLanguage(activeTab)}
                      theme="vs-dark"
                      value={activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : activeTab === 'js' ? jsCode : code}
                      onChange={(v) => {
                        const val = v || "";
                        if (activeTab === 'html') setHtmlCode(val);
                        else if (activeTab === 'css') setCssCode(val);
                        else if (activeTab === 'js') setJsCode(val);
                        else setCode(val);
                      }}
                      options={{ 
                        minimap: { enabled: false }, fontSize: 13, lineNumbers: 'on', 
                        scrollBeyondLastLine: false, automaticLayout: true, 
                        padding: { top: 20 }, wordWrap: "on", fontFamily: "Source Code Pro",
                        fixedOverflowWidgets: true,
                        renderLineHighlight: "all",
                        scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 }
                      }}
                    />
                 </div>
                 
                 {isWebLang && (
                   <div className={cn(
                      "lg:w-1/2 bg-white flex flex-col min-h-0",
                      activeTab === 'preview' ? "flex flex-1" : "hidden lg:flex"
                   )}>
                      <div className="h-7 bg-muted flex items-center px-4 justify-between border-b shrink-0">
                         <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                            <Eye className="w-3 h-3" /> Live View
                         </span>
                         <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                            <div className="w-2 h-2 rounded-full bg-green-400/50" />
                         </div>
                      </div>
                      <iframe ref={iframeRef} title="Live Preview" className="flex-1 w-full border-none" sandbox="allow-scripts" />
                   </div>
                 )}

                 {isMobile && activeTab === 'mission' && (
                   <div className="flex-1 overflow-hidden">
                      {MissionContent}
                   </div>
                 )}
               </div>

               <div 
                 style={{ height: isConsoleOpen ? `${consoleHeight}px` : "32px" }}
                 className="border-t border-white/10 bg-[#121212] flex flex-col transition-[height] duration-200 relative shrink-0 z-20"
               >
                 <div className="flex items-center justify-between px-4 h-8 border-b border-white/5 shrink-0 bg-black/20 cursor-pointer" onClick={() => setIsConsoleOpen(!isConsoleOpen)}>
                    <div className="text-muted-foreground flex items-center gap-2 uppercase tracking-widest font-black text-[8px]">
                      <Terminal className="w-3 h-3" /> Consola
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white">
                         {isConsoleOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
                    </Button>
                 </div>
                 {isConsoleOpen && (
                   <div className="flex-1 p-3 font-code text-[10px] md:text-xs overflow-y-auto scroll-container">
                      <div className={cn("whitespace-pre-wrap leading-relaxed", output.includes('✅') ? 'text-green-400' : 'text-blue-300')}>
                        {output || `> Simulador pronto. Utilize as abas acima para navegar.`}
                      </div>
                   </div>
                 )}
               </div>
            </div>
          ) : null}
        </div>

        {practice && showSidebar && !isMobile && (
          <div className="w-[320px] xl:w-[400px] bg-[#0d1117] hidden lg:flex flex-col border-l border-white/5 overflow-hidden shrink-0">
            {MissionContent}
          </div>
        )}
      </main>
    </div>
  );
}
