'use client';

import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { useToast } from "@/hooks/use-toast";

export default function CadastroPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp, signInWithGithub } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
      });
      return;
    }
    setLoading(true);
    const { error } = await signUp(name, email, password);
    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao criar conta.",
        description: error.message || "Verifique os dados ou o email pode já estar em uso.",
      });
    } else {
        toast({
            title: "Conta criada com sucesso!",
            description: "Enviamos um email de confirmação para você.",
        });
    }
    setLoading(false);
  };
  
   const handleGithubLogin = async () => {
    setLoading(true);
    await signInWithGithub();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
       <div className="absolute left-4 top-4">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Home
          </Link>
        </Button>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="mb-4 flex justify-center">
             <Logo />
          </div>
          <CardTitle className="text-2xl font-headline">Crie sua conta</CardTitle>
          <CardDescription>
            Comece sua jornada de aprendizado em programação hoje.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" placeholder="Seu nome completo" required value={name} onChange={(e) => setName(e.target.value)} disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="nome@exemplo.com" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Aguarde...' : 'Criar conta gratuita'}
            </Button>
          </form>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou cadastre-se com
              </span>
            </div>
          </div>
           <Button variant="outline" className="w-full" onClick={handleGithubLogin} disabled={loading}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
        </CardContent>
         <CardFooter className="justify-center">
            <p className="mt-4 text-center text-sm">
                Já tem uma conta?{" "}
                <Link href="/login" className="underline">
                Entrar
                </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
