
"use client";

import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2, Trophy, Clock, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { useUser, useFirestore, useCollection } from "@/firebase";
import { useMemo } from "react";
import { collection } from "firebase/firestore";

export default function DashboardPage() {
  const { t } = useLanguage();
  const { user } = useUser();
  const firestore = useFirestore();

  // Query all user progress
  const progressQuery = useMemo(() => {
    if (!firestore || !user) return null;
    return collection(firestore, 'users', user.uid, 'progress');
  }, [firestore, user]);

  const { data: progressData } = useCollection(progressQuery);

  const getModuleProgress = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module || !progressData) return 0;
    
    const completedInModule = progressData.filter(p => 
      module.lessons.some(l => l.id === p.id && p.completed)
    ).length;
    
    return Math.round((completedInModule / module.lessons.length) * 100);
  };

  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-10">
          <h1 className="font-headline text-3xl font-bold mb-2">Olá, {user?.displayName || 'Desenvolvedor'}!</h1>
          <p className="text-muted-foreground">Continue sua jornada para se tornar um expert.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Skill Points</p>
                  <p className="text-2xl font-headline font-bold">2,450</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conquistas</p>
                  <p className="text-2xl font-headline font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-secondary/40 border-none">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tempo de Estudo</p>
                  <p className="text-2xl font-headline font-bold">42h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="space-y-6">
          <h2 className="font-headline text-2xl font-bold flex items-center gap-2">
            Seus Módulos
          </h2>
          <div className="grid gap-4">
            {modules.map((module) => {
              const moduleProgress = getModuleProgress(module.id);
              return (
                <Card key={module.id} className="overflow-hidden bg-card/40 hover:bg-card/60 transition-all border-none group shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-32 sm:h-auto relative">
                      <img 
                        src={getImg(module.image)} 
                        alt={module.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{module.category}</span>
                          <span className="text-xs font-medium">{moduleProgress}%</span>
                        </div>
                        <h3 className="text-xl font-headline font-bold group-hover:text-primary transition-colors">{module.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{module.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress value={moduleProgress} className="h-1.5 flex-1" />
                        <Link href={`/learn/${module.id}`}>
                          <Button size="sm" className="rounded-full gap-2 font-bold h-9">
                            {moduleProgress === 100 ? 'Revisar' : 'Continuar'}
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
