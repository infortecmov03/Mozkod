'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Send } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { Label } from '@/components/ui/label';

// Mock data for demonstration purposes
const mockComments = [
  {
    id: 1,
    user: { name: 'Carlos Ferreira', avatarFallback: 'CF' },
    timestamp: '2 horas atrás',
    content: 'Estou com dificuldades em entender como usar o operador de módulo (%) para verificar se o número é par. Alguém pode me dar um exemplo mais simples?',
  },
  {
    id: 2,
    user: { name: 'Ana Silva', avatarFallback: 'AS' },
    timestamp: '1 hora atrás',
    content: 'Claro, Carlos! Pense assim: `10 % 2` é 0, porque 10 dividido por 2 não tem resto. Já `11 % 2` é 1, porque sobra 1. Se o resultado for 0, o número é par.',
  },
];

type Comment = {
  id: number;
  user: { name: string; avatarFallback: string; };
  timestamp: string;
  content: string;
}

function ForumContent() {
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');

  const exerciseId = searchParams.get('exerciseId');
  const exerciseTitle = searchParams.get('exerciseTitle');

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    const newCommentObject: Comment = {
      id: Date.now(), // Use a more unique ID
      user: {
        name: user.name || "Anônimo",
        avatarFallback: user.name?.split(' ').map(n => n[0]).join('').substring(0, 2) || 'A',
      },
      timestamp: 'agora mesmo',
      content: newComment,
    };

    setComments([...comments, newCommentObject]);
    setNewComment('');
  };

  if (!exerciseId || !exerciseTitle) {
    return (
      <div className="text-center py-20">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Fórum da Comunidade</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Para ver as discussões, primeiro selecione um exercício e clique no botão "Pedir Ajuda".
        </p>
        <Button asChild className="mt-6">
          <Link href="/curriculo">Explorar Currículo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
        <div className="mb-8 flex items-center justify-between">
            <div>
                <p className="text-sm text-muted-foreground">Fórum de Ajuda</p>
                <h1 className="font-headline text-3xl md:text-4xl font-bold">
                {exerciseTitle}
                </h1>
            </div>
             <Button variant="outline" asChild>
                <Link href="/curriculo">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar ao Currículo
                </Link>
            </Button>
        </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Discussão da Comunidade</CardTitle>
          <CardDescription>
            Veja as dúvidas de outros alunos ou deixe a sua própria pergunta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {comments.length === 0 && (
                <div className="text-center py-10 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">Ainda não há discussões para este exercício.</p>
                    <p className="font-semibold mt-1">Seja o primeiro a pedir ajuda!</p>
                </div>
            )}
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <Avatar>
                  <AvatarFallback>{comment.user.avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{comment.user.name}</p>
                    <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                  </div>
                  <p className="mt-1 text-muted-foreground">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            {user ? (
              <form onSubmit={handlePostComment} className="space-y-4">
                <div className="flex gap-4 items-start">
                    <Avatar>
                        <AvatarFallback>{user.name?.split(' ').map(n => n[0]).join('').substring(0, 2) || 'A'}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <Label htmlFor="comment">Deixe sua dúvida ou contribuição</Label>
                        <Textarea
                            id="comment"
                            placeholder="Descreva sua dificuldade ou compartilhe sua solução..."
                            className="mt-2"
                            rows={4}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={!newComment.trim()}>
                    <Send className="mr-2 h-4 w-4" />
                    Publicar
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground">Você precisa estar logado para postar no fórum.</p>
                <Button asChild variant="link">
                  <Link href={`/login?redirect=/forum?exerciseId=${exerciseId}&exerciseTitle=${encodeURIComponent(exerciseTitle)}`}>Fazer Login</Link>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


export default function ForumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div className="text-center"><p>Carregando fórum...</p></div>}>
          <ForumContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
