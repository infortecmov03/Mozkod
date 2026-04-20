
"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Layers, GraduationCap, CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { useProgress } from "@/contexts/ProgressContext";
import { Badge } from "@/components/ui/badge";

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

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Intermediate': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Advanced': return 'bg-accent/10 text-accent border-accent/20';
      case 'Expert': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-secondary text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-16 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 mb-6 border-2 border-primary/20">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Grade Curricular</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma jornada estruturada em 8 níveis, cobrindo desde a lógica fundamental até especializações avançadas.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {modules.map((module) => {
            const progress = getModuleProgress(module);
            return (
              <AccordionItem key={module.id} value={module.id} className="border-none">
                <AccordionTrigger className="hover:no-underline bg-card/40 rounded-2xl px-6 py-4 shadow-sm border border-white/5 data-[state=open]:rounded-b-none data-[state=open]:border-b-0 transition-all group">
                  <div className="flex flex-1 items-center justify-between pr-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden">
                        <img src={getImg(module.image)} alt="" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-headline font-bold text-lg">{module.title}</h3>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className={getLevelColor(module.level)}>
                            {module.level}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{module.knowledgeAreas.length} Áreas • {progress}% completo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-card/20 rounded-b-2xl border-x border-b border-white/5 p-6 pt-2">
                  <p className="text-sm text-muted-foreground mb-8 max-w-2xl">{module.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {module.knowledgeAreas.map((ka) => (
                      <Card key={ka.id} className="bg-background/50 border-white/5 hover:border-primary/30 transition-all group/ka shadow-lg overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                              <Layers className="w-5 h-5 text-primary" />
                            </div>
                            <Badge variant="ghost" className="text-[10px] uppercase tracking-tighter">
                              {ka.lessons.length} aulas
                            </Badge>
                          </div>
                          <h4 className="font-bold text-lg mb-2 group-hover/ka:text-primary transition-colors">{ka.title}</h4>
                          <p className="text-xs text-muted-foreground mb-6 line-clamp-2">{ka.description}</p>
                          
                          <div className="space-y-2 mb-6">
                            {ka.lessons.slice(0, 3).map((lesson) => (
                              <div key={lesson.id} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                                {isCompleted(lesson.id) ? (
                                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                                ) : (
                                  <Circle className="w-3 h-3" />
                                )}
                                <span className="truncate">{lesson.title}</span>
                              </div>
                            ))}
                            {ka.lessons.length > 3 && (
                              <p className="text-[10px] text-primary font-bold pl-5">+ {ka.lessons.length - 3} mais lições</p>
                            )}
                          </div>

                          <Link href={`/learn/${ka.lessons[0].id}`}>
                            <Button className="w-full rounded-xl font-bold gap-2 text-xs h-10 shadow-lg shadow-primary/10">
                              Começar
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </main>
    </div>
  );
}
