"use client";

import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { modules, findOrderedLessons, findTheoryLesson, findPracticeExercise, findKnowledgeAreaByLessonId } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Star, Target, Loader2, BookOpen, Laptop, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const { t } = useLanguage();
  const { profile, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading, isCompleted } = useProgress();

  const currentLessonId = useMemo(() => {
    const ordered = findOrderedLessons();
    const next = ordered.find(id => !isCompleted(id));
    return next || ordered[0];
  }, [progress, isCompleted]);

  const currentLessonData = useMemo(() => {
    if (!currentLessonId) return null;
    const theory = findTheoryLesson(currentLessonId);
    const practice = findPracticeExercise(currentLessonId);
    const kaInfo = findKnowledgeAreaByLessonId(currentLessonId);
    
    return {
      id: currentLessonId,
      title: theory?.title || practice?.title || "Próxima Lição",
      kaTitle: kaInfo?.ka.title || "Engenharia de Software",
      type: theory ? 'theory' : 'practice'
    };
  }, [currentLessonId]);

  const moduleStats = useMemo(() => {
    return modules.map(m => {
      let total = 0;
      let done = 0;
      m.knowledgeAreas.forEach(ka => {
        const theoryCount = ka.theory?.length || 0;
        total += theoryCount;
        
        let practiceCount = 0;
        if (ka.practice) {
          Object.values(ka.practice).forEach(list => {
            practiceCount += list.length;
          });
        }
        total += practiceCount;

        ka.theory?.forEach(l => { if(isCompleted(l.id)) done++ });
        if (ka.practice) {
          Object.values(ka.practice).forEach(list => {
            list.forEach(p => { if(isCompleted(p.id)) done++ });
          });
        }
      });
      return { id: m.id, progress: total > 0 ? Math.round((done / total) * 100) : 0 };
    });
  }, [progress, isCompleted]);

  if (authLoading || progressLoading) {
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-background font-body min-h-[100dvh]">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl flex-1">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="font-headline text-3xl font-bold mb-2">
              Olá, {profile?.display_name || 'Engenheiro'}! 👋
            </h1>
            <p className="text-muted-foreground text-sm">O teu progresso real está sincronizado com a infraestrutura Codworks.</p>
          </div>
          <div className="flex gap-4">
            <Card className="bg-primary/10 border-primary/20 flex items-center gap-3 px-5 py-3">
              <Zap className="w-5 h-5 text-primary fill-primary" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Pontos</p>
                <p className="font-headline font-bold text-lg">{profile?.total_points || 0}</p>
              </div>
            </Card>
            <Card className="bg-accent/10 border-accent/20 flex items-center gap-3 px-5 py-3">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Streak</p>
                <p className="font-headline font-bold text-lg">{profile?.streak || 0} dias</p>
              </div>
            </Card>
          </div>
        </header>

        <section className="mb-16">
          <Card className="bg-card/40 border-none shadow-2xl p-8 rounded-[3rem] relative overflow-hidden group hover:ring-2 ring-primary/20 transition-all">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase bg-primary/20 text-primary px-3 py-1 rounded-full tracking-widest">Missão Actual</span>
                  {currentLessonData?.type === 'theory' ? 
                    <span className="flex items-center gap-1 text-[9px] font-bold text-muted-foreground uppercase"><BookOpen className="w-3 h-3" /> Teoria</span> : 
                    <span className="flex items-center gap-1 text-[9px] font-bold text-muted-foreground uppercase"><Laptop className="w-3 h-3" /> Laboratório</span>
                  }
                </div>
                <div>
                  <p className="text-xs text-primary font-bold mb-1 opacity-70">{currentLessonData?.kaTitle}</p>
                  <h3 className="text-3xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">
                    {currentLessonData?.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Continua a tua jornada de engenharia para dominar os fundamentos e desbloquear os níveis de especialização de elite.
                </p>
                <Link href={`/learn/${currentLessonId}`} className="inline-block">
                  <Button className="rounded-full px-10 h-14 font-black shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform text-lg">
                    CONTINUAR JORNADA <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center w-40 h-40 rounded-full bg-primary/5 border-2 border-dashed border-primary/20 shrink-0">
                 <Target className="w-20 h-20 text-primary opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" />
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-8 mb-20">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-2xl font-bold flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary fill-primary" />
              Trilha de Conhecimento
            </h2>
          </div>
          <div className="grid gap-6">
            {modules.map((module) => {
              const stat = moduleStats.find(s => s.id === module.id);
              return (
                <Card key={module.id} className="bg-card/40 hover:bg-card/60 transition-all border-none rounded-[2.5rem] shadow-xl overflow-hidden group">
                  <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-8">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center font-headline font-bold text-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {module.id}
                    </div>
                    <div className="flex-1 text-center sm:text-left space-y-2">
                      <h3 className="text-xl font-headline font-bold">{module.title}</h3>
                      <p className="text-muted-foreground text-xs line-clamp-1 opacity-70">{module.description}</p>
                      <div className="space-y-1.5 pt-2">
                         <div className="flex justify-between text-[10px] font-black uppercase text-muted-foreground">
                            <span>Progresso</span>
                            <span>{stat?.progress || 0}%</span>
                         </div>
                         <Progress value={stat?.progress || 0} className="h-2 bg-secondary/50 rounded-full" />
                      </div>
                    </div>
                    <Link href={`/modules?level=${module.id}`}>
                      <Button variant="outline" className="rounded-full font-bold border-primary/20 text-primary hover:bg-primary hover:text-white transition-all px-8">
                        EXPLORAR <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
