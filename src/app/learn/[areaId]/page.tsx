'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Code, PencilRuler, Target } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { curriculumData, KnowledgeArea, TheoryLesson } from '@/lib/curriculum-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { useProgress } from '@/context/ProgressContext';


export default function LearnPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const { progress, markAsCompleted, isCompleted } = useProgress();

  const [area, setArea] = useState<KnowledgeArea | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<TheoryLesson | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const areaId = Array.isArray(params.areaId) ? params.areaId[0] : params.areaId;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !user) {
      const currentPath = `/learn/${areaId}`;
      localStorage.setItem('redirectAfterLogin', currentPath);
      router.push('/login');
    }
  }, [isMounted, user, router, areaId]);

  useEffect(() => {
    if (areaId) {
      const foundArea = curriculumData
        .flatMap((level) => level.knowledgeAreas)
        .find((a) => a.id === areaId);

      if (foundArea) {
        setArea(foundArea);
        if (foundArea.theory && foundArea.theory.length > 0) {
          setSelectedLesson(foundArea.theory[0]);
        }
      }
    }
  }, [areaId]);
  
  const lessonIndex = area?.theory?.findIndex(l => l.id === selectedLesson?.id) ?? -1;

  const handlePrevious = () => {
      if (area?.theory && lessonIndex > 0) {
          setSelectedLesson(area.theory[lessonIndex - 1]);
      }
  }
  const handleNext = () => {
      if (area?.theory && lessonIndex < area.theory.length - 1) {
          setSelectedLesson(area.theory[lessonIndex + 1]);
      }
  }
  
  const handleMarkAsCompleted = () => {
    if (selectedLesson) {
      markAsCompleted(selectedLesson.id);
      toast({
        title: "Progresso Salvo!",
        description: `Lição "${selectedLesson.title}" marcada como concluída.`
      })
    }
  }


  if (!isMounted || !user) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <p className="text-muted-foreground">A carregar...</p>
        </div>
    );
  }

  if (!area) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
        <Header />
            <div className="flex-1 flex flex-col items-center justify-center">
                <p className="text-lg mb-4">Área de conhecimento não encontrada.</p>
                <Button asChild>
                <Link href="/curriculo">Voltar ao Currículo</Link>
                </Button>
            </div>
        <Footer />
      </div>
    );
  }

  const renderTheory = () => (
    <div className="flex flex-col md:flex-row gap-8 mt-6">
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Lições de Teoria</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[60vh]">
                <nav className="flex flex-col gap-1 pr-4">
                  {area.theory?.map((lesson, index) => (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className={`text-left p-3 rounded-md transition-colors w-full ${
                        selectedLesson?.id === lesson.id
                          ? 'bg-accent text-accent-foreground font-semibold'
                          : 'hover:bg-accent/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                          <CheckCircle className={`h-5 w-5 ${isCompleted(lesson.id) ? 'text-primary' : 'text-muted-foreground/50'}`} />
                          <span className="flex-1">{index + 1}. {lesson.title}</span>
                      </div>
                    </button>
                  ))}
                  {(!area.theory || area.theory.length === 0) && (
                      <p className="p-3 text-muted-foreground text-sm">Nenhuma lição teórica disponível.</p>
                  )}
                </nav>
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>

        <div className="w-full md:w-2/3 lg:w-3/4">
          {selectedLesson ? (
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{selectedLesson.title}</CardTitle>
              </CardHeader>
               <Separator />
              <CardContent className="pt-6">
                <article 
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedLesson.content }}
                />
                
                 <Separator className="my-8" />

                <div className="flex justify-between items-center">
                  <Button 
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={lessonIndex <= 0}
                  >
                      Anterior
                  </Button>
                  <Button onClick={handleMarkAsCompleted} disabled={isCompleted(selectedLesson.id)}>
                      {isCompleted(selectedLesson.id) ? 'Concluída' : 'Marcar como Concluída'}
                  </Button>
                  <Button 
                      variant="outline"
                      onClick={handleNext}
                      disabled={!area.theory || lessonIndex >= area.theory.length - 1}
                  >
                      Próxima
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex h-[75vh] items-center justify-center rounded-lg border-2 border-dashed">
              <div className="text-center">
                  <p className="text-muted-foreground">Selecione uma lição para começar.</p>
              </div>
            </div>
          )}
        </div>
      </div>
  );

  const renderPractice = () => (
     <div className="mt-6">
         <Card>
            <CardHeader>
                <CardTitle>Exercícios Práticos</CardTitle>
                <CardDescription>Aplique o que você aprendeu com desafios de codificação.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="flex h-[60vh] items-center justify-center rounded-lg border-2 border-dashed">
                    <div className="text-center text-muted-foreground">
                        <p>Exercícios práticos para {area.title} em breve!</p>
                    </div>
                </div>
            </CardContent>
        </Card>
     </div>
  );

  const renderQuizzes = () => (
     <div className="mt-6">
        <Card>
            <CardHeader>
                <CardTitle>Quizzes</CardTitle>
                <CardDescription>Teste seu conhecimento e prepare-se para os certificados.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex h-[60vh] items-center justify-center rounded-lg border-2 border-dashed">
                    <div className="text-center text-muted-foreground">
                        <p>Quizzes para {area.title} em breve!</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button variant="ghost" asChild>
            <Link href="/curriculo">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Currículo
            </Link>
          </Button>
          <h1 className="font-headline text-2xl font-bold text-center">{area.title}</h1>
          <div className="w-36"></div>
        </div>
        
        <Tabs defaultValue="theory" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="theory"><PencilRuler className="mr-2 h-4 w-4" />Teoria</TabsTrigger>
            <TabsTrigger value="practice"><Code className="mr-2 h-4 w-4" />Prática</TabsTrigger>
            <TabsTrigger value="quizzes"><Target className="mr-2 h-4 w-4" />Quizzes</TabsTrigger>
          </TabsList>
          <TabsContent value="theory">
            {renderTheory()}
          </TabsContent>
          <TabsContent value="practice">
            {renderPractice()}
          </TabsContent>
          <TabsContent value="quizzes">
            {renderQuizzes()}
          </TabsContent>
        </Tabs>

      </main>
      <Footer />
    </div>
  );
}
