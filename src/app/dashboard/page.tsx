
"use client";

import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, Zap, ArrowRight, Star, Target } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { useUser, useFirestore, useCollection, useDoc } from "@/firebase";
import { useMemo } from "react";
import { collection, doc } from "firebase/firestore";

export default function DashboardPage() {
  const { t } = useLanguage();
  const { user } = useUser();
  const firestore = useFirestore();

  // Buscar perfil do usuário para pontos e estatísticas
  const userProfileRef = useMemo(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);
  
  const { data: profile } = useDoc(userProfileRef);

  // Buscar todo o progresso do usuário
  const progressQuery = useMemo(() => {
    if (!firestore || !user) return null;
    return collection(firestore, 'users', user.uid, 'progress');
  }, [firestore, user]);

  const { data: progressData } = useCollection(progressQuery);

  const getModuleProgress = (module: typeof modules[0]) => {
    if (!progressData) return 0;
    
    let totalLessons = 0;
    module.knowledgeAreas.forEach(ka => totalLessons += ka.lessons.length);
    
    const completedCount = progressData.filter(p => p.completed).length;
    return Math.round((completedCount / totalLessons) * 100);
  };

  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="font-headline text-3xl font-bold mb-2">
              Olá, {user?.displayName || 'Desenvolvedor'}! 👋
            </h1>
            <p className="text-muted-foreground">Seu progresso está incrível. Continue codificando!</p>
          </div>
          <div className="flex gap-4">
            <Card className="bg-primary/10 border-primary/20 flex items-center gap-3 px-4 py-2">
              <Zap className="w-5 h-5 text-primary fill-primary" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Pontos</p>
                <p className="font-headline font-bold">{profile?.totalPoints || 0}</p>
              </div>
            </Card>
            <Card className="bg-accent/10 border-accent/20 flex items-center gap-3 px-4 py-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Streak</p>
                <p className="font-headline font-bold">{profile?.streak || 0} dias</p>
              </div>
            </Card>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card/40 border-none shadow-xl group hover:bg-card/60 transition-all cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lições Completas</p>
                  <p className="text-2xl font-headline font-bold">{progressData?.length || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/40 border-none shadow-xl group hover:bg-card/60 transition-all cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Certificados</p>
                  <p className="text-2xl font-headline font-bold">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-none shadow-xl group hover:bg-card/60 transition-all cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-green-500/10 rounded-2xl text-green-500 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Última Atividade</p>
                  <p className="text-lg font-headline font-bold">Hoje</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-2xl font-bold flex items-center gap-2">
              Seus Módulos de Aprendizagem
            </h2>
          </div>

          <div className="grid gap-6">
            {modules.map((module) => {
              const moduleProgress = getModuleProgress(module);
              return (
                <Card key={module.id} className="overflow-hidden bg-card/40 hover:bg-card/60 transition-all border-none group shadow-2xl">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-64 h-40 sm:h-auto relative">
                      <img 
                        src={getImg(module.image)} 
                        alt={module.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                         <span className="px-2 py-1 rounded bg-primary text-[10px] font-bold uppercase">{module.level}</span>
                      </div>
                    </div>
                    <CardContent className="p-8 flex-1 flex flex-col justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{module.category}</span>
                          <span className="text-sm font-bold text-primary">{moduleProgress}%</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">{module.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{module.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <Progress value={moduleProgress} className="h-2 flex-1 bg-secondary/50" />
                        <Link href={`/learn/${module.knowledgeAreas[0].lessons[0].id}`}>
                          <Button className="rounded-full gap-2 font-bold px-6 shadow-lg shadow-primary/20 group-hover:translate-x-1 transition-transform">
                            {moduleProgress === 100 ? 'Revisar' : 'Continuar Aprendendo'}
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
