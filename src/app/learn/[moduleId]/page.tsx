'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { 
  findKnowledgeAreaByLessonId, findTheoryLesson, findPracticeExercise, 
  findQuizById, findNextLessonId
} from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useProgress } from "@/contexts/ProgressContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";

// Componentes Modulares
import { LearnHeader } from "./components/LearnHeader";
import { LearnSidebar } from "./components/LearnSidebar";
import { TheoryView } from "./components/TheoryView";
import { PracticeWorkspace } from "./components/PracticeWorkspace";
import { MissionBriefing } from "./components/MissionBriefing";

export default function LearnPage() {
  const params = useParams();
  const lessonId = params.moduleId as string;
  const router = useRouter();
  const isMobile = useIsMobile();
  const { markAsCompleted, isCompleted } = useProgress();

  const data = useMemo(() => findKnowledgeAreaByLessonId(lessonId), [lessonId]);
  const theory = useMemo(() => findTheoryLesson(lessonId), [lessonId]);
  const practice = useMemo(() => findPracticeExercise(lessonId), [lessonId]);
  const quiz = useMemo(() => theory?.quizId ? findQuizById(theory.quizId) : null, [theory]);
  const nextLessonId = useMemo(() => findNextLessonId(lessonId), [lessonId]);

  // Decisão técnica de ativação de preview baseada no módulo (Separação de preocupações)
  const isInteractiveTheory = useMemo(() => {
    if (!data) return false;
    const isWebKA = ['ka-web-core', 'lang-html', 'lang-css', 'lang-javascript'].includes(data.ka.id);
    return isWebKA;
  }, [data]);

  const availableVariants = useMemo(() => {
    if (!data || !practice) return [];
    const variants: { lang: string; id: string }[] = [];
    const currentBaseId = practice.id.split('-').slice(0, 2).join('-'); 
    
    Object.entries(data.ka.practice).forEach(([lang, exercises]) => {
      const match = exercises.find(ex => ex.id.startsWith(currentBaseId));
      if (match) {
        variants.push({ lang, id: match.id });
      }
    });
    return variants;
  }, [data, practice]);

  // State para Código
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

  const isWebLang = useMemo(() => 
    ['html', 'css', 'javascript'].includes(practice?.language.toLowerCase() || '') && !lessonId.includes('pf-p'), 
  [practice, lessonId]);

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
    setCompletedObjectives([]);
    setOutput("");
  }, [practice, lessonId, isWebLang]);

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
    setOutput("> Compilando e analisando estrutura...\n");
    
    setTimeout(async () => {
      setIsRunning(false);
      const current = isWebLang 
        ? (activeTab === 'js' ? jsCode : activeTab === 'css' ? cssCode : htmlCode) 
        : code;
      
      const newDone = practice?.objectives.filter(obj => {
        return current.includes(obj.test);
      }).map(obj => obj.id) || [];
      
      setCompletedObjectives(newDone);

      if (newDone.length === (practice?.objectives.length || 0)) {
        setOutput("> ✅ STATUS: 200 OK\n> [AUDITORIA]: Requisitos validados.\n> Missão concluída.");
        toast.success("Excelente! Missão concluída.");
        if (data) {
          const finalCode = isWebLang ? `HTML:\n${htmlCode}\n\nCSS:\n${cssCode}\n\nJS:\n${jsCode}` : code;
          await markAsCompleted(lessonId, data.level.id, data.ka.id, 'exercise', 100, finalCode);
        }
      } else {
        const remaining = (practice?.objectives.length || 0) - newDone.length;
        setOutput(`> ⚠️ STATUS: 412 PRECONDITION FAILED\n> [AUDITORIA]: Faltam ${remaining} componentes essenciais.`);
        toast.error("Alguns requisitos ainda não foram atingidos.");
      }
    }, 800);
  };

  const handleTheoryComplete = async (score: number) => {
    if (data) {
      await markAsCompleted(lessonId, data.level.id, data.ka.id, 'theory', score);
    }
  };

  if (!mounted || !data) return null;

  return (
    <div className="flex flex-col h-[100dvh] bg-background overflow-hidden font-body">
      <LearnHeader 
        kaTitle={data.ka.title}
        lessonTitle={theory?.title || practice?.title || ""}
        isMobile={!!isMobile}
        isTheory={!!theory}
        isCompleted={isCompleted(lessonId)}
        isRunning={isRunning}
        nextLessonId={nextLessonId}
        onRunCode={handleRunCode}
        lessonList={<LearnSidebar ka={data.ka} lessonId={lessonId} isCompleted={isCompleted} />}
        missionContent={practice && (
          <MissionBriefing 
            practice={practice}
            availableVariants={availableVariants}
            completedObjectives={completedObjectives}
            isCompleted={isCompleted(lessonId)}
            nextLessonId={nextLessonId}
            onNavigate={(id) => router.push(`/learn/${id}`)}
            onGoToDashboard={() => router.push('/dashboard')}
          />
        )}
      />

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {theory ? (
          <TheoryView 
            theory={theory}
            quiz={quiz}
            isCompleted={isCompleted(lessonId)}
            nextLessonId={nextLessonId}
            onComplete={handleTheoryComplete}
            enableInteractive={isInteractiveTheory}
          />
        ) : (
          <PracticeWorkspace 
            language={practice?.language || ""}
            isWebLang={isWebLang}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            code={code}
            setCode={setCode}
            htmlCode={htmlCode}
            setHtmlCode={setHtmlCode}
            cssCode={cssCode}
            setCssCode={setCssCode}
            jsCode={jsCode}
            setJsCode={setJsCode}
            isMobile={!!isMobile}
            isConsoleOpen={isConsoleOpen}
            setIsConsoleOpen={setIsConsoleOpen}
            output={output}
            iframeRef={iframeRef}
          />
        )}

        {!isMobile && practice && (
          <div className="w-80 md:w-96 border-l border-white/5 bg-[#0d1117] shadow-2xl shrink-0">
            <MissionBriefing 
              practice={practice}
              availableVariants={availableVariants}
              completedObjectives={completedObjectives}
              isCompleted={isCompleted(lessonId)}
              nextLessonId={nextLessonId}
              onNavigate={(id) => router.push(`/learn/${id}`)}
              onGoToDashboard={() => router.push('/dashboard')}
            />
          </div>
        )}
      </main>
    </div>
  );
}