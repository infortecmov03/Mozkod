
"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { useLanguage } from "@/components/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap, Star, Trophy, Calendar, MapPin, Mail, Settings, Edit2, Loader2, BookOpen, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export default function ProfilePage() {
  const { user, profile, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading } = useProgress();
  const { t } = useLanguage();

  if (authLoading || progressLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  const completedLessons = progress.filter(p => p.completed).length;

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar: User Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-primary to-accent opacity-20" />
              <CardContent className="pt-0 -mt-12 text-center pb-8">
                <Avatar className="w-24 h-24 mx-auto border-4 border-background mb-4">
                  <AvatarImage src={profile?.avatar_url || ""} />
                  <AvatarFallback className="text-3xl font-bold bg-secondary">
                    {profile?.display_name?.[0] || user?.email?.[0]}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-headline font-bold">{profile?.display_name}</h2>
                <p className="text-muted-foreground text-sm mb-6">{user?.email}</p>
                
                <div className="flex justify-center gap-2">
                  <Button size="sm" className="rounded-full font-bold gap-2">
                    <Edit2 className="w-3 h-3" /> Editar Perfil
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
              <Separator />
              <CardContent className="py-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" /> <span>Maputo, Moçambique</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" /> 
                  <span>Membro desde {new Date(profile?.created_at || '').toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-card/50">
              <CardHeader>
                <CardTitle className="text-sm font-headline uppercase tracking-widest text-primary">Badges Conquistados</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="aspect-square rounded-xl bg-secondary/50 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-yellow-500 opacity-40" />
                      </div>
                    ))}
                    <div className="aspect-square rounded-xl border-2 border-dashed border-muted flex items-center justify-center">
                      <Zap className="w-5 h-5 text-muted-foreground opacity-20" />
                    </div>
                 </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content: Stats & Activity */}
          <div className="md:col-span-2 space-y-8">
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="bg-primary/5 border-primary/20 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Zap className="w-8 h-8 text-primary fill-primary mb-2" />
                    <span className="text-2xl font-headline font-bold">{profile?.total_points || 0}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{t.points}</span>
                  </CardContent>
                </Card>
                <Card className="bg-accent/5 border-accent/20 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Star className="w-8 h-8 text-accent fill-accent mb-2" />
                    <span className="text-2xl font-headline font-bold">{profile?.streak || 0}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{t.streak}</span>
                  </CardContent>
                </Card>
                <Card className="bg-green-500/5 border-green-500/20 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Trophy className="w-8 h-8 text-green-500 fill-green-500 mb-2" />
                    <span className="text-2xl font-headline font-bold">{completedLessons}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{t.lessonsCompleted}</span>
                  </CardContent>
                </Card>
             </div>

             <section className="space-y-4">
                <h3 className="font-headline text-xl font-bold">Domínio de Nível</h3>
                <Card className="bg-card/30 border-none shadow-xl p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm font-bold">
                          <span>Nível Atual: 1 (Fundamentos)</span>
                          <span>{Math.min(100, Math.round((completedLessons / 147) * 100))}%</span>
                       </div>
                       <Progress value={(completedLessons / 147) * 100} className="h-3" />
                    </div>
                  </div>
                </Card>
             </section>

             <section className="space-y-4">
                <h3 className="font-headline text-xl font-bold">Atividade na Comunidade</h3>
                <Card className="bg-card/30 border-none shadow-xl">
                  <CardContent className="p-0">
                    <div className="p-8 text-center space-y-4">
                      <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto opacity-20" />
                      <p className="text-muted-foreground">Ainda não participaste em discussões. Ajuda outros devs!</p>
                      <Button variant="outline" className="rounded-full font-bold">Ir para a Comunidade</Button>
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
