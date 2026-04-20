
"use client";

import { useState, useEffect, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Terminal, BookOpen, Play, CheckCircle2, ChevronLeft, ChevronRight, Trophy, Zap, Loader2 } from "lucide-react";
import { findLessonById, getNextLessonId } from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase/client";

export default function LearnPage() {
  const { moduleId } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const { profile } = useAuth();

  const lessonData = useMemo(() => findLessonById(moduleId as string), [moduleId]);
  
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("theory");
  const [isSaving, setIsSaving] = useState(false);

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
        setOutput("> ✅ Testes passados!\n> Pontuação: 20 pts");
        setIsCompleted(true);
        saveProgress(100);
      } else {
        setOutput("> ❌ Erro: Resultado inesperado.\n> Dica: Verifique a lógica da função.");
      }
    }, 800);
  };

  const handleQuizSubmit = () => {
    const questions = lesson.quiz || [];
    const correctCount = questions.filter(q => quizAnswers[q.id] === q.correctAnswer).length;
    const score = Math.round((correctCount / questions.length) * 100);

    if (score >= 70) {
      toast({ title: t.wellDone, description: `Score: ${score}%` });
      setIsCompleted(true);
      saveProgress(score);
    } else {
      toast({ 
        variant: "destructive", 
        title: "Tente novamente", 
        description: `Score: ${score}%. Mínimo 70% necessário.` 
      });
    }
  };

  const saveProgress = async (score: number) => {
    if (!profile) return;
    setIsSaving(true);
    
    try {
      const { error: progressError } = await supabase
        .from('user_lesson_progress')
        .upsert({
          user_id: profile.id,
          level_id: parseInt(module.id),
          ka_id: ka.id,
          lesson_id: lesson.id,
          lesson_type: lesson.type,
          completed: true,
          completed_at: new Date().toISOString(),
          quiz_score: score,
          quiz_passed: score >= 70,
          last_code: lesson.type === 'exercise' ? code : null
        }, { onConflict: 'user_id,lesson_id' });

      if (progressError) throw progressError;

      // Chama a RPC para calcular pontos (definida no schema)
      const { data: points, error: pointsError } = await supabase.rpc('calculate_total_points', {
        p_user_id: profile.id
      });

      if (!pointsError) {
        await supabase
          .from('profiles')
          .update({ total_points: points })
          .eq('id', profile.id);
      }
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao salvar", description: err.message });
    } finally {
      setIsSaving(false);
    }
  };

  const handleNext = async () => {
    // Busca progresso atual para filtrar as completas (opcional no protótipo)
    const nextId = getNextLessonId(lesson.id, []);
    if (nextId) {
      router.push(`/learn/${nextId}`);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Navigation />
      
      <div className="bg-card/50 border-b px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')} className="rounded-full h-8 w-8 p-0">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{ka.title}</span>
            <h2 className="font-headline font-bold text-xs truncate max-w-[150px] md:max-w-md">
              {lesson.title}
            </h2>
          </div>
        </div>
        
        <div className="flex gap-2">
          {isCompleted && (
            <Button size="sm" onClick={handleNext} disabled={isSaving} className="bg-primary hover:bg-primary/90 rounded-full font-bold h-8 px-4 text-xs animate-bounce">
              {isSaving ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : t.next}
              {!isSaving && <ChevronRight className="w-3 h-3 ml-1" />}
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col border-r bg-background overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="px-4 border-b bg-card/30">
              <TabsList className="bg-transparent h-12 w-full justify-start gap-4">
                <TabsTrigger value="theory" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-12 text-xs">
                  <BookOpen className="w-3.5 h-3.5 mr-2" />
                  {t.theory}
                </TabsTrigger>
                {lesson.type === 'exercise' && (
                  <TabsTrigger value="code" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-12 text-xs">
                    <Terminal className="w-3.5 h-3.5 mr-2" />
                    Editor
                  </TabsTrigger>
                )}
              </TabsList>
            </div>

            <div className="flex-1 overflow-y-auto">
              <TabsContent value="theory" className="p-6 md:p-10 m-0 animate-in fade-in duration-500">
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="space-y-4">
                    <h1 className="font-headline text-2xl md:text-3xl font-bold">{lesson.title}</h1>
                    <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                      <p>{lesson.content}</p>
                    </div>
                  </div>

                  {lesson.quiz && (
                    <div className="pt-8 space-y-8 border-t border-white/5">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <Trophy className="w-4 h-4" />
                        <span>{t.quizRequirement}</span>
                      </div>
                      {lesson.quiz.map((q) => (
                        <div key={q.id} className="space-y-4">
                          <h3 className="font-medium text-sm">{q.question}</h3>
                          <RadioGroup 
                            onValueChange={(val) => setQuizAnswers(prev => ({...prev, [q.id]: parseInt(val)}))}
                            className="gap-3"
                          >
                            {q.options.map((opt, i) => (
                              <div key={i} className="flex items-center space-x-2 p-4 rounded-xl border bg-card/50 hover:bg-card hover:border-primary/50 transition-all cursor-pointer group">
                                <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} />
                                <Label htmlFor={`${q.id}-${i}`} className="flex-1 cursor-pointer font-normal text-sm">{opt}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      ))}
                      <Button onClick={handleQuizSubmit} className="w-full h-12 rounded-xl font-bold shadow-lg shadow-primary/10">
                        {t.validateAnswers}
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="code" className="flex-1 flex flex-col m-0 h-full bg-[#0d1117]">
                 <div className="flex-1 p-4">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full bg-transparent font-code text-sm resize-none outline-none text-blue-300 leading-relaxed"
                    spellCheck={false}
                    placeholder="// Escreva seu código aqui..."
                  />
                </div>
                <div className="h-40 md:h-48 border-t border-white/10 bg-black/40 p-4 font-code text-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-2">
                      <Terminal className="w-3 h-3" /> Console
                    </span>
                    <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 h-8 rounded-full text-[10px] font-bold">
                      {isRunning ? "VALIDANDO..." : t.runCode}
                      <Play className="w-3 h-3 ml-2 fill-current" />
                    </Button>
                  </div>
                  <div className="whitespace-pre text-muted-foreground overflow-y-auto h-full pb-8 scrollbar-hide">
                    {output || "> Pronto para executar..."}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="hidden md:flex md:w-1/2 bg-[#0d1117] flex-col border-l border-white/5">
           {lesson.type === 'theory' ? (
             <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <BookOpen className="w-10 h-10 text-primary/40" />
                </div>
                <h3 className="text-xl font-bold mb-2 opacity-60">{t.theory}</h3>
                <p className="max-w-sm text-muted-foreground text-sm">Leia as instruções e complete o questionário à esquerda.</p>
             </div>
           ) : (
             <div className="flex-1 flex flex-col">
                <div className="flex-1 p-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                       <div className="flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                         <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Editor Interativo</span>
                       </div>
                       <div className="flex gap-2">
                          <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-primary hover:bg-primary/90 h-8 rounded-full text-xs font-bold px-6">
                            {t.runCode}
                          </Button>
                       </div>
                    </div>
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="flex-1 bg-secondary/10 p-6 rounded-2xl font-code text-sm resize-none outline-none text-blue-300 leading-relaxed border border-white/5 focus:border-primary/30 transition-colors"
                      spellCheck={false}
                    />
                    <div className="h-40 bg-black/60 rounded-2xl p-6 font-code text-xs border border-white/5 overflow-y-auto">
                      <div className="text-[10px] text-muted-foreground mb-2 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-primary" /> OUTPUT:
                      </div>
                      <div className={output.includes('✅') ? 'text-green-400' : 'text-blue-300'}>
                        {output || "> Aguardando execução..."}
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
