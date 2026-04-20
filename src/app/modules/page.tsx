
"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Layers, Trophy } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/contexts/ProgressContext";

export default function ModulesPage() {
  const { t } = useLanguage();
  const { isCompleted } = useProgress();

  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  const getModuleProgress = (module: any) => {
    const total = module.knowledgeAreas.reduce((acc: number, ka: any) => acc + ka.lessons.length, 0);
    const completed = module.knowledgeAreas.reduce((acc: number, ka: any) => 
      acc + ka.lessons.filter((l: any) => isCompleted(l.id)).length, 0);
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="mb-16 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 mb-6 border-2 border-primary/20">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Trilhas de Aprendizagem</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossa grade curricular dividida por níveis de proficiência, desde os fundamentos até as especializações avançadas.
          </p>
        </header>

        <div className="grid gap-12">
          {modules.map((module) => {
            const progress = getModuleProgress(module);
            return (
              <section key={module.id} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 px-0 bg-primary rounded-full" />
                  <h2 className="text-2xl font-headline font-bold">{module.title}</h2>
                  <span className="px-3 py-1 rounded-full bg-secondary text-[10px] font-bold uppercase tracking-widest">{module.level}</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {module.knowledgeAreas.map((ka) => (
                    <Card key={ka.id} className="bg-card/40 border-none shadow-xl hover:shadow-2xl transition-all group overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Layers className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">{ka.lessons.length} aulas</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{ka.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">Explora os conceitos fundamentais desta área de conhecimento.</p>
                          </div>
                          
                          <div className="pt-4 flex flex-col gap-4">
                             <Link href={`/learn/${ka.lessons[0].id}`} className="w-full">
                               <Button className="w-full rounded-xl font-bold gap-2">
                                 Começar
                                 <ArrowRight className="w-4 h-4" />
                               </Button>
                             </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

import { GraduationCap } from "lucide-react";
