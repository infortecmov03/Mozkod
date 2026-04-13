import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function AreasDeConhecimentoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center py-20">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Nossas Áreas de Conhecimento</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conteúdo para esta página será adicionado em breve. Volte mais tarde para ver as novidades!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
