
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, ScrollText, ShieldCheck, Scale } from "lucide-react";

export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8 gap-2 rounded-full">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>

        <header className="mb-12 space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-headline font-bold tracking-tight">Termos de Serviço</h1>
          <p className="text-muted-foreground italic">Última atualização: Fevereiro de 2024</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-primary">01.</span> Aceitação dos Termos
            </h2>
            <p>Ao aceder à plataforma Codworks Moz, o utilizador concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se não concordar com algum destes termos, está proibido de usar ou aceder a este site.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-primary">02.</span> Licença de Uso
            </h2>
            <p>É concedida permissão para descarregar temporariamente uma cópia dos materiais (informações ou software) no site Codworks Moz , apenas para visualização transitória pessoal e não comercial.</p>
            <p>Esta licença não permite:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Modificar ou copiar os materiais de currículo;</li>
              <li>Usar os materiais para qualquer finalidade comercial;</li>
              <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
              <li>Remover quaisquer direitos de autor ou outras notações de propriedade dos materiais.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-primary">03.</span> Isenção de Responsabilidade
            </h2>
            <p>Os materiais no site da Codworks Moz são fornecidos 'como estão'. A Codworks Moz não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-primary">04.</span> Limitações
            </h2>
            <p>Em nenhum caso a Codworks Moz ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais na plataforma.</p>
          </section>

          <section className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10 mt-12">
            <p className="text-center font-bold text-primary">Dúvidas sobre os nossos termos? Entre em contacto com o suporte em legal@codworks.mz</p>
          </section>
        </div>
      </main>
    </div>
  );
}
