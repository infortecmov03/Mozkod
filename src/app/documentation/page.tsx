"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Book, Code, GraduationCap, Shield, Terminal, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocumentationPage() {
  const router = useRouter();

  const sections = [
    {
      title: "O Currículo Híbrido",
      icon: Code,
      content: "A Codworks Moz utiliza uma arquitetura híbrida onde o conteúdo pedagógico reside em ficheiros estáticos versionados (Git), garantindo performance e integridade, enquanto o progresso é sincronizado em tempo real com o Supabase."
    },
    {
      title: "Níveis de Engenharia",
      icon: GraduationCap,
      content: "Nossa jornada está dividida em 8 níveis. Dos fundamentos de Ciência da Computação (Nível 1) até ao domínio profundo de linguagens específicas como Rust e Go (Nível 8)."
    },
    {
      title: "Laboratórios e Validação",
      icon: Terminal,
      content: "Cada laboratório prático possui um motor de validação que verifica o teu código em tempo real. No Nível 8, implementamos a 'Herança de Projeto', onde o código da aula anterior é a base da aula seguinte."
    },
    {
      title: "Certificação e Verificação",
      icon: Shield,
      content: "Ao completar um nível, é emitido um certificado digital com um ID de verificação único. Este ID permite que empresas validem as tuas competências diretamente na nossa infraestrutura."
    },
    {
      title: "Comunidade e Ajuda",
      icon: Users,
      content: "Integrado em cada exercício, existe um fórum específico. Se tiveres dúvidas técnicas, podes publicar um pedido de ajuda que será respondido por outros engenheiros da elite."
    }
  ];

  return (
    <div className="flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl flex-1">
        <Button 
          variant="ghost" 
          onClick={() => router.back()} 
          className="mb-8 gap-2 rounded-full hover:bg-secondary"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>

        <header className="mb-16 space-y-4">
          <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-2xl border border-primary/20">
            <Book className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-headline font-bold tracking-tight">Documentação Técnica</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Entenda como funciona o motor de aprendizagem da plataforma de engenharia mais avançada de Moçambique.
          </p>
        </header>

        <div className="grid gap-8 mb-20">
          {sections.map((section, idx) => (
            <Card key={idx} className="bg-card/40 border-white/5 rounded-[2rem] overflow-hidden shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <section.icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-2xl font-headline">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
