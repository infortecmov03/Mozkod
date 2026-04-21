
"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, Code2, CheckCircle2, Circle, GraduationCap, ChevronRight, Laptop, Loader2, Layers } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { useProgress } from "@/contexts/ProgressContext";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const groupLessonsByPhase = (lessons: any[]) => {
  const phases: Record<string, any[]> = {};
  lessons.forEach(lesson => {
    const phaseMatch = lesson.title.match(/Fase (\d+):/i);
    const phaseName = phaseMatch ? `Fase ${phaseMatch[1]}` : "Especialização";
    if (!phases[phaseName]) phases[phaseName] = [];
    phases[phaseName].push(lesson);
  });
  return phases;
};

function ModulesContent() {
  const { t } = useLanguage();
  const { isCompleted } = useProgress();
  const searchParams = useSearchParams();
  const levelParam = searchParams.get('level');
  
  const [selectedLangs, setSelectedLangs] = useState<Record<string, string>>({});
  const [activeLevel, setActiveLevel] = useState<string | undefined>(levelParam || undefined);

  useEffect(() => {
    if (levelParam) setActiveLevel(levelParam);
  }, [levelParam]);

  const getModuleProgress = (module: any) => {
    if (!module || !module.knowledgeAreas) return 0;
    let total = 0;
    let completed = 0;
    module.knowledgeAreas.forEach((ka: any) => {
      const theoryList = ka.theory || [];
      total += theoryList.length;
      completed += theoryList.filter((l: any) => isCompleted(l.id)).length;
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
    <main className="container mx-auto px-4 py-12 max-w-5xl flex-1">
      <header className="mb-16 text-center animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 mb-6 border-2 border-primary/20">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Currículo de Engenharia 1-8</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Uma jornada estruturada em 8 níveis, cobrindo da lógica fundamental ao domínio de elite.
        </p>
      </header>

      <Accordion 
        type="single" 
        collapsible 
        className="w-full space-y-4 mb-20"
        value={activeLevel}
        onValueChange={setActiveLevel}
      >
        {modules.map((module) => {
          const progress = getModuleProgress(module);
          const isLevel8 = module.id === 8;
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
              <AccordionContent className="bg-card/20 rounded-b-2xl border-x border-b border-white/5 p-4 md:p-8 pt-4">
                <p className="text-sm text-muted-foreground mb-8 max-w-2xl px-2">{module.description}</p>
                {isLevel8 ? (
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {module.knowledgeAreas.map((ka) => {
                      const theoryByPhase = groupLessonsByPhase(ka.theory || []);
                      return (
                        <AccordionItem key={ka.id} value={ka.id} className="border-none">
                          <AccordionTrigger className="hover:no-underline bg-background/50 rounded-xl px-5 py-4 border border-white/5 hover:border-primary/30 transition-all group/lang">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                   <Code2 className="w-5 h-5 text-accent" />
                                </div>
                                <div className="text-left">
                                   <h4 className="font-headline font-bold text-base group-hover/lang:text-primary transition-colors">{ka.title}</h4>
                                   <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{ka.load} de carga horária</p>
                                </div>
                             </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-6 pb-2 px-2">
                             <div className="space-y-10">
                                {Object.entries(theoryByPhase).map(([phase, lessons]) => (
                                  <div key={phase} className="space-y-4">
                                     <div className="flex items-center gap-3">
                                        <Layers className="w-4 h-4 text-primary" />
                                        <h5 className="font-headline font-bold text-sm text-primary uppercase tracking-tighter">{phase}</h5>
                                        <div className="h-px flex-1 bg-primary/10" />
                                     </div>
                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {lessons.map(lesson => (
                                          <Link key={lesson.id} href={`/learn/${lesson.id}`}>
                                            <Card className="bg-card/40 border-white/5 hover:border-primary/20 hover:bg-card/60 transition-all group/item overflow-hidden">
                                               <CardContent className="p-4 flex items-center justify-between gap-3">
                                                  <div className="flex items-center gap-3">
                                                     {isCompleted(lesson.id) ? (
                                                       <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                                     ) : (
                                                       <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                                                     )}
                                                     <span className={cn(
                                                       "text-xs font-medium line-clamp-1",
                                                       isCompleted(lesson.id) && "text-muted-foreground line-through"
                                                     )}>
                                                       {lesson.title.replace(/Fase \d+: /i, '')}
                                                     </span>
                                                  </div>
                                                  <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity text-primary" />
                                               </CardContent>
                                            </Card>
                                          </Link>
                                        ))}
                                     </div>
                                  </div>
                                ))}
                                <div className="pt-4 border-t border-white/5">
                                   <div className="flex items-center justify-between mb-4">
                                      <h5 className="font-headline font-bold text-sm text-accent uppercase tracking-tighter flex items-center gap-2">
                                        <Laptop className="w-4 h-4" /> Laboratórios de Projeto Master
                                      </h5>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {Object.entries(ka.practice || {}).map(([lang, exercises]) => (
                                        exercises.map((ex: any) => (
                                          <Link key={ex.id} href={`/learn/${ex.id}`}>
                                            <Card className="bg-accent/5 border-accent/10 hover:border-accent/40 transition-all p-4 flex items-center justify-between">
                                               <div className="flex items-center gap-3">
                                                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center font-bold text-[10px] text-accent">
                                                     {lang.toUpperCase()}
                                                  </div>
                                                  <span className="text-xs font-bold">{ex.title}</span>
                                               </div>
                                               <ArrowRight className="w-4 h-4 text-accent" />
                                            </Card>
                                          </Link>
                                        ))
                                      ))}
                                   </div>
                                </div>
                             </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                ) : (
                  <div className="grid gap-8">
                    {module.knowledgeAreas.map((ka) => {
                      const theoryLessons = ka.theory || [];
                      const availableLangs = Object.keys(ka.practice || {});
                      const currentLang = selectedLangs[ka.id] || availableLangs[0] || "";
                      const practiceExercises = ka.practice?.[currentLang] || [];
                      return (
                        <div key={ka.id} className="space-y-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-px flex-1 bg-white/5" />
                            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-primary/80">{ka.title}</h4>
                            <div className="h-px flex-1 bg-white/5" />
                          </div>
                          <div className="grid md:grid-cols-2 gap-6 md:items-stretch">
                             <Card className="bg-background/40 border-white/5 hover:border-primary/20 transition-all overflow-hidden group/card shadow-xl rounded-2xl flex flex-col">
                                <CardContent className="p-6 space-y-6 flex-1 flex flex-col">
                                  <div className="flex justify-between items-start">
                                     <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                     </div>
                                     <Badge variant="outline" className="text-[10px] uppercase">TEORIA</Badge>
                                  </div>
                                  <div className="space-y-2 flex-1">
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
                             {availableLangs.length > 0 ? (
                               <Card className="bg-background/40 border-white/5 hover:border-accent/20 transition-all overflow-hidden group/card shadow-xl rounded-2xl flex flex-col">
                                 <CardContent className="p-6 space-y-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start">
                                       <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                          <Code2 className="w-5 h-5 text-accent" />
                                       </div>
                                       <div className="flex gap-1">
                                          {availableLangs.map(lang => (
                                            <button
                                              key={lang}
                                              onClick={() => setSelectedLangs(prev => ({...prev, [ka.id]: lang}))}
                                              className={cn(
                                                "text-[9px] px-2 py-0.5 rounded-md border font-bold uppercase transition-all",
                                                currentLang === lang 
                                                  ? "bg-accent text-accent-foreground border-accent" 
                                                  : "bg-transparent text-muted-foreground border-white/10 hover:border-accent/50"
                                              )}
                                            >
                                              {lang}
                                            </button>
                                          ))}
                                       </div>
                                    </div>
                                    <div className="space-y-2 flex-1">
                                       {practiceExercises.map(ex => {
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
                                    {practiceExercises.length > 0 && (
                                      <Link href={`/learn/${practiceExercises[0].id}`}>
                                        <Button variant="outline" className="w-full rounded-xl font-bold h-10 gap-2 text-xs border-accent/20 hover:bg-accent/5">
                                          Laboratório {currentLang.toUpperCase()}
                                          <Laptop className="w-4 h-4" />
                                        </Button>
                                      </Link>
                                    )}
                                 </CardContent>
                               </Card>
                             ) : (
                               <Card className="bg-card/10 border-dashed border-2 flex items-center justify-center p-8 opacity-40 rounded-2xl">
                                  <p className="text-xs font-bold text-muted-foreground italic">Prática em breve</p>
                               </Card>
                             )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
}

export default function ModulesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background pb-0 font-body">
      <Navigation />
      <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-primary" /></div>}>
        <ModulesContent />
      </Suspense>
      <Footer />
    </div>
  );
}
