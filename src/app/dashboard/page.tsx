
"use client";

import { useEffect, useState } from "react";
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
import { supabase } from "@/lib/supabase/client";

export default function DashboardPage() {
  const { t } = useLanguage();
  const { profile, loading: authLoading } = useAuth();
  const [progress, setProgress] = useState<any[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(true);

  useEffect(() => {
    async function loadProgress() {
      if (!profile) return;
      const { data, error } = await supabase
        .from('user_lesson_progress')
        .select('*')
        .eq('user_id', profile.id);
      
      if (!error && data) {
        setProgress(data);
      }
      setLoadingProgress(false);
    }
    loadProgress();
  }, [profile]);

  const getModuleProgress = (module: typeof modules[0]) => {
    if (!progress) return 0;
    const moduleLessons: string[] = [];
    module.knowledgeAreas.forEach(ka => moduleLessons.push(...ka.lessons.map(l => l.id)));
    const completedCount = progress.filter(p => p.completed && moduleLessons.includes(p.lessonId)).length;
    return moduleLessons.length > 0 ? Math.round((completedCount / moduleLessons.length) * 100) : 0;
  };

  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  if (authLoading || loadingProgress) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl animate-in fade-in duration-1000">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="font-headline text-3xl font-bold mb-2">
              Olá, {profile?.display_name?.split(' ')[0] || 'Dev'}! 👋
            </h1>
            <p className="text-muted-foreground text-sm">Seu progresso está incrível. Continue codificando!</p>
          </div>
          <div className="flex gap-4">
            <Card className="bg-primary/10 border-primary/20 flex items-center gap-3 px-5 py-3 shadow-xl shadow-primary/5">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary fill-primary" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{t.points}</p>
                <p className="font-headline font-bold text-lg">{profile?.total_points || 0}</p>
              </div>
            </Card>
            <Card className="bg-accent/10 border-accent/20 flex items-center gap-3 px-5 py-3 shadow-xl shadow-accent/5">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{t.streak}</p>
                <p className="font-headline font-bold text-lg">{profile?.streak || 0} dias</p>
              </div>
            </Card>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          <Card className="bg-card/40 border-none shadow-xl group hover:bg-card/60 transition-all cursor-pointer p-6">
             <div className="flex items-center gap-4">
               <Target className="w-6 h-6 text-primary" />
               <div className="hidden sm:block">
                 <p className="text-xs text-muted-foreground">{t.lessonsCompleted}</p>
                 <p className="text-xl font-headline font-bold">{progress.length}</p>
               </div>
               <div className="sm:hidden">
                 <p className="text-xl font-headline font-bold">{progress.length}</p>
               </div>
             </div>
          </Card>
          
          <Card className="bg-card/40 border-none shadow-xl group hover:bg-card/60 transition-all cursor-pointer p-6">
             <div className="flex items-center gap-4">
               <Trophy className="w-6 h-6 text-accent" />
               <div className="hidden sm:block">
                 <p className="text-xs text-muted-foreground">{t.certifications}</p>
                 <p className="text-xl font-headline font-bold">0</p>
               </div>
               <div className="sm:hidden">
                 <p className="text-xl font-headline font-bold">0</p>
               </div>
             </div>
          </Card>

          <Card className="bg-card/40 border-none shadow-xl group hover:bg-card/60 transition-all cursor-pointer p-6 col-span-2 md:col-span-1">
             <div className="flex items-center gap-4">
               <Clock className="w-6 h-6 text-green-500" />
               <div>
                 <p className="text-xs text-muted-foreground">{t.lastActivity}</p>
                 <p className="text-sm font-headline font-bold">Hoje</p>
               </div>
             </div>
          </Card>
        </div>

        <section className="space-y-8">
          <h2 className="font-headline text-2xl font-bold">{t.modules}</h2>

          <div className="grid gap-6">
            {modules.map((module) => {
              const moduleProgress = getModuleProgress(module);
              return (
                <Card key={module.id} className="overflow-hidden bg-card/40 hover:bg-card/60 transition-all border-none group shadow-2xl">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-64 h-48 sm:h-auto relative">
                      <img 
                        src={getImg(module.image)} 
                        alt={module.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                         <span className="px-2 py-1 rounded-md bg-primary text-[10px] font-bold uppercase tracking-widest">{module.level}</span>
                      </div>
                    </div>
                    <CardContent className="p-8 flex-1 flex flex-col justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{module.category}</span>
                          <span className="text-xs font-bold text-primary">{moduleProgress}%</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">{module.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{module.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <Progress value={moduleProgress} className="h-1.5 flex-1 bg-secondary/50" />
                        <Link href={`/learn/${module.knowledgeAreas[0].lessons[0].id}`}>
                          <Button className="rounded-full gap-2 font-bold px-8 h-12 shadow-lg shadow-primary/20 group-hover:translate-x-1 transition-transform">
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
