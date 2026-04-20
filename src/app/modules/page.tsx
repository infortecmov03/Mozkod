
"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, Code2, CheckCircle2, Circle, GraduationCap, ChevronRight, Laptop } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { useProgress } from "@/contexts/ProgressContext";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ModulesPage() {
  const { t } = useLanguage();
  const { isCompleted } = useProgress();

  const getModuleProgress = (module: any) => {
    if (!module || !module.knowledgeAreas) return 0;
    
    let total = 0;
    let completed = 0;
    
    module.knowledgeAreas.forEach((ka: any) => {
      // Teoria
      const theoryList = ka.theory || [];
      total += theoryList.length;
      completed += theoryList.filter((l: any) => isCompleted(l.id)).length;
      
      // Prática (Iterar sobre todas as linguagens no objeto practice)
      if (ka.practice) {
        Object.values(ka.practice).forEach((exercises: any) => {
          if (Array.isArray(exercises)) {
            total += exercises.length;
            completed += exercises.filter((p: any) => isCompleted(p.id)).length;
          }
        });
      }
    });
    
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-16 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 mb-6 border-2 border-primary/20">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Currículo 1-8</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma jornada estruturada em 8 níveis, cobrindo da lógica fundamental ao domínio avançado.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {modules.map((module) => {
            const progress = getModuleProgress(module);
            return (
              <AccordionItem key={module.id} value={module.id.toString()} className="border-none">
                <AccordionTrigger className="hover:no-underline bg-card/40 rounded-2xl px-6 py-4 shadow-sm border border-white/5 data-[state=open]:rounded-b-none data-[state=open]:border-b-0 transition-all group">
                  <div className="flex flex-1 items-center justify-between pr-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-headline font-bold text-primary">
                        {module.id}
                      </div>
                      <div className="text-left">
                        <h3 className="font-headline font-bold text-lg">{module.title}</h3>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                            {progress === 100 ? 'Concluído' : 'Nível ' + module.id}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{progress}% completo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-card/20 rounded-b-2xl border-x border-b border-white/5 p-8 pt-4">
                  <p className="text-sm text-muted-foreground mb-8 max-w-2xl">{module.description}</p>
                  <div className="grid gap-8">
                    {module.knowledgeAreas.map((ka) => {
                      const theoryLessons = ka.theory || [];
                      // Pegar o primeiro array de exercícios disponível ou um array vazio
                      const practiceExercises = Object.values(ka.practice || {})[0] as any[] || [];
                      
                      return (
                        <div key={ka.id} className="space-y-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-px flex-1 bg-white/5" />
                            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-primary/80">{ka.title}</h4>
                            <div className="h-px flex-1 bg-white/5" />
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                             {/* Card de Teoria */}
                             <Card className="bg-background/40 border-white/5 hover:border-primary/20 transition-all overflow-hidden group/card shadow-xl">
                                <CardContent className="p-6 space-y-6">
                                  <div className="flex justify-between items-start">
                                     <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                     </div>
                                     <Badge variant="ghost" className="text-[10px] uppercase">TEORIA</Badge>
                                  </div>
                                  <div className="space-y-2">
                                     {theoryLessons.map(lesson => (
                                       <div key={lesson.id} className="flex items-center justify-between text-xs p-2 rounded-lg hover:bg-white/5 transition-colors">
                                          <div className="flex items-center gap-3">
                                            {isCompleted(lesson.id) ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Circle className="w-4 h-4 text-muted-foreground" />}
                                            <span className={cn(isCompleted(lesson.id) && "text-muted-foreground line-through")}>{lesson.title}</span>
                                          </div>
                                          <Link href={`/learn/${lesson.id}`}>
                                            <ChevronRight className="w-4 h-4 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                          </Link>
                                       </div>
                                     ))}
                                  </div>
                                  {theoryLessons.length > 0 && (
                                    <Link href={`/learn/${theoryLessons[0].id}`}>
                                      <Button className="w-full rounded-xl font-bold h-10 gap-2 text-xs">
                                        Explorar Teoria
                                        <ArrowRight className="w-4 h-4" />
                                      </Button>
                                    </Link>
                                  )}
                                </CardContent>
                             </Card>

                             {/* Card de Prática */}
                             {practiceExercises.length > 0 ? (
                               <Card className="bg-background/40 border-white/5 hover:border-accent/20 transition-all overflow-hidden group/card shadow-xl">
                                 <CardContent className="p-6 space-y-6">
                                    <div className="flex justify-between items-start">
                                       <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                          <Code2 className="w-5 h-5 text-accent" />
                                       </div>
                                       <Badge variant="ghost" className="text-[10px] uppercase text-accent">PRÁTICA</Badge>
                                    </div>
                                    <div className="space-y-2">
                                       {practiceExercises.map(ex => {
                                         // Bloquear prática se a teoria correspondente não estiver feita (lógica simples por índice)
                                         const theoryId = theoryLessons[practiceExercises.indexOf(ex)]?.id;
                                         const isLocked = theoryId && !isCompleted(theoryId);
                                         return (
                                           <div key={ex.id} className={cn(
                                             "flex items-center justify-between text-xs p-2 rounded-lg transition-colors",
                                             isLocked ? "opacity-50" : "hover:bg-white/5"
                                           )}>
                                              <div className="flex items-center gap-3">
                                                {isCompleted(ex.id) ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Circle className="w-4 h-4 text-muted-foreground" />}
                                                <span className={cn(isCompleted(ex.id) && "text-muted-foreground line-through")}>{ex.title}</span>
                                              </div>
                                              {!isLocked && (
                                                <Link href={`/learn/${ex.id}`}>
                                                  <ChevronRight className="w-4 h-4 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                                </Link>
                                              )}
                                           </div>
                                         );
                                       })}
                                    </div>
                                    <Link href={`/learn/${practiceExercises[0].id}`}>
                                      <Button variant="outline" className="w-full rounded-xl font-bold h-10 gap-2 text-xs border-accent/20 hover:bg-accent/5">
                                        Laboratório
                                        <Laptop className="w-4 h-4" />
                                      </Button>
                                    </Link>
                                 </CardContent>
                               </Card>
                             ) : (
                               <Card className="bg-card/10 border-dashed border-2 flex items-center justify-center p-8 opacity-40">
                                  <p className="text-xs font-bold text-muted-foreground italic">Prática em breve</p>
                               </Card>
                             )}
                          </div>
                        </div>
                      );
                    })}
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
