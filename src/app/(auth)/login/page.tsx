'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Chrome, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signInWithEmail, signInWithGoogle, signInWithGithub, loading } = useAuth();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMagicLinkSent, setIsMagicLinkSent] = useState(false);

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ 
        variant: "destructive", 
        title: "Email obrigatório", 
        description: "Digite seu email para continuar." 
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await signInWithEmail(email);
      setIsMagicLinkSent(true);
      toast({ 
        title: "Link enviado!", 
        description: `Verifique seu email ${email} para entrar.` 
      });
    } catch (error: any) {
      toast({ 
        variant: "destructive", 
        title: "Erro na autenticação", 
        description: error.message 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-none shadow-2xl bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline font-bold">Codworks <span className="text-primary">Moz</span></CardTitle>
          <CardDescription>Entre na sua conta para continuar aprendendo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isMagicLinkSent ? (
            <div className="text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                <p className="text-primary font-medium">
                  ✉️ Link enviado para <strong>{email}</strong>
                </p>
                <p className="text-sm mt-2 text-muted-foreground">Clique no link no seu email para fazer login.</p>
              </div>
              <Button variant="ghost" onClick={() => setIsMagicLinkSent(false)} className="w-full">
                Tentar outro email
              </Button>
            </div>
          ) : (
            <>
              <form onSubmit={handleMagicLink} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Profissional</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="rounded-xl h-12"
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 rounded-xl font-bold" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
                  Entrar com Magic Link
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 rounded-xl" onClick={signInWithGoogle}>
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" className="h-12 rounded-xl" onClick={signInWithGithub}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </>
          )}

          <p className="text-center text-xs text-muted-foreground">
            Ao continuar, você concorda com os{" "}
            <Link href="#" className="text-primary hover:underline">Termos</Link> e{" "}
            <Link href="#" className="text-primary hover:underline">Privacidade</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
