'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Code2, Eye, Smartphone, Laptop, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveCodeBlockProps {
  code: string;
  language: string;
}

export function InteractiveCodeBlock({ code, language }: InteractiveCodeBlockProps) {
  const [view, setView] = useState<'code' | 'preview'>('code');
  const [device, setDevice] = useState<'phone' | 'laptop'>('phone');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Função para realçar sintaxe de forma nativa e profissional
  const highlightCode = (rawCode: string) => {
    let highlighted = rawCode
      .replace(/&lt;(!DOCTYPE html|html|head|body|title|meta|link|style|script|header|nav|main|article|aside|section|footer|h1|h2|h3|h4|h5|h6|p|span|br|strong|em|ul|ol|li|a|img|form|label|input|button|textarea|select|option|video|audio|track|canvas|div|svg|circle|rect|path|g)&gt;/g, '<span class="code-tag">&lt;$1&gt;</span>')
      .replace(/&lt;\/(!DOCTYPE html|html|head|body|title|meta|link|style|script|header|nav|main|article|aside|section|footer|h1|h2|h3|h4|h5|h6|p|span|br|strong|em|ul|ol|li|a|img|form|label|input|button|textarea|select|option|video|audio|track|canvas|div|svg|circle|rect|path|g)&gt;/g, '<span class="code-tag">&lt;/$1&gt;</span>')
      .replace(/(\w+)="/g, '<span class="code-attr">$1</span>="')
      .replace(/"([^"]*)"/g, '"<span class="code-string">$1</span>"')
      .replace(/&lt;!--([\s\S]*?)--&gt;/g, '<span class="code-comment">&lt;!--$1--&gt;</span>');
    
    return highlighted;
  };

  useEffect(() => {
    if (view === 'preview' && iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (!doc) return;

      // Simulação de Erros e Wireframe
      const hasViewport = code.includes('name="viewport"');
      const hasCharset = code.includes('charset="UTF-8"');
      
      let finalCode = code.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      
      // Simulação de erro de Charset
      if (!hasCharset) {
        finalCode = finalCode.replace(/Configuração/g, 'ConfiguraÃ§Ã£o').replace(/Acentuação/g, 'AcentuaÃ§Ã£o');
      }

      const wireframeStyles = `
        <style>
          * { box-sizing: border-box; }
          body { 
            margin: 0; 
            padding: 15px; 
            font-family: sans-serif; 
            background: #fff;
            ${!hasViewport && device === 'phone' ? 'width: 980px; transform: scale(0.28); transform-origin: top left;' : ''}
          }
          header, nav, main, footer, section, article, aside {
            border: 2px dashed #3b82f6;
            margin: 5px 0;
            padding: 10px;
            position: relative;
          }
          header::before, nav::before, main::before, footer::before, section::before, article::before, aside::before {
            content: attr(role) attr(class) " " ;
            position: absolute;
            top: -2px;
            right: -2px;
            background: #3b82f6;
            color: white;
            font-size: 8px;
            padding: 2px 4px;
            font-family: monospace;
            font-weight: bold;
          }
          header::before { content: "HEADER"; }
          nav::before { content: "NAV"; }
          main::before { content: "MAIN"; }
          footer::before { content: "FOOTER"; }
          section::before { content: "SECTION"; }
          article::before { content: "ARTICLE"; }
          aside::before { content: "ASIDE"; }
          div { border: 1px solid #ddd; padding: 5px; margin: 2px 0; }
          h1, h2, h3 { margin-top: 0; color: #1a202c; }
          p { color: #4a5568; line-height: 1.5; }
        </style>
      `;

      doc.open();
      doc.write(finalCode + wireframeStyles);
      doc.close();
    }
  }, [view, device, code]);

  return (
    <div className="my-6 border border-white/10 rounded-2xl overflow-hidden bg-[#0d1117] shadow-2xl">
      <div className="flex items-center justify-between px-4 h-12 bg-black/40 border-b border-white/5">
        <div className="flex gap-2">
          <Button 
            variant={view === 'code' ? 'secondary' : 'ghost'} 
            size="sm" 
            onClick={() => setView('code')}
            className="h-8 text-[10px] font-black uppercase tracking-widest gap-2"
          >
            <Code2 className="w-3.5 h-3.5" /> Código
          </Button>
          <Button 
            variant={view === 'preview' ? 'secondary' : 'ghost'} 
            size="sm" 
            onClick={() => setView('preview')}
            className="h-8 text-[10px] font-black uppercase tracking-widest gap-2"
          >
            <Eye className="w-3.5 h-3.5" /> Visualizar
          </Button>
        </div>

        {view === 'preview' && (
          <div className="flex gap-1 bg-background/40 p-1 rounded-lg">
            <Button 
              variant={device === 'phone' ? 'secondary' : 'ghost'} 
              size="icon" 
              onClick={() => setDevice('phone')}
              className="h-7 w-7 rounded-md"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </Button>
            <Button 
              variant={device === 'laptop' ? 'secondary' : 'ghost'} 
              size="icon" 
              onClick={() => setDevice('laptop')}
              className="h-7 w-7 rounded-md"
            >
              <Laptop className="w-3.5 h-3.5" />
            </Button>
          </div>
        )}
      </div>

      <div className="relative min-h-[200px]">
        {view === 'code' ? (
          <div className="p-6 overflow-x-auto scroll-container max-w-full">
            <pre className="font-code text-xs md:text-sm leading-relaxed text-blue-100/90 whitespace-pre selection:bg-primary/30">
              <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
            </pre>
          </div>
        ) : (
          <div className="flex justify-center bg-[#f0f0f0] p-4 md:p-8 min-h-[300px] transition-all">
            <div className={cn(
              "bg-white shadow-2xl transition-all duration-500 overflow-hidden relative",
              device === 'phone' ? "w-[280px] h-[450px] rounded-[2.5rem] border-[8px] border-[#1a1a1a]" : "w-full h-[400px] rounded-lg border-2"
            )}>
              {device === 'phone' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-xl z-10" />
              )}
              <iframe 
                ref={iframeRef} 
                className="w-full h-full border-none" 
                title="Code Preview"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
