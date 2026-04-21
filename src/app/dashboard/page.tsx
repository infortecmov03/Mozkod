
"use client";

import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { modules, findOrderedLessons } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Clock, Zap, ArrowRight, Star, Target, Loader2, CheckCircle2, PlayCircle, Lock } from "lucide-react";
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

  const getModuleProgress = (module: typeof modules[0]) => {
    if (!module || !module.knowledgeAreas) return 0;
    
    let total = 0;
    let completedCount = 0;
    
    module.knowledgeAreas.forEach(ka => {
      const theoryCount = ka.theory?.length || 0;
      total += theoryCount;
      if (ka.theory) {
        completedCount += ka.theory.filter(l => isCompleted(l.id)).length;
      }

      if (ka.practice) {
        Object.values(ka.practice).forEach(exercises => {
          if (Array.isArray(exercises)) {
            total += exercises.length;
            completedCount += exercises.filter(p => isCompleted(p.id)).length;
          }
        });
      }
    });
    
    return total > 0 ? Math.round((completedCount / total) * 100) : 0;
  };

  const currentPath = useMemo(() => {
    const ordered = findOrderedLessons();
    const items = ordered.map(id => {
      const completed = isCompleted(id);
      return { id, completed };
    });

    const lastCompletedIndex = items.findLastIndex(i => i.completed);
    const nextIndex = lastCompletedIndex + 1;
    
    return items.slice(0, 10).map((item, idx) => ({
      ...item,
      status: item.completed ? 'completed' : (idx === nextIndex || (lastCompletedIndex === -1 && idx === 0) ? 'current' : 'locked')
    }));
  }, [progress, isCompleted]);

  const currentLessonId = useMemo(() => {
    const ordered = findOrderedLessons();
    const next = ordered.find(id => !isCompleted(id));
    return next || ordered[0];
  }, [progress, isCompleted]);

  if (authLoading || progressLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl flex-1">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="font-headline text-3xl font-bold mb-2">
              Olá, {profile?.display_name?.split(' ')[0] || 'Dev'}! 👋
            </h1>
            <p className="text-muted-foreground text-sm">Seu progresso está incrível. Continue codificando!</p>
          </div>
          <div className="flex gap-4">
            <Card className="bg-primary/10 border-primary/20 flex items-center gap-3 px-5 py-3 shadow-xl shadow-primary/5">
              <Zap className="w-5 h-5 text-primary fill-primary" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{t.points}</p>
                <p className="font-headline font-bold text-lg">{profile?.total_points || 0}</p>
              </div>
            </Card>
            <Card className="bg-accent/10 border-accent/20 flex items-center gap-3 px-5 py-3 shadow-xl shadow-accent/5">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{t.streak}</p>
                <p className="font-headline font-bold text-lg">{profile?.streak || 0} dias</p>
              </div>
            </Card>
          </div>
        </header>

        <section className="mb-16">
           <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-xl font-bold flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" /> Sua Trilha de Aprendizado
              </h2>
              <Link href="/modules" className="text-xs font-bold text-primary hover:underline">Ver currículo completo</Link>
           </div>
           
           <Card className="bg-card/40 border-none shadow-2xl p-8 overflow-hidden relative rounded-[2.5rem]">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-50" />
              <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="flex-1 space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Próximo Passo</p>
                    <h3 className="text-2xl font-headline font-bold">Prepare-se para o Próximo Tópico</h3>
                    <p className="text-sm text-muted-foreground max-w-md">Continue sua jornada para desbloquear certificados e pontos de prestígio.</p>
                    <Link href={`/learn/${currentLessonId}`}>
                      <Button className="rounded-full gap-2 font-bold px-8 h-12 shadow-lg shadow-primary/20">
                        {t.continueLearning}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                 </div>
                 
                 <div className="w-full md:w-2/3">
                    <div className="relative flex justify-between items-center py-6 px-4">
                       <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-muted -translate-y-1/2" />
                       {currentPath.map((node, i) => (
                         <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center transition-all border-2",
                              node.status === 'completed' ? "bg-primary border-primary shadow-lg shadow-primary/20" : 
                              node.status === 'current' ? "bg-background border-primary animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]" : 
                              "bg-muted border-muted"
                            )}>
                               {node.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-white" />}
                               {node.status === 'current' && <PlayCircle className="w-5 h-5 text-primary" />}
                               {node.status === 'locked' && <Lock className="w-4 h-4 text-muted-foreground" />}
                            </div>
                            <span className={cn(
                              "text-[8px] font-bold uppercase",
                              node.status === 'current' ? "text-primary" : "text-muted-foreground"
                            )}>Tópico {i + 1}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </Card>
        </section>

        <section className="space-y-8 mb-20">
          <h2 className="font-headline text-2xl font-bold">{t.modules}</h2>
          <div className="grid gap-6">
            {modules.map((module) => {
              const moduleProgress = getModuleProgress(module);
              return (
                <Card key={module.id} className="overflow-hidden bg-card/40 hover:bg-card/60 transition-all border-none group shadow-2xl rounded-[2rem]">
                  <div className="flex flex-col sm:flex-row">
                    <CardContent className="p-8 flex-1 flex flex-col justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Nível {module.id}</span>
                          <span className="text-xs font-bold text-primary">{moduleProgress}%</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold">{module.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{module.description}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <Progress value={moduleProgress} className="h-1.5 flex-1 bg-secondary/50" />
                        <Link href={`/modules?level=${module.id}`}>
                          <Button className="rounded-full gap-2 font-bold px-8 h-12 shadow-lg shadow-primary/20">
                            {moduleProgress === 100 ? t.review : t.continueLearning}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
