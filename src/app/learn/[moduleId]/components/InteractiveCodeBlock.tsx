
'use client';

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Code as CodeIcon } from "lucide-react";

interface InteractiveCodeBlockProps {
  code: string;
  language: string;
}

/**
 * @fileOverview Componente especializado para renderizar exemplos de código com Live Preview.
 * Isolado da TheoryView para manter o princípio de Responsabilidade Única.
 */
export function InteractiveCodeBlock({ code, language }: InteractiveCodeBlockProps) {
  const [view, setView] = useState<'code' | 'preview'>('code');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (view === 'preview' && iframeRef.current && language === 'html') {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <html>
            <head>
              <style>
                body { font-family: sans-serif; padding: 20px; color: #333; background: #fff; line-height: 1.6; }
                header { background: #3b82f6; color: white; padding: 1.5rem; border-radius: 1rem; margin-bottom: 1rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
                nav { background: #f8fafc; padding: 1rem; margin-bottom: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0; display: flex; gap: 1rem; }
                nav a { color: #3b82f6; text-decoration: none; font-weight: 600; font-size: 0.875rem; }
                main { border: 2px dashed #cbd5e1; padding: 2rem; min-height: 150px; border-radius: 1rem; background: #fdfdfd; }
                article { margin-bottom: 1.5rem; }
                section { margin-bottom: 1.5rem; padding: 1rem; background: #fff; border: 1px solid #f1f5f9; border-radius: 0.5rem; }
                footer { margin-top: 2rem; padding: 1.5rem; background: #1e293b; color: white; border-radius: 1rem; font-size: 0.75rem; }
                aside { background: #fff7ed; padding: 1rem; border-left: 4px solid #f97316; margin: 1rem 0; border-radius: 0.25rem; font-size: 0.875rem; }
                h1, h2, h3 { margin-top: 0; color: #1e293b; }
                code { background: #f1f5f9; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace; }
              </style>
            </head>
            <body>${code}</body>
          </html>
        `);
        doc.close();
      }
    }
  }, [view, code, language]);

  return (
    <div className="my-8 rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <Button 
            variant={view === 'code' ? 'secondary' : 'ghost'} 
            size="sm" 
            className="h-8 rounded-full text-[10px] font-black uppercase"
            onClick={() => setView('code')}
          >
            <CodeIcon className="w-3 h-3 mr-1.5" /> Código
          </Button>
          {language === 'html' && (
            <Button 
              variant={view === 'preview' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="h-8 rounded-full text-[10px] font-black uppercase"
              onClick={() => setView('preview')}
            >
              <Eye className="w-3 h-3 mr-1.5" /> Visualizar
            </Button>
          )}
        </div>
        <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">{language}</span>
      </div>
      
      <div className="relative min-h-[150px]">
        {view === 'code' ? (
          <pre className="p-6 overflow-x-auto custom-scrollbar bg-transparent m-0">
            <code className="text-xs md:text-sm leading-relaxed block whitespace-pre">
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
        ) : (
          <iframe ref={iframeRef} className="w-full min-h-[350px] bg-white border-none" title="Code Preview" />
        )}
      </div>
    </div>
  );
}
