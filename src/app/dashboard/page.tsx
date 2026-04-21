
"use client";

import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, Zap, ArrowRight, Star, Target, Loader2 } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";

export default function DashboardPage() {
  const { t } = useLanguage();
  const { profile, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading, isCompleted } = useProgress();

  const getModuleProgress = (module: typeof modules[0]) => {
    if (!module || !module.knowledgeAreas) return 0;
    
    let total = 0;
    let completedCount = 0;
    
    module.knowledgeAreas.forEach(ka => {
      // Contagem de Teoria com verificação de segurança
      const theoryCount = ka.theory?.length || 0;
      total += theoryCount;
      if (ka.theory) {
        completedCount += ka.theory.filter(l => isCompleted(l.id)).length;
      }

      // Contagem de Prática com verificação de segurança
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

  const getImg = (id: string) => {
    if (!id) return "https://picsum.photos/seed/default/400/300";
    const found = PlaceHolderImages.find(img => img.id === id);
    return found?.imageUrl || `https://picsum.photos/seed/${id}/400/300`;
  };

  if (authLoading || progressLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
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

        <section className="space-y-8">
          <h2 className="font-headline text-2xl font-bold">{t.modules}</h2>
          <div className="grid gap-6">
            {modules.map((module) => {
              const moduleProgress = getModuleProgress(module);
              return (
                <Card key={module.id} className="overflow-hidden bg-card/40 hover:bg-card/60 transition-all border-none group shadow-2xl">
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
