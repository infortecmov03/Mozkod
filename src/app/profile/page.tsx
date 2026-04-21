
"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { useLanguage } from "@/components/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap, Star, Trophy, Calendar, MapPin, Edit2, Loader2, MessageSquare, Award, ShieldCheck, Flame } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";

export default function ProfilePage() {
  const { user, profile, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading } = useProgress();
  const { t } = useLanguage();

  const completedLessons = useMemo(() => progress.filter(p => p.completed).length, [progress]);

  // Lógica de Badges Dinâmicos
  const badges = useMemo(() => {
    const list = [];
    if ((profile?.total_points || 0) >= 100) {
      list.push({ id: 'explorador', name: 'Explorador', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-500/10', desc: 'Alcançou 100 pontos' });
    }
    if ((profile?.streak || 0) >= 7) {
      list.push({ id: 'streak', name: 'Maratonista', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10', desc: '7 dias de streak' });
    }
    const level1Completed = progress.filter(p => p.level_id === 1 && p.completed).length >= 147;
    if (level1Completed) {
      list.push({ id: 'level1', name: 'Engenheiro Nível 1', icon: ShieldCheck, color: 'text-green-500', bg: 'bg-green-500/10', desc: 'Nível 1 Concluído' });
    }
    if ((profile?.total_points || 0) >= 1000) {
      list.push({ id: 'mestre', name: 'Mestre Moz', icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-500/10', desc: '1000+ pontos acumulados' });
    }
    return list;
  }, [profile, progress]);

  if (authLoading || progressLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-12 font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar: User Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden rounded-3xl">
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
                  <Button size="sm" className="rounded-full font-bold gap-2 px-6">
                    <Edit2 className="w-3.5 h-3.5" /> Editar
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
                  <span>Membro desde {new Date(profile?.created_at || '').toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-card/50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-xs font-headline uppercase tracking-widest text-primary flex items-center gap-2">
                  <Award className="w-4 h-4" /> Badges Conquistados
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                 <div className="grid grid-cols-2 gap-4">
                    {badges.map(badge => (
                      <div key={badge.id} className={`flex flex-col items-center p-3 rounded-2xl ${badge.bg} border border-white/5 transition-transform hover:scale-105 cursor-help group relative`}>
                        <badge.icon className={`w-8 h-8 ${badge.color} mb-2`} />
                        <span className="text-[10px] font-bold text-center leading-tight">{badge.name}</span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-popover text-[9px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border shadow-xl z-10 pointer-events-none text-center">
                          {badge.desc}
                        </div>
                      </div>
                    ))}
                    {badges.length === 0 && (
                      <div className="col-span-2 text-center py-6 opacity-40 italic text-xs">
                        Nenhum badge ainda. Começa a aprender para desbloquear!
                      </div>
                    )}
                 </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content: Stats & Activity */}
          <div className="md:col-span-2 space-y-8">
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="bg-primary/10 border-primary/20 shadow-lg rounded-3xl border-2">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Zap className="w-10 h-10 text-primary fill-primary mb-2 animate-pulse" />
                    <span className="text-3xl font-headline font-bold">{profile?.total_points || 0}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{t.points}</span>
                  </CardContent>
                </Card>
                <Card className="bg-accent/10 border-accent/20 shadow-lg rounded-3xl border-2">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Flame className="w-10 h-10 text-orange-500 fill-orange-500 mb-2" />
                    <span className="text-3xl font-headline font-bold">{profile?.streak || 0}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{t.streak}</span>
                  </CardContent>
                </Card>
                <Card className="bg-green-500/10 border-green-500/20 shadow-lg rounded-3xl border-2">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Trophy className="w-10 h-10 text-green-500 fill-green-500 mb-2" />
                    <span className="text-3xl font-headline font-bold">{completedLessons}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{t.lessonsCompleted}</span>
                  </CardContent>
                </Card>
             </div>

             <section className="space-y-4">
                <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Domínio de Nível
                </h3>
                <Card className="bg-card/40 border-none shadow-xl p-8 rounded-3xl">
                  <div className="space-y-6">
                    <div className="space-y-3">
                       <div className="flex justify-between items-end">
                          <div>
                            <p className="text-[10px] uppercase font-bold text-primary tracking-tighter">Progresso Atual</p>
                            <h4 className="text-lg font-bold">Nível 1: Fundamentos</h4>
                          </div>
                          <span className="text-2xl font-bold text-primary">{Math.min(100, Math.round((completedLessons / 147) * 100))}%</span>
                       </div>
                       <Progress value={(completedLessons / 147) * 100} className="h-4 bg-secondary" />
                       <p className="text-xs text-muted-foreground">Faltam {147 - completedLessons} tópicos para completar o Nível 1.</p>
                    </div>
                  </div>
                </Card>
             </section>

             <section className="space-y-4">
                <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" /> Atividade na Comunidade
                </h3>
                <Card className="bg-card/30 border-none shadow-xl rounded-3xl">
                  <CardContent className="p-0">
                    <div className="p-12 text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-10 h-10 text-muted-foreground opacity-20" />
                      </div>
                      <p className="text-muted-foreground max-w-xs mx-auto text-sm leading-relaxed">
                        Ainda não participaste em discussões. Partilha as tuas dúvidas ou ajuda outros desenvolvedores!
                      </p>
                      <Button variant="outline" className="rounded-full font-bold px-8 h-12 hover:bg-primary hover:text-white transition-all">
                        Explorar Fórum
                      </Button>
                    </div>
                  </CardContent>
                </Card>
             </section>
          </div>
        </div>
      </main>
    </div>
  );
}
