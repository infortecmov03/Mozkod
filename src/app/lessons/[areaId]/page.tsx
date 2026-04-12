'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { curriculumData, KnowledgeArea, Lesson } from '@/lib/curriculum-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';


export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [area, setArea] = useState<KnowledgeArea | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const areaId = Array.isArray(params.areaId) ? params.areaId[0] : params.areaId;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !user) {
      router.push('/login');
    }
  }, [isMounted, user, router]);

  useEffect(() => {
    if (areaId) {
      const foundArea = curriculumData
        .flatMap((level) => level.knowledgeAreas)
        .find((a) => a.id === areaId);

      if (foundArea) {
        setArea(foundArea);
        if (foundArea.lessons && foundArea.lessons.length > 0) {
          setSelectedLesson(foundArea.lessons[0]);
        }
      }
    }
  }, [areaId]);
  
  const lessonIndex = area?.lessons?.findIndex(l => l.id === selectedLesson?.id) ?? -1;

  const handlePrevious = () => {
      if (area?.lessons && lessonIndex > 0) {
          setSelectedLesson(area.lessons[lessonIndex - 1]);
      }
  }
  const handleNext = () => {
      if (area?.lessons && lessonIndex < area.lessons.length - 1) {
          setSelectedLesson(area.lessons[lessonIndex + 1]);
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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/curriculo">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Currículo
            </Link>
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[60vh]">
                  <nav className="flex flex-col gap-1 pr-4">
                    {area.lessons?.map((lesson, index) => (
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
                            <CheckCircle className={`h-5 w-5 ${selectedLesson?.id === lesson.id ? 'text-primary' : 'text-muted-foreground/50'}`} />
                            <span className="flex-1">{index + 1}. {lesson.title}</span>
                        </div>
                      </button>
                    ))}
                    {(!area.lessons || area.lessons.length === 0) && (
                        <p className="p-3 text-muted-foreground text-sm">Nenhuma lição disponível.</p>
                    )}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
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
                        Lição Anterior
                    </Button>
                    <Button>Marcar como Concluída</Button>
                    <Button 
                        variant="outline"
                        onClick={handleNext}
                        disabled={!area.lessons || lessonIndex >= area.lessons.length - 1}
                    >
                        Próxima Lição
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex h-[75vh] items-center justify-center rounded-lg border-2 border-dashed">
                <div className="text-center">
                    <p className="text-muted-foreground mb-4">Selecione uma lição para começar a aprender.</p>
                    <Button asChild>
                        <Link href="/curriculo">Explorar outras áreas</Link>
                    </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
