
'use client';

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Code as CodeIcon, Smartphone, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveCodeBlockProps {
  code: string;
  language: string;
}

export function InteractiveCodeBlock({ code, language }: InteractiveCodeBlockProps) {
  const [view, setView] = useState<'code' | 'preview'>('code');
  const [isMobileSim, setIsMobileSim] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Limpa o código para o iframe (remove escapes para execução real)
  const cleanCode = code
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

  useEffect(() => {
    if (view === 'preview' && iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        // Injetamos um CSS de "Wireframe Técnico" que destaca a semântica
        doc.write(`
          <html>
            <head>
              <style>
                * { box-sizing: border-box; }
                body { 
                  font-family: system-ui, -apple-system, sans-serif; 
                  margin: 0; padding: 15px; 
                  background: #f8fafc; color: #1e293b;
                  line-height: 1.5;
                  overflow-x: hidden;
                }
                
                header, nav, main, article, section, footer, aside {
                  border: 2px dashed #cbd5e1;
                  padding: 1.5rem 1rem 1rem 1rem;
                  margin-bottom: 1rem;
                  position: relative;
                  background: white;
                  border-radius: 8px;
                }

                header::before, nav::before, main::before, article::before, 
                section::before, footer::before, aside::before {
                  content: attr(data-tag-name);
                  position: absolute;
                  top: 0; left: 0;
                  background: #64748b;
                  color: white;
                  font-size: 8px;
                  font-weight: bold;
                  padding: 2px 5px;
                  border-radius: 6px 0 6px 0;
                  text-transform: uppercase;
                }

                h1, h2, h3 { margin-top: 0; color: #0f172a; word-break: break-word; }
                p { margin-bottom: 0.5rem; word-break: break-word; }
                
                header:not([data-tag-name])::before { content: "header"; }
                nav:not([data-tag-name])::before { content: "nav"; }
                main:not([data-tag-name])::before { content: "main"; }
                footer:not([data-tag-name])::before { content: "footer"; }
                section:not([data-tag-name])::before { content: "section"; }
                article:not([data-tag-name])::before { content: "article"; }
                aside:not([data-tag-name])::before { content: "aside"; }
              </style>
            </head>
            <body>${cleanCode}</body>
          </html>
        `);
        doc.close();
      }
    }
  }, [view, cleanCode]);

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl max-w-full">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <Button 
            variant={view === 'code' ? 'secondary' : 'ghost'} 
            size="sm" 
            className="h-7 rounded-full text-[9px] font-black uppercase px-3"
            onClick={() => setView('code')}
          >
            <CodeIcon className="w-3 h-3 mr-1" /> Código
          </Button>
          {language === 'html' && (
            <Button 
              variant={view === 'preview' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="h-7 rounded-full text-[9px] font-black uppercase px-3"
              onClick={() => setView('preview')}
            >
              <Eye className="w-3 h-3 mr-1" /> Preview
            </Button>
          )}
        </div>
        
        {view === 'preview' && (
          <div className="flex bg-black/40 rounded-full p-0.5 border border-white/5">
            <button 
              onClick={() => setIsMobileSim(true)}
              className={cn("p-1 rounded-full transition-colors", isMobileSim ? "bg-primary text-white shadow-sm" : "text-muted-foreground")}
            >
              <Smartphone className="w-3 h-3" />
            </button>
            <button 
              onClick={() => setIsMobileSim(false)}
              className={cn("p-1 rounded-full transition-colors", !isMobileSim ? "bg-primary text-white shadow-sm" : "text-muted-foreground")}
            >
              <Laptop className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
      
      <div className="relative overflow-hidden bg-[#0d1117]">
        {view === 'code' ? (
          <div className="p-4 overflow-x-auto custom-scrollbar">
            <pre className="m-0 leading-relaxed text-[11px] font-mono scroll-smooth">
              <code className="block whitespace-pre">
                {code.split('\n').map((line, i) => {
                  let highlighted = line
                    .replace(/(&lt;[a-zA-Z1-6!/]+|&lt;\/[a-zA-Z1-6]+)/g, '<span class="code-tag">$1</span>')
                    .replace(/(\s[a-zA-Z-]+(?==))/g, ' <span class="code-attr">$1</span>')
                    .replace(/(".*?")/g, '<span class="code-string">$1</span>')
                    .replace(/(&lt;!--.*?--&gt;)/g, '<span class="code-comment">$1</span>');
                  
                  return (
                    <div key={i} className="min-w-fit" dangerouslySetInnerHTML={{ __html: highlighted || ' ' }} />
                  );
                })}
              </code>
            </pre>
          </div>
        ) : (
          <div className={cn(
            "flex justify-center bg-[#f1f5f9] transition-all duration-300 py-6 px-2 overflow-hidden",
            isMobileSim ? "items-center" : "items-start"
          )}>
            <div className={cn(
              "bg-white shadow-2xl transition-all duration-500 overflow-hidden border-[6px] border-[#1e293b] relative",
              isMobileSim ? "w-[280px] h-[450px] rounded-[2rem]" : "w-full max-w-4xl h-[350px] rounded-t-lg border-b-0"
            )}>
               <div className="h-4 bg-[#1e293b] flex items-center justify-center gap-1 shrink-0">
                  <div className="w-8 h-1 bg-white/10 rounded-full" />
               </div>
               <iframe ref={iframeRef} className="w-full h-full border-none bg-white" title="Live Interaction View" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
