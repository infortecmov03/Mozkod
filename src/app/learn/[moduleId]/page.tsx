
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, BookOpen, Lightbulb, Play, Send, ChevronLeft, ChevronRight, CheckCircle, Info } from "lucide-react";
import { modules, Module, Lesson } from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export default function LearnPage() {
  const { moduleId } = useParams();
  const router = useRouter();
  const { toast } = useToast();
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

  if (!module) return <div>Module not found</div>;

  const currentLesson = module.lessons[currentLessonIndex];
  const progress = ((currentLessonIndex + 1) / module.lessons.length) * 100;

  const handleRunCode = () => {
    setIsCompiling(true);
    setOutput("");
    // Simulate execution
    setTimeout(() => {
      setIsCompiling(false);
      setOutput("Running simulated code...\nResult: 15\nTests passed: 5/5");
    }, 1200);
  };

  const handleNext = () => {
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      toast({
        title: "Module Complete!",
        description: "Great job! You've finished this module.",
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
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <Navigation />
      
      {/* Module Header */}
      <div className="bg-card/50 border-b px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')}>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Exit
          </Button>
          <div className="h-6 w-px bg-border" />
          <h2 className="font-headline font-bold text-lg">{module.title}</h2>
        </div>
        <div className="flex items-center gap-6 flex-1 max-w-md mx-10">
          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
            Lesson {currentLessonIndex + 1} of {module.lessons.length}
          </span>
          <Progress value={progress} className="h-1.5" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handlePrev} disabled={currentLessonIndex === 0}>
            Previous
          </Button>
          <Button size="sm" onClick={handleNext}>
            {currentLessonIndex === module.lessons.length - 1 ? 'Finish' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Pane: Theory/Content */}
        <div className="w-1/2 overflow-y-auto border-r p-8 scrollbar-thin">
          <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                {currentLesson.type === 'theory' ? <BookOpen className="w-3 h-3" /> : <Terminal className="w-3 h-3" />}
                {currentLesson.type}
              </div>
              <h1 className="font-headline text-4xl font-bold leading-tight">{currentLesson.title}</h1>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentLesson.content}
              </p>
              
              <div className="my-8 p-6 rounded-2xl bg-secondary/50 border border-primary/20 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary mb-1">Key Concept</h4>
                  <p className="text-sm text-muted-foreground">
                    Remember that complexity analysis helps us compare algorithms beyond just the speed of execution on a single machine.
                  </p>
                </div>
              </div>

              {currentLesson.type === 'theory' && (
                <div className="space-y-4 mt-8">
                  <h3 className="font-headline text-xl font-bold">Check your understanding</h3>
                  <div className="grid gap-4">
                    {['A deterministic approach', 'A random guess', 'A physical device'].map((opt, i) => (
                      <Button key={i} variant="outline" className="justify-start h-auto py-4 px-6 text-left hover:border-primary">
                        <span className="w-6 h-6 rounded-full border border-muted-foreground/30 flex items-center justify-center mr-4 text-xs">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Pane: Code Editor */}
        <div className="w-1/2 flex flex-col bg-[#16191d] overflow-hidden">
          <Tabs defaultValue="editor" className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 h-12 bg-card/30 border-b">
              <TabsList className="bg-transparent h-auto p-0 gap-4">
                <TabsTrigger value="editor" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-0 py-2 font-medium">
                  Editor
                </TabsTrigger>
                <TabsTrigger value="instructions" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-0 py-2 font-medium">
                  Instructions
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-muted-foreground mr-2">{currentLesson.language || 'Plain Text'}</span>
                <Button size="sm" variant="ghost" className="h-8 px-2 hover:bg-white/5">
                  <Info className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="editor" className="flex-1 flex flex-col m-0 overflow-hidden">
              <div className="flex-1 p-6 relative group overflow-hidden">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full bg-transparent font-code text-sm resize-none outline-none text-blue-400 leading-relaxed code-editor-scrollbar"
                  spellCheck={false}
                />
              </div>

              {/* Console / Output */}
              <div className="h-1/3 border-t bg-black/40 p-4 font-code text-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-muted-foreground flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    Console Output
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={handleRunCode} 
                      disabled={isCompiling}
                      className="h-8 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold"
                    >
                      {isCompiling ? 'Running...' : 'Run Code'}
                      {!isCompiling && <Play className="w-3 h-3 ml-2 fill-current" />}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 rounded-full border-primary text-primary hover:bg-primary/10"
                    >
                      Submit
                      <Send className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="text-muted-foreground h-[calc(100%-2rem)] overflow-y-auto whitespace-pre">
                  {output || "No output yet. Click 'Run Code' to execute."}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructions" className="flex-1 p-8 m-0 overflow-y-auto">
              <h3 className="font-headline text-xl font-bold mb-4">Objective</h3>
              <p className="text-muted-foreground mb-6">
                Your task is to implement a robust solution that handles the core logic for the algorithm described in the theory pane.
              </p>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider">Constraints:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li>Time complexity must be O(n)</li>
                  <li>Space complexity should be O(1)</li>
                  <li>Ensure input validation for negative numbers</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
