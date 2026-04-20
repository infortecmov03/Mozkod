
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, BookOpen, Lightbulb, Play, Send, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { modules } from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageContext";

export default function LearnPage() {
  const { moduleId } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const module = modules.find(m => m.id === moduleId);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);

  useEffect(() => {
    if (module?.lessons[currentLessonIndex]?.code) {
      setCode(module.lessons[currentLessonIndex].code!);
    }
  }, [currentLessonIndex, module]);

  if (!module) return <div className="p-8 text-center">Module not found</div>;

  const currentLesson = module.lessons[currentLessonIndex];
  const progress = ((currentLessonIndex + 1) / module.lessons.length) * 100;

  const handleRunCode = () => {
    setIsCompiling(true);
    setOutput("");
    setTimeout(() => {
      setIsCompiling(false);
      setOutput("Executando código simulado...\nResultado: 15\nTestes passados: 5/5");
    }, 1200);
  };

  const handleNext = () => {
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      toast({
        title: "Módulo Concluído!",
        description: "Excelente trabalho! Você terminou este módulo.",
      });
      router.push("/dashboard");
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Navigation />
      
      {/* Module Header - Responsive */}
      <div className="bg-card/50 border-b px-4 py-3 flex flex-col md:flex-row items-center gap-4 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')}>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Sair
          </Button>
          <h2 className="font-headline font-bold text-sm md:text-lg truncate max-w-[150px] md:max-w-none">
            {module.title}
          </h2>
        </div>
        
        <div className="flex items-center gap-4 flex-1 w-full md:mx-10">
          <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap hidden sm:inline">
            Aula {currentLessonIndex + 1} de {module.lessons.length}
          </span>
          <Progress value={progress} className="h-1.5" />
        </div>

        <div className="flex gap-2 w-full md:w-auto justify-between md:justify-end">
          <Button variant="outline" size="sm" onClick={handlePrev} disabled={currentLessonIndex === 0} className="flex-1 md:flex-none">
            Anterior
          </Button>
          <Button size="sm" onClick={handleNext} className="flex-1 md:flex-none">
            {currentLessonIndex === module.lessons.length - 1 ? 'Terminar' : 'Próximo'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Theory/Content Pane */}
        <div className="w-full md:w-1/2 overflow-y-auto border-r p-4 md:p-8">
          <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                {currentLesson.type === 'theory' ? <BookOpen className="w-3 h-3" /> : <Terminal className="w-3 h-3" />}
                {currentLesson.type === 'theory' ? t.theory : t.practice}
              </div>
              <h1 className="font-headline text-2xl md:text-4xl font-bold leading-tight">{currentLesson.title}</h1>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {currentLesson.content}
              </p>
              
              <div className="my-6 md:my-8 p-4 md:p-6 rounded-2xl bg-secondary/50 border border-primary/20 flex gap-4">
                <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary mb-1 text-sm md:text-base">Conceito Chave</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    A análise de complexidade ajuda-nos a comparar algoritmos além da velocidade de execução numa única máquina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editor Pane - Hidden/Stacked on mobile depending on context, or using Tabs for mobile switcher */}
        <div className="w-full md:w-1/2 flex flex-col bg-[#16191d] overflow-hidden border-t md:border-t-0">
          <Tabs defaultValue="editor" className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 h-12 bg-card/30 border-b shrink-0">
              <TabsList className="bg-transparent h-auto p-0 gap-4">
                <TabsTrigger value="editor" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-0 py-2 font-medium text-xs">
                  Editor
                </TabsTrigger>
                <TabsTrigger value="instructions" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-0 py-2 font-medium text-xs">
                  Instruções
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-muted-foreground hidden sm:inline">{currentLesson.language || 'Texto'}</span>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Info className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="editor" className="flex-1 flex flex-col m-0 overflow-hidden">
              <div className="flex-1 p-4 relative overflow-hidden">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full bg-transparent font-code text-xs md:text-sm resize-none outline-none text-blue-400 leading-relaxed code-editor-scrollbar"
                  spellCheck={false}
                />
              </div>

              {/* Console Output */}
              <div className="h-48 md:h-1/3 border-t bg-black/40 p-4 font-code text-[10px] md:text-sm shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    Consola
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={handleRunCode} 
                      disabled={isCompiling}
                      className="h-7 md:h-8 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-[10px] md:text-xs"
                    >
                      {isCompiling ? 'A processar...' : t.runCode}
                      {!isCompiling && <Play className="w-3 h-3 ml-2 fill-current" />}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-7 md:h-8 rounded-full border-primary text-primary hover:bg-primary/10 text-[10px] md:text-xs"
                    >
                      {t.submit}
                      <Send className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="text-muted-foreground h-[calc(100%-2.5rem)] overflow-y-auto whitespace-pre font-mono">
                  {output || "Sem output. Clique em 'Executar Código'."}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructions" className="flex-1 p-6 md:p-8 m-0 overflow-y-auto">
              <h3 className="font-headline text-lg md:text-xl font-bold mb-4">Objetivo</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Sua tarefa é implementar uma solução robusta que lide com a lógica principal do algoritmo descrito na teoria.
              </p>
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider">Restrições:</h4>
                <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground space-y-2">
                  <li>Complexidade de tempo deve ser O(n)</li>
                  <li>Espaço deve ser O(1)</li>
                  <li>Validação para números negativos</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
