'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Code, PencilRuler, Target, BookOpen, Menu, XCircle } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { curriculumData, KnowledgeArea, TheoryLesson, PracticeExercise, PracticeExerciseTest } from '@/lib/curriculum-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { useProgress } from '@/context/ProgressContext';
import { Label } from '@/components/ui/label';
import Editor from '@monaco-editor/react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";


export default function LearnPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const { isCompleted } = useProgress();

  const [area, setArea] = useState<KnowledgeArea | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<TheoryLesson | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [lessonsSheetOpen, setLessonsSheetOpen] = useState(false);
  const [practiceSheetOpen, setPracticeSheetOpen] = useState(false);

  // State for practice tab
  const [selectedPracticeLanguage, setSelectedPracticeLanguage] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<PracticeExercise | null>(null);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState<{ description: string; passed: boolean; error?: string }[]>([]);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [htmlSrcDoc, setHtmlSrcDoc] = useState('');


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
        setSelectedLesson(null); // DO NOT select first lesson by default
        setSelectedPracticeLanguage(null);
        setSelectedExercise(null);
        setCode('');
        setTestResults([]);
        setConsoleOutput([]);

        // Pre-select first language if available, but not first exercise
        if (foundArea.practice) {
             const languages = Object.keys(foundArea.practice).filter(lang => foundArea.practice[lang]?.length > 0);
             if (languages.length > 0) {
                 setSelectedPracticeLanguage(languages[0]);
             }
        }
      }
    }
  }, [areaId]);

  // Effect to update code when exercise changes
  useEffect(() => {
    if (selectedExercise) {
      setCode(selectedExercise.template);
    } else {
        setCode('');
    }
    setTestResults([]);
    setConsoleOutput([]);
  }, [selectedExercise]);

  useEffect(() => {
    if (selectedPracticeLanguage === 'html') {
      const htmlMarker = '<!-- index.html -->';
      const cssMarker = '<!-- styles.css -->';
      
      let htmlContent = '';
      let cssContent = '';
      
      const cssStartIndex = code.indexOf(cssMarker);
      const htmlStartIndex = code.indexOf(htmlMarker);

      if (htmlStartIndex !== -1) {
        if (cssStartIndex !== -1) {
          htmlContent = code.substring(htmlStartIndex + htmlMarker.length, cssStartIndex).trim();
          cssContent = code.substring(cssStartIndex + cssMarker.length).trim();
        } else {
          htmlContent = code.substring(htmlStartIndex + htmlMarker.length).trim();
        }
      }

      setHtmlSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 8px; font-family: sans-serif; }
              ${cssContent}
            </style>
          </head>
          <body>
            ${htmlContent}
          </body>
        </html>
      `);
    }
  }, [code, selectedPracticeLanguage]);
  
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
  
  const handleLanguageSelect = (lang: string) => {
    setSelectedPracticeLanguage(lang);
    setSelectedExercise(null); // Deselect exercise when language changes
    setTestResults([]);
    setConsoleOutput([]);
  }
  
  const handleRunTests = () => {
    if (!selectedExercise || !selectedPracticeLanguage) {
        toast({
            variant: "destructive",
            title: "Nenhum exercício selecionado",
            description: "Por favor, selecione um exercício para começar.",
        });
        return;
    }
    if (!selectedExercise.tests) {
         toast({
            variant: "destructive",
            title: "Nenhum teste encontrado",
            description: "Não há testes automatizados para este exercício.",
        });
        return;
    }

    if (selectedPracticeLanguage !== 'javascript') {
         toast({
            variant: "destructive",
            title: "Executor de Teste Indisponível",
            description: `O executor de testes para ${selectedPracticeLanguage} ainda não foi implementado.`,
        });
        return;
    }
    
    setTestResults([]);
    setConsoleOutput([]);
    const results = [];
    const capturedLogs: string[] = [];
    let allPassed = true;

    const originalConsoleLog = console.log;
    console.log = (...args) => {
        capturedLogs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' '));
    };

    try {
        for (const test of selectedExercise.tests) {
            try {
                const testFunction = new Function(`${code}\n${test.code}`);
                const result = testFunction();
                if (result !== true) {
                    allPassed = false;
                }
                results.push({ description: test.description, passed: result === true });
            } catch (error: any) {
                allPassed = false;
                results.push({ description: test.description, passed: false, error: error.message });
                toast({
                    variant: "destructive",
                    title: "Erro no seu código!",
                    description: `Ocorreu um erro ao executar seu código: ${error.message}`,
                });
                setTestResults(results);
                setConsoleOutput(capturedLogs);
                return; // Stop on first error
            }
        }
    } finally {
        console.log = originalConsoleLog; // Always restore original console.log
    }
    
    setTestResults(results);
    setConsoleOutput(capturedLogs);

    if (allPassed) {
        toast({
            title: "Sucesso!",
            description: "Todos os testes passaram.",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Alguns testes falharam",
            description: "Verifique os resultados e a saída do console abaixo.",
        });
    }
};


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
  
   const OverviewComponent = ({title, description, cta}: {title: string, description: string, cta: string}) => (
      <div className="flex h-full min-h-[70vh] items-center justify-center rounded-lg border-2 border-dashed">
          <div className="text-center p-8">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
              <h2 className="mt-6 text-2xl font-headline font-semibold">{title}</h2>
              <p className="mt-2 text-muted-foreground max-w-lg mx-auto">{description}</p>
              <p className="mt-6 font-semibold text-primary">{cta}</p>
          </div>
      </div>
  );

  const renderTheory = () => (
    <div className="mt-6">
      <div className="flex justify-end mb-4">
        <Sheet open={lessonsSheetOpen} onOpenChange={setLessonsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu className="mr-2 h-4 w-4" />
              Ver Lições
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md p-0">
            <SheetTitle className="sr-only">Lições de Teoria</SheetTitle>
            <Card className="border-none shadow-none h-full flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Lições de Teoria</CardTitle>
                <CardDescription>Selecione uma lição para começar</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ScrollArea className="h-full">
                  <nav className="flex flex-col gap-1 pr-4">
                    {area.theory?.map((lesson, index) => (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setSelectedLesson(lesson);
                          setLessonsSheetOpen(false);
                        }}
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
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-full">
        {selectedLesson ? (
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{selectedLesson.title}</CardTitle>
            </CardHeader>
             <Separator />
            <CardContent className="pt-6">
              {selectedLesson.youtubeVideoId && (
                <div className="my-6 aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${selectedLesson.youtubeVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {selectedLesson.detailedExplanation && (
                <article 
                    className="prose dark:prose-invert max-w-none mb-6 p-4 border rounded-lg bg-card/50"
                    dangerouslySetInnerHTML={{ __html: selectedLesson.detailedExplanation }}
                />
               )}
              
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
           <OverviewComponent 
            title={`Visão Geral de ${area.title}`} 
            description={area.description}
            cta="Clique no menu 'Ver Lições' acima para escolher uma lição e começar."
          />
        )}
      </div>
    </div>
  );

  const renderPractice = () => {
    const practiceLanguages = area?.practice ? Object.keys(area.practice).filter(lang => area.practice[lang]?.length > 0) : [];

    if (practiceLanguages.length === 0) {
      return (
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
    }

    const exercisesForLang = selectedPracticeLanguage ? area.practice[selectedPracticeLanguage] : [];

    const practiceSidebar = (
        <Card className="border-none shadow-none h-full flex flex-col">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Exercícios</CardTitle>
                 <CardDescription>Escolha uma linguagem e um exercício</CardDescription>
                <div className="flex gap-2 pt-2 flex-wrap">
                    {practiceLanguages.map(lang => (
                        <Button
                            key={lang}
                            variant={selectedPracticeLanguage === lang ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleLanguageSelect(lang)}
                            className="capitalize"
                        >
                            {lang}
                        </Button>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <ScrollArea className="h-full">
                    <nav className="flex flex-col gap-1 pr-4">
                        {exercisesForLang && exercisesForLang.length > 0 ? (
                            exercisesForLang.map((exercise, index) => (
                                <button
                                    key={exercise.id}
                                    onClick={() => {
                                        setSelectedExercise(exercise);
                                        setPracticeSheetOpen(false);
                                    }}
                                    className={`text-left p-3 rounded-md transition-colors w-full ${
                                        selectedExercise?.id === exercise.id
                                        ? 'bg-accent text-accent-foreground font-semibold'
                                        : 'hover:bg-accent/50'
                                    }`}
                                >
                                    <span className="flex-1">{index + 1}. {exercise.title}</span>
                                </button>
                            ))
                        ) : (
                            <p className="p-3 text-muted-foreground text-sm">
                                {selectedPracticeLanguage ? 'Nenhum exercício para esta linguagem.' : 'Selecione uma linguagem.'}
                            </p>
                        )}
                    </nav>
                </ScrollArea>
            </CardContent>
        </Card>
    );

    return (
        <div className="mt-6">
            <div className="flex justify-end mb-4">
                <Sheet open={practiceSheetOpen} onOpenChange={setPracticeSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Menu className="mr-2 h-4 w-4" />
                            Ver Exercícios
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:max-w-md p-0">
                        <SheetTitle className="sr-only">Exercícios Práticos</SheetTitle>
                        {practiceSidebar}
                    </SheetContent>
                </Sheet>
            </div>
            
            <div className="w-full">
                {selectedExercise ? (
                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{selectedExercise.title}</CardTitle>
                            <CardDescription>{selectedExercise.statement}</CardDescription>
                        </CardHeader>
                        <Separator />
                        <CardContent className="pt-6 flex-grow flex flex-col space-y-6">
                            {selectedExercise.youtubeVideoId && (
                                <div className="mb-6 aspect-video">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src={`https://www.youtube.com/embed/${selectedExercise.youtubeVideoId}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                </div>
                            )}
                            {selectedExercise.detailedExplanation && (
                                <div className="prose dark:prose-invert max-w-none mb-6 p-4 border rounded-lg bg-card/50">
                                    <div dangerouslySetInnerHTML={{ __html: selectedExercise.detailedExplanation }} />
                                </div>
                            )}
                            
                            {selectedPracticeLanguage === 'html' ? (
                                <Tabs defaultValue="editor" className="flex-grow flex flex-col min-h-[450px]">
                                    <TabsList className="grid w-full grid-cols-2 max-w-sm">
                                        <TabsTrigger value="editor"><PencilRuler className="mr-2 h-4 w-4" />Editor</TabsTrigger>
                                        <TabsTrigger value="preview"><BookOpen className="mr-2 h-4 w-4" />Preview</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="editor" className="flex-grow mt-4 rounded-md border overflow-hidden">
                                        <Editor
                                            height="100%"
                                            language='html'
                                            theme="vs-dark"
                                            value={code}
                                            onChange={(value) => setCode(value || '')}
                                            options={{ minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false, automaticLayout: true }}
                                        />
                                    </TabsContent>
                                    <TabsContent value="preview" className="flex-grow mt-4">
                                        <iframe
                                            srcDoc={htmlSrcDoc}
                                            title="Preview"
                                            sandbox="allow-scripts"
                                            className="w-full h-full border rounded-md bg-white"
                                        />
                                    </TabsContent>
                                </Tabs>
                            ) : (
                                <div className="flex-grow flex flex-col space-y-4 min-h-[350px]">
                                    <div>
                                        <h3 className="font-semibold text-lg">Sua Solução</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Use o editor de código Monaco abaixo para escrever sua solução na linguagem selecionada.
                                        </p>
                                    </div>
                                    <div className="flex-grow border rounded-md overflow-hidden">
                                        <Editor
                                            height="100%"
                                            language={selectedPracticeLanguage || 'plaintext'}
                                            theme="vs-dark"
                                            value={code}
                                            onChange={(value) => setCode(value || '')}
                                            options={{ minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false, automaticLayout: true }}
                                            className="h-full"
                                        />
                                    </div>
                                </div>
                            )}

                            {consoleOutput.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="font-semibold text-lg mb-2">Saída do Console</h3>
                                    <pre className="bg-muted rounded-md p-4 text-sm text-foreground overflow-x-auto">
                                        <code>
                                            {consoleOutput.join('\n')}
                                        </code>
                                    </pre>
                                </div>
                            )}

                            {testResults.length > 0 && (
                              <div className="mt-6">
                                  <h3 className="font-semibold text-lg mb-2">Resultados dos Testes</h3>
                                  <div className="space-y-2">
                                      {testResults.map((result, index) => (
                                          <div key={index} className={`flex items-center p-3 rounded-md text-sm ${result.passed ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'}`}>
                                              {result.passed ? (
                                                  <CheckCircle className="w-5 h-5 mr-3 text-green-600 dark:text-green-400 shrink-0" />
                                              ) : (
                                                  <XCircle className="w-5 h-5 mr-3 text-red-600 dark:text-red-400 shrink-0" />
                                              )}
                                              <div className="flex-1">
                                                <p className="font-medium">{result.description}</p>
                                                {result.error && <p className="text-xs mt-1 text-red-700 dark:text-red-300">Erro: {result.error}</p>}
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                            )}

                            <div className="pt-4 flex justify-end gap-4">
                                <Button variant="secondary" onClick={handleRunTests}>Executar Testes</Button>
                                <Button>Submeter</Button>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <OverviewComponent 
                      title={`Exercícios de ${area.title}`} 
                      description={`Escolha uma linguagem e selecione um exercício para começar a praticar.`}
                      cta="Clique no menu 'Ver Exercícios' acima para começar."
                    />
                )}
            </div>
        </div>
    );
  };

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

    