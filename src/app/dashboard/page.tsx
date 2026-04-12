'use client';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Redirect if not authenticated after component has mounted
    if (isMounted && !user) {
      router.push('/login');
    }
  }, [user, isMounted, router]);

  if (!isMounted || !user) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <p className="text-muted-foreground">A carregar...</p>
        </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">
            Bem-vindo de volta, <span className="text-primary">{user.name.split(' ')[0]}!</span>
            </h1>
            <p className="text-muted-foreground mt-2">Continue de onde parou e explore novos desafios.</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Seu Painel de Aprendizagem</CardTitle>
             <CardDescription>A sua jornada de programação começa aqui.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                <BookOpen className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comece a sua primeira lição</h3>
                <p className="text-muted-foreground mb-4 max-w-sm">
                    Ainda não há progresso. Explore nosso currículo e comece a aprender hoje mesmo.
                </p>
                <Button asChild>
                  <Link href="/curriculo">Explorar Currículo</Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
