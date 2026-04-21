"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { useLanguage } from "@/components/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Zap, Star, Trophy, Calendar, MapPin, Edit2, Loader2, 
  MessageSquare, Award, ShieldCheck, Flame, Lock, 
  Fingerprint, Github, Chrome, Bell, LogOut, Trash2
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { modules } from "@/lib/curriculum";
import { useMemo, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { user, profile, loading: authLoading, signOut, unlinkIdentity } = useAuth();
  const { progress, loading: progressLoading } = useProgress();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const completedLessons = useMemo(() => progress.filter(p => p.completed).length, [progress]);
  
  const level1Total = useMemo(() => {
    let total = 0;
    const l1 = modules.find(m => m.id === 1);
    l1?.knowledgeAreas.forEach(ka => {
      total += (ka.theory?.length || 0);
      if (ka.practice) {
        Object.values(ka.practice).forEach(list => total += list.length);
      }
    });
    return total || 147;
  }, []);

  const completedInL1 = useMemo(() => {
    return progress.filter(p => p.level_id === 1 && p.completed).length;
  }, [progress]);

  const identities = useMemo(() => {
    return user?.identities || [];
  }, [user]);

  const hasMFA = useMemo(() => {
    // Verificação simplificada - Supabase guarda em user.factors se habilitado
    return (user as any)?.factors?.length > 0;
  }, [user]);

  const handleUnlink = async (provider: string) => {
    try {
      await unlinkIdentity(provider);
      toast({ title: "Conta desvinculada", description: `A tua conta ${provider} foi removida.` });
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao desvincular", description: err.message });
    }
  };

  if (!mounted || authLoading || progressLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-12 font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden rounded-[2.5rem]">
              <div className="h-32 bg-gradient-to-br from-primary via-accent to-primary opacity-20" />
              <CardContent className="pt-0 -mt-16 text-center pb-8">
                <Avatar className="w-32 h-32 mx-auto border-8 border-background mb-4 shadow-xl">
                  <AvatarImage src={profile?.avatar_url || ""} />
                  <AvatarFallback className="text-4xl font-bold bg-secondary text-primary">
                    {profile?.display_name?.[0] || user?.email?.[0]}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-headline font-bold">{profile?.display_name}</h2>
                <p className="text-muted-foreground text-sm mb-6">{user?.email}</p>
                
                <div className="flex justify-center gap-3">
                  <Button variant="outline" size="sm" className="rounded-full font-bold gap-2 px-6">
                    <Edit2 className="w-3.5 h-3.5" /> Editar Perfil
                  </Button>
                </div>
              </CardContent>
              <Separator className="opacity-10" />
              <CardContent className="py-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" /> <span>Maputo, Moçambique</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" /> 
                  <span>Membro desde {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-primary/5 rounded-[2rem] overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xs font-headline uppercase tracking-widest text-primary flex items-center gap-2">
                  <Trophy className="w-4 h-4" /> Estatísticas Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex justify-between items-center bg-background/40 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                       <Zap className="w-5 h-5 text-primary fill-primary" />
                       <span className="text-sm font-medium">Pontos Totais</span>
                    </div>
                    <span className="font-bold">{profile?.total_points || 0}</span>
                 </div>
                 <div className="flex justify-between items-center bg-background/40 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                       <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                       <span className="text-sm font-medium">Streak Atual</span>
                    </div>
                    <span className="font-bold">{profile?.streak || 0} dias</span>
                 </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="bg-secondary/50 p-1 rounded-2xl h-14 w-full grid grid-cols-3 md:w-fit">
                <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-background font-bold px-8">
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger value="security" className="rounded-xl data-[state=active]:bg-background font-bold px-8">
                  Segurança
                </TabsTrigger>
                <TabsTrigger value="settings" className="rounded-xl data-[state=active]:bg-background font-bold px-8">
                  Definições
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
                 <section className="space-y-4">
                    <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" /> Domínio de Fundamentos (Nível 1)
                    </h3>
                    <Card className="bg-card/40 border-none shadow-xl p-8 rounded-3xl">
                      <div className="space-y-6">
                        <div className="space-y-3">
                           <div className="flex justify-between items-end">
                              <div>
                                <p className="text-[10px] uppercase font-bold text-primary tracking-tighter">Progresso do Nível</p>
                                <h4 className="text-lg font-bold">Arquitetura & Lógica Base</h4>
                              </div>
                              <span className="text-2xl font-bold text-primary">{Math.min(100, Math.round((completedInL1 / level1Total) * 100))}%</span>
                           </div>
                           <Progress value={(completedInL1 / level1Total) * 100} className="h-4 bg-secondary" />
                           <p className="text-xs text-muted-foreground">Faltam {Math.max(0, level1Total - completedInL1)} tópicos para dominar os fundamentos.</p>
                        </div>
                      </div>
                    </Card>
                 </section>

                 <section className="space-y-4">
                    <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" /> Conquistas Recentes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <Card className="bg-background/40 border-dashed border-2 p-6 flex flex-col items-center justify-center text-center opacity-40">
                          <Trophy className="w-8 h-8 mb-2" />
                          <p className="text-xs font-bold uppercase tracking-widest">Aguardando Certificação</p>
                       </Card>
                       <Card className="bg-background/40 border-dashed border-2 p-6 flex flex-col items-center justify-center text-center opacity-40">
                          <MessageSquare className="w-8 h-8 mb-2" />
                          <p className="text-xs font-bold uppercase tracking-widest">Colaborador Iniciante</p>
                       </Card>
                    </div>
                 </section>
              </TabsContent>

              <TabsContent value="security" className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                <div className="grid gap-6">
                  {/* MFA Status */}
                  <Card className="bg-card/40 border-none shadow-xl overflow-hidden rounded-3xl">
                    <CardHeader className="bg-primary/5">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <Fingerprint className="w-6 h-6 text-primary" />
                            <div>
                               <CardTitle className="text-lg">Autenticação de Dois Factores (MFA)</CardTitle>
                               <CardDescription>Adicione uma camada extra de segurança à tua conta.</CardDescription>
                            </div>
                         </div>
                         <Badge variant={hasMFA ? "default" : "outline"} className={hasMFA ? "bg-green-500" : ""}>
                            {hasMFA ? "ATIVADO" : "DESATIVADO"}
                         </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        O MFA garante que apenas tu possas aceder à tua conta, mesmo que alguém descubra a tua senha.
                      </p>
                      <Button variant="secondary" className="rounded-xl font-bold">
                        Configurar MFA
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Linked Accounts */}
                  <Card className="bg-card/40 border-none shadow-xl overflow-hidden rounded-3xl">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Lock className="w-5 h-5 text-primary" /> Contas Vinculadas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                       <div className="flex items-center justify-between p-4 bg-background/40 rounded-2xl">
                          <div className="flex items-center gap-3">
                             <Chrome className="w-5 h-5 text-primary" />
                             <div>
                                <p className="text-sm font-bold">Google</p>
                                <p className="text-[10px] text-muted-foreground">Vinculado em 12/03/2024</p>
                             </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-destructive font-bold" onClick={() => handleUnlink('google')}>
                             <Trash2 className="w-4 h-4 mr-2" /> Desvincular
                          </Button>
                       </div>
                       <div className="flex items-center justify-between p-4 bg-background/40 rounded-2xl">
                          <div className="flex items-center gap-3">
                             <Github className="w-5 h-5 text-white" />
                             <div>
                                <p className="text-sm font-bold">GitHub</p>
                                <p className="text-[10px] text-muted-foreground">Não vinculado</p>
                             </div>
                          </div>
                          <Button variant="secondary" size="sm" className="font-bold">
                             Vincular Conta
                          </Button>
                       </div>
                    </CardContent>
                  </Card>

                  {/* Security Notifications */}
                  <Card className="bg-card/40 border-none shadow-xl overflow-hidden rounded-3xl">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bell className="w-5 h-5 text-primary" /> Notificações de Segurança
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                       <div className="flex items-center justify-between">
                          <span className="text-sm">Alertar sobre novos logins</span>
                          <div className="w-10 h-6 bg-primary rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1" /></div>
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="text-sm">Notificar alteração de senha</span>
                          <div className="w-10 h-6 bg-primary rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1" /></div>
                       </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="bg-card/40 border-none shadow-xl rounded-3xl p-8">
                   <h4 className="text-lg font-bold mb-4">Preferências do Sistema</h4>
                   <div className="grid gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-black uppercase text-muted-foreground">Língua de Aprendizagem</label>
                         <select className="w-full h-12 bg-background border rounded-xl px-4 text-sm outline-none focus:ring-2 focus:ring-primary">
                            <option value="pt">Português (Moçambique)</option>
                            <option value="en">English (Global)</option>
                         </select>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                         <Button variant="destructive" className="w-full md:w-auto h-12 rounded-xl font-bold" onClick={signOut}>
                            <LogOut className="w-4 h-4 mr-2" /> Encerrar Sessão
                         </Button>
                      </div>
                   </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

function Badge({ children, variant, className }: any) {
  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
      variant === "default" ? "bg-primary text-white" : "border border-white/20 text-muted-foreground",
      className
    )}>
      {children}
    </span>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}