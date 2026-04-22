
'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Terminal, Play, CheckCircle2, ChevronLeft, 
  ListChecks, Loader2, Brain, Eye, Sparkles, ChevronDown, ChevronUp,
  Info, ChevronRight, XCircle, AlertCircle, RefreshCcw
} from "lucide-react";
import { 
  findKnowledgeAreaByLessonId, findTheoryLesson, findPracticeExercise, 
  findQuizById, findNextLessonId
} from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function LearnPage() {
  const params = useParams();
  const lessonId = params.moduleId as string;
  const router = useRouter();
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const { profile } = useAuth();
  const { markAsCompleted, isCompleted } = useProgress();

  const data = useMemo(() => findKnowledgeAreaByLessonId(lessonId), [lessonId]);
  const theory = useMemo(() => findTheoryLesson(lessonId), [lessonId]);
  const practice = useMemo(() => findPracticeExercise(lessonId), [lessonId]);
  const quiz = useMemo(() => theory?.quizId ? findQuizById(theory.quizId) : null, [theory]);
  const nextLessonId = useMemo(() => findNextLessonId(lessonId), [lessonId]);

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [code, setCode] = useState("");
  
  const [activeTab, setActiveTab] = useState<string>("code");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [completedObjectives, setCompletedObjectives] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // New Multi-Question Quiz States
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [validated, setValidated] = useState(false);
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  const isWebLang = useMemo(() => ['html', 'css', 'javascript'].includes(practice?.language.toLowerCase() || ''), [practice]);
  const isConceptLab = useMemo(() => practice?.language.toLowerCase() === 'concept', [practice]);

  useEffect(() => {
    setMounted(true);
    if (!practice) return;
    
    if (isWebLang) {
      setActiveTab(practice.language === 'javascript' ? 'js' : (practice.language === 'css' ? 'css' : 'html'));
    } else {
      setActiveTab('code');
    }

    const localCode = localStorage.getItem(`cwm_code_${lessonId}`);
    if (localCode) setCode(localCode);
    else setCode(practice.template || "");

    setHtmlCode(practice.htmlTemplate || "");
    setCssCode(practice.cssTemplate || "");
    setJsCode(practice.jsTemplate || "");
  }, [practice, lessonId, isWebLang]);

  // Reset states when lesson changes
  useEffect(() => {
    setQuizStarted(false);
    setSelectedAnswers({});
    setValidated(false);
    setShowHints({});
  }, [lessonId]);

  const updatePreview = useCallback(() => {
    if (!iframeRef.current || !isWebLang) return;
    const doc = `<html><head><style>${cssCode}</style></head><body style="padding:20px; font-family:sans-serif;">${htmlCode}<script>${jsCode}</script></body></html>`;
    const iframeDoc = iframeRef.current.contentDocument;
    if (iframeDoc) { iframeDoc.open(); iframeDoc.write(doc); iframeDoc.close(); }
  }, [htmlCode, cssCode, jsCode, isWebLang]);

  useEffect(() => {
    const timer = setTimeout(updatePreview, 500);
    return () => clearTimeout(timer);
  }, [updatePreview]);

  const handleRunCode = async () => {
    setIsRunning(true);
    setIsConsoleOpen(true);
    
    setTimeout(async () => {
      setIsRunning(false);
      const current = isWebLang 
        ? (activeTab === 'js' ? jsCode : activeTab === 'css' ? cssCode : htmlCode) 
        : code;
      
      const newDone = practice?.objectives.filter(obj => current.includes(obj.test)).map(obj => obj.id) || [];
      setCompletedObjectives(newDone);

      if (newDone.length === (practice?.objectives.length || 0)) {
        setOutput("> ✅ Validação: SUCESSO. Missão concluída.");
        toast.success("Excelente! Missão concluída.");
        if (data && !isCompleted(lessonId)) {
          const finalCode = isWebLang ? `HTML:\n${htmlCode}\n\nCSS:\n${cssCode}\n\nJS:\n${jsCode}` : code;
          await markAsCompleted(lessonId, data.level.id, data.ka.id, 'exercise', 100, finalCode);
        }
      } else {
        setOutput(`> ⚠️ Validação: PENDENTE (${newDone.length}/${practice?.objectives.length || 0} objetivos).`);
        toast.error("Alguns objetivos ainda não foram atingidos.");
      }
    }, 800);
  };

  const handleVerifyQuiz = async () => {
    if (!quiz) return;
    
    let correctCount = 0;
    const newHints: Record<string, boolean> = {};
    
    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      } else {
        newHints[q.id] = true;
      }
    });

    const scorePercent = (correctCount / quiz.questions.length) * 100;
    setValidated(true);
    setShowHints(newHints);

    if (scorePercent >= quiz.passingScore) {
      toast.success(`Parabéns! Acertaste ${correctCount}/${quiz.questions.length} questões.`);
      if (data && !isCompleted(lessonId)) {
        await markAsCompleted(lessonId, data.level.id, data.ka.id, 'theory', Math.round(scorePercent));
      }
    } else {
      toast.error(`Ainda não chegaste lá. Acertaste ${correctCount}/${quiz.questions.length}. Analise as dicas e tente novamente.`);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setValidated(false);
    setShowHints({});
  };

  if (!mounted || !data) return null;
  const { ka } = data;

  const MissionContent = (
    <div className="p-5 h-full flex flex-col bg-card/30 overflow-y-auto scroll-container">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline font-bold text-[10px] md:text-xs uppercase flex items-center gap-2 tracking-widest text-primary">
          {isConceptLab ? <Brain className="w-4 h-4" /> : <ListChecks className="w-4 h-4" />}
          Missão {isConceptLab ? "Lógica Pura" : "Técnica"}
        </h3>
      </div>
      
      {isConceptLab && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl mb-6">
          <p className="text-[11px] font-bold text-yellow-500 flex items-center gap-2">
            <Sparkles className="w-3 h-3" /> FOCO EM RACIOCÍNIO
          </p>
          <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
            Neste laboratório, o objetivo é a lógica pura. O editor aceita respostas conceituais conforme as instruções.
          </p>
        </div>
      )}

      <div className="prose prose-invert prose-sm mb-6 text-xs leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: practice?.detailedExplanation || "" }} />
      
      <div className="space-y-2 mb-10">
        <p className="text-[10px] font-black uppercase text-muted-foreground/60 mb-2 tracking-widest">Objetivos</p>
        {practice?.objectives.map((obj, i) => (
          <div key={obj.id} className={cn("p-3 md:p-4 rounded-xl border transition-all", (completedObjectives.includes(obj.id) || isCompleted(lessonId)) ? "bg-green-500/10 border-green-500/30" : "bg-background/40 border-white/5 shadow-sm")}>
            <div className="flex gap-3 items-start">
              <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold mt-0.5", (completedObjectives.includes(obj.id) || isCompleted(lessonId)) ? "bg-green-500 text-white" : "bg-white/10 text-muted-foreground")}>
                {(completedObjectives.includes(obj.id) || isCompleted(lessonId)) ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <p className="text-[11px] md:text-xs leading-tight font-medium">{obj.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-white/5">
        {isCompleted(lessonId) && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-green-500/10 border border-green-500/30 p-3 rounded-xl flex items-center gap-3 text-green-500">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-[11px] font-bold uppercase tracking-tight">Missão Cumprida!</span>
            </div>
            {nextLessonId ? (
              <Button 
                onClick={() => router.push(`/learn/${nextLessonId}`)} 
                className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl font-black bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/20 text-white gap-2"
              >
                PRÓXIMA LIÇÃO <ChevronRight className="w-5 h-5" />
              </Button>
            ) : (
              <Button 
                onClick={() => router.push('/dashboard')} 
                className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl font-black bg-primary"
              >
                VOLTAR AO PAINEL
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-[100dvh] bg-background overflow-hidden font-body">
      <Navigation />
      
      <div className="bg-card/50 border-b px-4 h-12 md:h-14 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full h-8 w-8"><ChevronLeft className="w-4 h-4" /></Button>
          <div className="truncate">
            <span className="text-[9px] md:text-[10px] text-primary font-black block uppercase tracking-tighter">{ka.title}</span>
            <h2 className="font-headline font-bold text-xs md:text-sm truncate opacity-90">{theory?.title || practice?.title}</h2>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {!theory && (
            isCompleted(lessonId) ? (
              <Button 
                size="sm" 
                onClick={() => nextLessonId ? router.push(`/learn/${nextLessonId}`) : router.push('/dashboard')} 
                className="h-8 md:h-9 bg-green-600 hover:bg-green-700 text-[10px] font-black px-4 md:px-6 rounded-full shadow-lg shadow-green-900/30 animate-in zoom-in duration-300 gap-1.5"
              >
                {nextLessonId ? 'PRÓXIMA LIÇÃO' : 'CONCLUÍDO'} <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button 
                size="sm" 
                onClick={handleRunCode} 
                disabled={isRunning} 
                className="h-8 md:h-9 bg-primary hover:bg-primary/90 text-[10px] font-black px-4 md:px-6 rounded-full shadow-lg shadow-primary/20"
              >
                {isRunning ? <Loader2 className="w-3 h-3 animate-spin" /> : <><Play className="w-3 h-3 mr-1.5" /> EXECUTAR</>}
              </Button>
            )
          )}

          {isMobile && practice && (
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="outline" className="rounded-full h-8 md:h-9 gap-1 text-[10px] font-black border-primary/30">
                  <Info className="w-3 h-3" /> MISSÃO
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh] rounded-t-[2rem] p-0 overflow-hidden border-t-primary/20">
                <SheetHeader className="p-6 pb-2">
                  <SheetTitle className="text-left font-headline font-bold flex items-center gap-2">
                    <ListChecks className="w-5 h-5 text-primary" /> Briefing da Missão
                  </SheetTitle>
                </SheetHeader>
                <div className="h-full">
                  {MissionContent}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 flex flex-col bg-[#1e1e1e] relative overflow-hidden">
          {theory ? (
            <div className="flex-1 overflow-y-auto p-5 md:p-16 max-w-4xl mx-auto w-full scroll-container">
              <h1 className="text-2xl md:text-5xl font-headline font-bold mb-6 md:mb-10 leading-tight">{theory.title}</h1>
              <div className="prose prose-invert max-w-none mb-16 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: theory.content }} />
              
              {isCompleted(lessonId) ? (
                <div className="p-6 md:p-10 border-green-500/20 bg-green-500/5 backdrop-blur-sm rounded-[2rem] shadow-2xl mb-10 text-center space-y-6 animate-in zoom-in duration-500">
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                    <h3 className="text-xl md:text-2xl font-bold text-green-500">Concluído com Sucesso!</h3>
                  </div>
                  {nextLessonId ? (
                    <Button 
                      onClick={() => router.push(`/learn/${nextLessonId}`)} 
                      className="w-full max-w-sm h-12 md:h-14 rounded-2xl font-black text-lg bg-green-600 hover:bg-green-700 shadow-xl gap-2"
                    >
                      PRÓXIMA LIÇÃO <ChevronRight className="w-6 h-6" />
                    </Button>
                  ) : (
                    <Button onClick={() => router.push('/dashboard')} className="w-full max-w-sm h-12 md:h-14 rounded-2xl font-black text-lg bg-primary">
                      VOLTAR AO PAINEL
                    </Button>
                  )}
                </div>
              ) : (
                quiz && (
                  <div className="mb-20 space-y-8">
                    {!quizStarted ? (
                      <Card className="p-6 md:p-10 border-primary/20 bg-card/40 backdrop-blur-sm rounded-[2rem] shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Sparkles className="w-6 h-6" />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold">{quiz.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-8 text-sm">Valida o teu conhecimento para avançar na trilha de engenharia. Precisas de acertar pelo menos {quiz.passingScore}% das questões.</p>
                        <Button 
                          onClick={() => setQuizStarted(true)} 
                          className="w-full h-12 md:h-14 rounded-2xl font-black text-base shadow-lg shadow-primary/20"
                        >
                          INICIAR VALIDAÇÃO
                        </Button>
                      </Card>
                    ) : (
                      <div className="space-y-6">
                         <div className="flex items-center justify-between px-2">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                               <ListChecks className="w-6 h-6 text-primary" /> {quiz.title}
                            </h3>
                            {validated && (
                               <Button variant="ghost" size="sm" onClick={resetQuiz} className="text-muted-foreground text-xs gap-2">
                                  <RefreshCcw className="w-3.5 h-3.5" /> RECOMEÇAR
                               </Button>
                            )}
                         </div>

                         {quiz.questions.map((q, qIdx) => (
                            <Card key={q.id} className={cn(
                              "border-none bg-card/40 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500",
                              validated && selectedAnswers[q.id] === q.correctAnswer && "ring-2 ring-green-500/50 bg-green-500/5",
                              validated && selectedAnswers[q.id] !== q.correctAnswer && "ring-2 ring-destructive/50 bg-destructive/5"
                            )}>
                               <CardContent className="p-6 md:p-8 space-y-6">
                                  <div className="flex justify-between items-start gap-4">
                                     <h4 className="text-base md:text-lg font-bold leading-tight">
                                        <span className="text-primary mr-2">{qIdx + 1}.</span> {q.question}
                                     </h4>
                                     {validated && (
                                        selectedAnswers[q.id] === q.correctAnswer 
                                          ? <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                          : <XCircle className="w-6 h-6 text-destructive shrink-0" />
                                     )}
                                  </div>

                                  <RadioGroup 
                                    value={selectedAnswers[q.id]?.toString()} 
                                    onValueChange={(v) => {
                                      if(!validated) setSelectedAnswers(prev => ({ ...prev, [q.id]: parseInt(v) }));
                                    }}
                                    className="space-y-3"
                                  >
                                    {q.options.map((opt, idx) => (
                                      <div key={idx} className={cn(
                                        "flex items-center space-x-3 p-4 rounded-2xl border transition-all cursor-pointer",
                                        selectedAnswers[q.id] === idx ? "border-primary bg-primary/10 shadow-lg shadow-primary/10" : "border-white/5 bg-background/20",
                                        validated && q.correctAnswer === idx && "border-green-500/50 bg-green-500/10",
                                        validated && selectedAnswers[q.id] === idx && q.correctAnswer !== idx && "border-destructive/50 bg-destructive/10"
                                      )} onClick={() => !validated && setSelectedAnswers(prev => ({ ...prev, [q.id]: idx }))}>
                                        <RadioGroupItem value={idx.toString()} id={`q-${q.id}-opt-${idx}`} className="sr-only" />
                                        <div className={cn(
                                          "w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold shrink-0",
                                          selectedAnswers[q.id] === idx ? "bg-primary border-primary text-white" : "border-white/20 text-muted-foreground"
                                        )}>
                                          {String.fromCharCode(65 + idx)}
                                        </div>
                                        <Label htmlFor={`q-${q.id}-opt-${idx}`} className="flex-1 cursor-pointer font-medium text-sm md:text-base leading-snug">{opt}</Label>
                                      </div>
                                    ))}
                                  </RadioGroup>

                                  {validated && selectedAnswers[q.id] !== q.correctAnswer && q.explanation && (
                                     <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-2xl flex gap-3 animate-in slide-in-from-top-2 duration-300">
                                        <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                           <p className="text-[10px] font-black uppercase text-destructive tracking-widest">Dica Técnica</p>
                                           <p className="text-xs text-muted-foreground leading-relaxed italic">{q.explanation}</p>
                                        </div>
                                     </div>
                                  )}
                               </CardContent>
                            </Card>
                         ))}

                         <div className="pt-8 flex flex-col items-center gap-4">
                            <Button 
                              onClick={handleVerifyQuiz} 
                              disabled={Object.keys(selectedAnswers).length < quiz.questions.length || validated}
                              className="w-full max-w-md h-14 md:h-16 rounded-[2rem] font-black text-lg shadow-xl shadow-primary/20"
                            >
                              {validated ? 'VERIFICAÇÃO CONCLUÍDA' : 'VERIFICAR RESPOSTAS'}
                            </Button>
                            
                            {validated && Object.values(showHints).length > 0 && (
                               <Button variant="outline" onClick={resetQuiz} className="rounded-full px-8 h-12 font-bold border-destructive/30 text-destructive hover:bg-destructive/5">
                                  CORRIGIR ERROS E TENTAR NOVAMENTE
                               </Button>
                            )}

                            {!validated && Object.keys(selectedAnswers).length < quiz.questions.length && (
                               <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest animate-pulse">
                                  Responde a todas as {quiz.questions.length} questões para validar
                               </p>
                            )}
                         </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between px-3 md:px-4 h-10 md:h-11 bg-black/60 border-b border-white/5 shrink-0">
                <div className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth">
                  {isWebLang ? (
                    <>
                      <Button variant={activeTab === 'html' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('html')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold">HTML</Button>
                      <Button variant={activeTab === 'css' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('css')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold">CSS</Button>
                      <Button variant={activeTab === 'js' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('js')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold">JS</Button>
                      <Button variant={activeTab === 'preview' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('preview')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold lg:hidden">VIEW</Button>
                    </>
                  ) : (
                    <Button variant={activeTab === 'code' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('code')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold uppercase">
                      {isConceptLab ? "Lógica" : "Código"}
                    </Button>
                  )}
                </div>
                <div className="hidden lg:block text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-50">
                  {isConceptLab ? 'Ambiente de Raciocínio' : 'Ambiente de Programação'}
                </div>
              </div>

              <div className="flex-1 flex relative overflow-hidden">
                <div className={cn("flex-1 h-full", activeTab === 'preview' && isMobile ? "hidden" : "block")}>
                  <Editor
                    height="100%"
                    theme="vs-dark"
                    language={isWebLang ? (activeTab === 'js' ? 'javascript' : activeTab) : (isConceptLab ? 'markdown' : practice?.language)}
                    value={isWebLang ? (activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode) : code}
                    onChange={(v) => {
                      if (isWebLang) {
                        if (activeTab === 'html') setHtmlCode(v || "");
                        else if (activeTab === 'css') setCssCode(v || "");
                        else setJsCode(v || "");
                      } else {
                        setCode(v || "");
                        localStorage.setItem(`cwm_code_${lessonId}`, v || "");
                      }
                    }}
                    options={{ 
                      minimap: { enabled: false }, 
                      fontSize: 14, 
                      automaticLayout: true, 
                      wordWrap: "on",
                      padding: { top: 15 },
                      scrollBeyondLastLine: false,
                      fontFamily: "'Source Code Pro', monospace"
                    }}
                  />
                </div>
                
                {activeTab === 'preview' && isMobile && (
                   <div className="flex-1 flex flex-col bg-white">
                      <div className="h-6 bg-muted text-[8px] font-bold flex items-center px-3 text-muted-foreground uppercase"><Eye className="w-2.5 h-2.5 mr-1.5" /> Live Preview</div>
                      <iframe ref={iframeRef} className="flex-1 w-full border-none" title="Preview" />
                   </div>
                )}

                {!isMobile && isWebLang && (
                  <div className="w-1/2 border-l border-white/5 bg-white flex flex-col shadow-2xl">
                    <div className="h-6 bg-muted text-[9px] font-black flex items-center px-3 text-muted-foreground uppercase tracking-widest"><Eye className="w-3 h-3 mr-2" /> Live Interaction View</div>
                    <iframe ref={iframeRef} className="flex-1 w-full border-none" title="Preview" />
                  </div>
                )}
              </div>

              <div className={cn("bg-black/90 border-t border-white/10 transition-all duration-300", isConsoleOpen ? "h-32 md:h-40" : "h-8 md:h-10")}>
                <div className="flex items-center justify-between px-4 h-8 md:h-10 cursor-pointer hover:bg-white/5 transition-colors" onClick={() => setIsConsoleOpen(!isConsoleOpen)}>
                  <span className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase flex items-center gap-2 tracking-widest">
                    <Terminal className="w-3 h-3 text-green-500" /> Sistema de Validação
                  </span>
                  {isConsoleOpen ? <ChevronDown className="w-4 h-4 opacity-40" /> : <ChevronUp className="w-4 h-4 opacity-40" />}
                </div>
                {isConsoleOpen && (
                  <div className="p-4 text-[11px] md:text-xs font-code text-green-400 overflow-y-auto h-24 md:h-30 custom-scrollbar bg-black/40">
                    <div className="opacity-40 mb-1 font-sans text-[9px]">[ENGINE LOG: {new Date().toLocaleTimeString()}]</div>
                    <div className="leading-relaxed">{output || "> Aguardando execução do código..."}</div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {!isMobile && practice && (
          <div className="w-80 md:w-96 border-l border-white/5 bg-[#0d1117] shadow-2xl shrink-0">
            {MissionContent}
          </div>
        )}
      </main>
    </div>
  );
}
