'use client';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BookOpen, Percent, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';
import { Progress } from '@/components/ui/progress';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { totalLessons, completedLessons } = useProgress();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  if (loading || !user) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">
            Bem-vindo de volta, <span className="text-primary">{user.full_name?.split(' ')[0]}!</span>
            </h1>
            <p className="text-muted-foreground mt-2">Continue de onde parou e explore novos desafios.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Seu Painel de Aprendizagem</CardTitle>
              <CardDescription>A sua jornada de programação começa aqui.</CardDescription>
            </CardHeader>
            <CardContent>
              {completedLessons === 0 ? (
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
              ) : (
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold">Continue sua jornada!</h3>
                  <p className="text-muted-foreground text-sm mb-4">Você está indo muito bem. Continue assim!</p>
                  <Button asChild>
                    <Link href="/curriculo">Continuar Aprendendo</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="w-5 h-5" />
                <span>Seu Progresso</span>
              </CardTitle>
               <CardDescription>Total de lições concluídas na plataforma.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progresso Total</span>
                      <span className="text-sm font-bold text-primary">{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Você completou <strong>{completedLessons}</strong> de <strong>{totalLessons}</strong> lições.
                  </div>

                   <Button variant="outline" className="w-full" asChild>
                       <Link href="/curriculo">Ver Currículo</Link>
                   </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
