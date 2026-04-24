
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

  useEffect(() => {
    if (view === 'preview' && iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        // Injetamos um CSS de "Wireframe Técnico" que destaca a semântica sem mascarar com design
        doc.write(`
          <html>
            <head>
              <style>
                * { box-sizing: border-box; }
                body { 
                  font-family: system-ui, -apple-system, sans-serif; 
                  margin: 0; padding: 10px; 
                  background: #f8fafc; color: #1e293b;
                  line-height: 1.5;
                }
                
                /* Highlighting Semantic Tags with Labels */
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
                  font-size: 9px;
                  font-weight: bold;
                  padding: 2px 6px;
                  border-radius: 6px 0 6px 0;
                  text-transform: uppercase;
                }

                h1, h2, h3 { margin-top: 0; color: #0f172a; }
                p { margin-bottom: 0.5rem; }
                code { background: #f1f5f9; padding: 2px 4px; border-radius: 4px; font-family: monospace; }
                
                /* Reset browser margins for labels */
                header { --tag: "header"; }
                nav { --tag: "nav"; }
                main { --tag: "main"; }
                footer { --tag: "footer"; }
                section { --tag: "section"; }
                article { --tag: "article"; }
                aside { --tag: "aside"; }

                /* Pseudo-dynamic labels using pure CSS attributes if not present */
                header:not([data-tag-name])::before { content: "header"; }
                nav:not([data-tag-name])::before { content: "nav"; }
                main:not([data-tag-name])::before { content: "main"; }
                footer:not([data-tag-name])::before { content: "footer"; }
                section:not([data-tag-name])::before { content: "section"; }
                article:not([data-tag-name])::before { content: "article"; }
                aside:not([data-tag-name])::before { content: "aside"; }
              </style>
            </head>
            <body>${code}</body>
          </html>
        `);
        doc.close();
      }
    }
  }, [view, code]);

  return (
    <div className="my-8 rounded-[2rem] overflow-hidden border border-white/10 bg-black/20 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <Button 
            variant={view === 'code' ? 'secondary' : 'ghost'} 
            size="sm" 
            className="h-8 rounded-full text-[10px] font-black uppercase px-4"
            onClick={() => setView('code')}
          >
            <CodeIcon className="w-3 h-3 mr-1.5" /> Código
          </Button>
          {language === 'html' && (
            <Button 
              variant={view === 'preview' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="h-8 rounded-full text-[10px] font-black uppercase px-4"
              onClick={() => setView('preview')}
            >
              <Eye className="w-3 h-3 mr-1.5" /> Preview
            </Button>
          )}
        </div>
        
        {view === 'preview' && (
          <div className="flex bg-black/40 rounded-full p-1 border border-white/10">
            <button 
              onClick={() => setIsMobileSim(true)}
              className={cn("p-1.5 rounded-full transition-colors", isMobileSim ? "bg-primary text-white" : "text-muted-foreground")}
            >
              <Smartphone className="w-3 h-3" />
            </button>
            <button 
              onClick={() => setIsMobileSim(false)}
              className={cn("p-1.5 rounded-full transition-colors", !isMobileSim ? "bg-primary text-white" : "text-muted-foreground")}
            >
              <Laptop className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
      
      <div className="relative overflow-hidden bg-[#0d1117]">
        {view === 'code' ? (
          <div className="p-4 md:p-6 overflow-x-auto custom-scrollbar">
            <pre className="m-0 leading-relaxed text-[11px] md:text-xs">
              <code className="block whitespace-pre font-mono">
                {code.split('\n').map((line, i) => {
                  let highlighted = line
                    .replace(/(&lt;[a-zA-Z1-6]+|&lt;\/[a-zA-Z1-6]+)/g, '<span class="code-tag">$1</span>')
                    .replace(/(\s[a-zA-Z-]+(?==))/g, ' <span class="code-attr">$1</span>')
                    .replace(/(".*?")/g, '<span class="code-string">$1</span>')
                    .replace(/(&lt;!--.*?--&gt;)/g, '<span class="code-comment">$1</span>');
                  
                  return (
                    <div key={i} dangerouslySetInnerHTML={{ __html: highlighted || ' ' }} />
                  );
                })}
              </code>
            </pre>
          </div>
        ) : (
          <div className={cn(
            "flex justify-center bg-[#f1f5f9] transition-all duration-500 py-8 px-4",
            isMobileSim ? "items-center" : "items-start"
          )}>
            <div className={cn(
              "bg-white shadow-2xl transition-all duration-500 overflow-hidden border-[8px] border-[#1e293b] rounded-[2.5rem]",
              isMobileSim ? "w-[280px] h-[500px]" : "w-full max-w-4xl h-[400px] rounded-t-xl border-b-0"
            )}>
               <div className="h-6 bg-[#1e293b] flex items-center justify-center gap-1">
                  <div className="w-10 h-1 bg-white/20 rounded-full" />
               </div>
               <iframe ref={iframeRef} className="w-full h-full border-none" title="Live Preview" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
