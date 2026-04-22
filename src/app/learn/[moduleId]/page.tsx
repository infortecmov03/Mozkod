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
  Lightbulb, ChevronDown, ChevronUp, FileCode, Palette, Braces, 
  RefreshCcw, Brain, Sparkles
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

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [code, setCode] = useState("");
  
  const [activeTab, setActiveTab] = useState<string>("code");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [completedObjectives, setCompletedObjectives] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  const updatePreview = useCallback(() => {
    if (!iframeRef.current || !isWebLang) return;
    const doc = `<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`;
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
    setTimeout(() => {
      setIsRunning(false);
      const current = isWebLang ? (activeTab === 'js' ? jsCode : activeTab === 'css' ? cssCode : htmlCode) : code;
      const newDone = practice?.objectives.filter(obj => current.includes(obj.test)).map(obj => obj.id) || [];
      setCompletedObjectives(newDone);
      if (newDone.length === (practice?.objectives.length || 0)) setOutput("> ✅ Validação: SUCESSO");
      else setOutput("> ⚠️ Validação: PENDENTE");
    }, 600);
  };

  if (!mounted || !data) return null;
  const { ka, level } = data;

  const Mission = (
    <div className="p-5 h-full flex flex-col bg-card/30 overflow-y-auto scroll-container">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline font-bold text-xs uppercase flex items-center gap-2">
          {isConceptLab ? <Brain className="w-4 h-4 text-primary" /> : <ListChecks className="w-4 h-4 text-primary" />}
          Missão {isConceptLab ? "Conceptual" : "Técnica"}
        </h3>
      </div>
      <div className="prose prose-invert prose-sm mb-6" dangerouslySetInnerHTML={{ __html: practice?.detailedExplanation || "" }} />
      <div className="space-y-3 mb-10">
        {practice?.objectives.map((obj, i) => (
          <div key={obj.id} className={cn("p-4 rounded-xl border transition-all", completedObjectives.includes(obj.id) ? "bg-green-500/10 border-green-500/30" : "bg-background/20 border-white/5")}>
            <div className="flex gap-3">
              <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold", completedObjectives.includes(obj.id) ? "bg-green-500" : "bg-white/10")}>
                {completedObjectives.includes(obj.id) ? <CheckCircle2 className="w-3 h-3" /> : i + 1}
              </div>
              <p className="text-[11px] leading-tight">{obj.description}</p>
            </div>
          </div>
        ))}
      </div>
      {(completedObjectives.length === (practice?.objectives.length || 0) || isCompleted(lessonId)) && (
        <Button onClick={() => markAsCompleted(lessonId, level.id, ka.id, 'exercise', 100, code)} className="w-full h-14 rounded-2xl font-black bg-primary">
          CONCLUIR LABORATÓRIO
        </Button>
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-[100dvh] bg-background overflow-hidden font-body">
      <Navigation />
      <div className="bg-card/50 border-b px-4 py-2 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full"><ChevronLeft /></Button>
          <div className="truncate">
            <span className="text-[10px] text-primary font-bold block uppercase">{ka.title}</span>
            <h2 className="font-headline font-bold text-sm truncate">{theory?.title || practice?.title}</h2>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 flex flex-col bg-[#1e1e1e] relative overflow-hidden">
          {theory ? (
            <div className="flex-1 overflow-y-auto p-6 md:p-16 max-w-4xl mx-auto w-full">
              <h1 className="text-3xl md:text-5xl font-headline font-bold mb-8">{theory.title}</h1>
              <div className="prose prose-invert max-w-none mb-20" dangerouslySetInnerHTML={{ __html: theory.content }} />
              {quiz && (
                <Card className="p-6 md:p-10 border-primary/20 bg-card/50 rounded-3xl">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><HelpCircle /> {quiz.title}</h3>
                  <Button onClick={() => markAsCompleted(lessonId, level.id, ka.id, 'theory')} className="w-full h-14">Validar Conhecimento</Button>
                </Card>
              )}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between px-4 py-1 bg-black/40 border-b border-white/5 shrink-0">
                <div className="flex gap-1 overflow-x-auto no-scrollbar">
                  {isWebLang ? (
                    <>
                      <Button variant={activeTab === 'html' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('html')} className="h-7 text-[10px]">HTML</Button>
                      <Button variant={activeTab === 'css' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('css')} className="h-7 text-[10px]">CSS</Button>
                      <Button variant={activeTab === 'js' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('js')} className="h-7 text-[10px]">JS</Button>
                      <Button variant={activeTab === 'preview' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('preview')} className="h-7 text-[10px] lg:hidden">PREVIEW</Button>
                    </>
                  ) : (
                    <Button variant={activeTab === 'code' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('code')} className="h-7 text-[10px]">{isConceptLab ? "LÓGICA" : "CÓDIGO"}</Button>
                  )}
                  <Button variant={activeTab === 'mission' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('mission')} className="h-7 text-[10px] lg:hidden">MISSÃO</Button>
                </div>
                <Button size="sm" onClick={handleRunCode} className="h-7 bg-green-600 text-[10px] font-bold"><Play className="w-3 h-3 mr-1" /> EXECUTAR</Button>
              </div>
              <div className="flex-1 flex relative overflow-hidden">
                <div className={cn("flex-1", (activeTab === 'preview' || activeTab === 'mission') && isMobile ? "hidden" : "block")}>
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
                      } else setCode(v || "");
                    }}
                    options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true, wordWrap: "on" }}
                  />
                </div>
                {activeTab === 'preview' && isMobile && (
                   <iframe ref={iframeRef} className="flex-1 bg-white" title="Preview" />
                )}
                {activeTab === 'mission' && isMobile && Mission}
                {!isMobile && isWebLang && (
                  <div className="w-1/2 border-l border-white/5 bg-white flex flex-col">
                    <div className="h-6 bg-muted text-[9px] font-bold flex items-center px-3 text-muted-foreground uppercase"><Eye className="w-3 h-3 mr-2" /> Live View</div>
                    <iframe ref={iframeRef} className="flex-1 w-full border-none" title="Preview" />
                  </div>
                )}
              </div>
              <div className={cn("bg-black border-t border-white/10 transition-all", isConsoleOpen ? "h-32" : "h-8")}>
                <div className="flex items-center justify-between px-4 h-8 cursor-pointer" onClick={() => setIsConsoleOpen(!isConsoleOpen)}>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-2"><Terminal className="w-3 h-3" /> Consola</span>
                  {isConsoleOpen ? <ChevronDown /> : <ChevronUp />}
                </div>
                {isConsoleOpen && <div className="p-4 text-xs font-mono text-green-400 overflow-y-auto h-24">{output}</div>}
              </div>
            </>
          )}
        </div>
        {!isMobile && practice && <div className="w-80 border-l border-white/5 bg-[#0d1117]">{Mission}</div>}
      </main>
    </div>
  );
}