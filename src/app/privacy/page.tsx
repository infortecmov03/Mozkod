
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Eye, Database } from "lucide-react";

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8 gap-2 rounded-full">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>

        <header className="mb-12 space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-headline font-bold tracking-tight">Política de Privacidade</h1>
          <p className="text-muted-foreground italic">Sua privacidade é a nossa prioridade de engenharia.</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-green-500 mb-2">
              <Database className="w-5 h-5" />
              <h2 className="text-2xl font-bold m-0">Recolha de Dados</h2>
            </div>
            <p>Recolhemos apenas as informações necessárias para fornecer e melhorar o nosso serviço de aprendizagem. Isto inclui:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Informações de Conta:</strong> Email e nome fornecidos no registro.</li>
              <li><strong>Dados de Progresso:</strong> Lições completadas, pontuações de quiz e código submetido.</li>
              <li><strong>Logs Técnicos:</strong> Endereço IP e tipo de browser para segurança e diagnósticos.</li>
            </ul>
          </section>

          <section className="space-y-4">
             <div className="flex items-center gap-3 text-green-500 mb-2">
              <Eye className="w-5 h-5" />
              <h2 className="text-2xl font-bold m-0">Uso das Informações</h2>
            </div>
            <p>As suas informações são utilizadas estritamente para:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Personalizar a sua experiência de aprendizagem;</li>
              <li>Gerar os seus certificados de conclusão;</li>
              <li>Manter a segurança da plataforma contra abusos;</li>
              <li>Comunicar atualizações críticas do currículo.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Segurança dos Dados</h2>
            <p>Implementamos medidas de segurança de nível industrial para proteger os seus dados contra acesso não autorizado, alteração ou destruição. O seu código e dados pessoais são encriptados e armazenados em infraestrutura segura (Supabase/Firebase).</p>
          </section>

          <section className="space-y-4 border-l-4 border-green-500 pl-6 py-2 bg-green-500/5">
            <h2 className="text-xl font-bold">Os Seus Direitos</h2>
            <p>Você tem o direito de aceder, corrigir ou apagar os seus dados pessoais a qualquer momento através das definições de perfil ou contactando a nossa equipa.</p>
          </section>

          <div className="text-center pt-10 text-xs text-muted-foreground">
            © 2024 Codworks Moz. <br/> Respeitamos a lei moçambicana de proteção de dados.
          </div>
        </div>
      </main>
    </div>
  );
}
