"use client";

import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { modules, findOrderedLessons } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Star, Target, Loader2, CheckCircle2, PlayCircle, Lock, ChevronRight } from "lucide-react";
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

  const moduleStats = useMemo(() => {
    return modules.map(m => {
      let total = 0;
      let done = 0;
      m.knowledgeAreas.forEach(ka => {
        total += (ka.theory?.length || 0);
        Object.values(ka.practice || {}).forEach(list => total += list.length);
        ka.theory?.forEach(l => { if(isCompleted(l.id)) done++ });
        Object.values(ka.practice || {}).forEach(list => list.forEach(p => { if(isCompleted(p.id)) done++ }));
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
            <p className="text-muted-foreground text-sm">O teu progresso está a ser registado em tempo real.</p>
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
          <Card className="bg-card/40 border-none shadow-2xl p-8 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <p className="text-[10px] font-black uppercase text-primary">Missão Actual</p>
                <h3 className="text-2xl font-headline font-bold">Pronto para o próximo desafio?</h3>
                <p className="text-sm text-muted-foreground">Continua a tua jornada de engenharia para desbloquear novos níveis.</p>
                <Link href={`/learn/${currentLessonId}`}>
                  <Button className="rounded-full px-8 h-12 font-bold shadow-lg shadow-primary/20">
                    CONTINUAR APRENDENDO <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="hidden md:flex gap-4 opacity-50">
                 <Target className="w-20 h-20 text-primary/20" />
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-8 mb-20">
          <h2 className="font-headline text-2xl font-bold">Módulos de Engenharia</h2>
          <div className="grid gap-6">
            {modules.map((module) => {
              const stat = moduleStats.find(s => s.id === module.id);
              return (
                <Card key={module.id} className="bg-card/40 hover:bg-card/60 transition-all border-none rounded-[2rem] shadow-xl overflow-hidden">
                  <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center font-headline font-bold text-2xl text-primary shrink-0">
                      {module.id}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-headline font-bold">{module.title}</h3>
                      <p className="text-muted-foreground text-xs mb-4 line-clamp-1">{module.description}</p>
                      <Progress value={stat?.progress || 0} className="h-1.5 bg-secondary/50" />
                    </div>
                    <Link href={`/modules?level=${module.id}`}>
                      <Button variant="outline" className="rounded-full font-bold border-primary/20 text-primary">
                        ABRIR <ChevronRight className="ml-2 w-4 h-4" />
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