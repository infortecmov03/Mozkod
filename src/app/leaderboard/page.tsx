
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Zap, Star, Loader2, Crown } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { useLanguage } from "@/components/LanguageContext";
import { cn } from "@/lib/utils";

export default function LeaderboardPage() {
  const { t } = useLanguage();
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaders() {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('total_points', { ascending: false })
        .limit(50);
      
      if (!error && data) setLeaders(data);
      setLoading(false);
    }
    fetchLeaders();
  }, []);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Crown className="w-6 h-6 text-yellow-500 fill-yellow-500" />;
      case 1: return <Medal className="w-6 h-6 text-gray-300 fill-gray-300" />;
      case 2: return <Medal className="w-6 h-6 text-amber-600 fill-amber-600" />;
      default: return <span className="font-bold text-muted-foreground ml-2">{index + 1}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-primary/10 mb-4 border-2 border-primary/20">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-headline text-4xl font-bold">Ranking de Elite</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Os desenvolvedores mais ativos e brilhantes da Codworks Moz. Cada exercício resolvido é um passo rumo ao topo.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Top 3 Podium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-12">
              {leaders.slice(0, 3).map((leader, i) => (
                <Card key={leader.id} className={cn(
                  "border-none shadow-2xl relative overflow-hidden",
                  i === 0 ? "h-[300px] bg-primary/10 border-t-4 border-primary" : "h-[250px] bg-card/50",
                  i === 1 && "md:order-first",
                  i === 2 && "md:order-last"
                )}>
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className="absolute top-4 right-4">
                      {getRankIcon(i)}
                    </div>
                    <Avatar className={cn("w-20 h-20 mb-4 border-4", i === 0 ? "border-primary" : "border-background")}>
                      <AvatarImage src={leader.avatar_url} />
                      <AvatarFallback>{leader.display_name?.[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline font-bold text-lg line-clamp-1">{leader.display_name}</h3>
                    <div className="flex items-center gap-1 mt-2 text-primary">
                      <Zap className="w-4 h-4 fill-primary" />
                      <span className="font-bold text-xl">{leader.total_points || 0}</span>
                    </div>
                    <Badge variant="secondary" className="mt-4 text-[10px] uppercase font-bold">
                       {leader.streak || 0} DIAS DE STREAK
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* List for the rest */}
            <Card className="bg-card/40 border-none shadow-xl overflow-hidden">
              <Table>
                <TableHeader className="bg-secondary/30">
                  <TableRow>
                    <TableHead className="w-20 text-center">{t.rank}</TableHead>
                    <TableHead>{t.user}</TableHead>
                    <TableHead className="text-right">{t.points}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaders.slice(3).map((leader, i) => (
                    <TableRow key={leader.id} className="hover:bg-white/5 transition-colors border-white/5">
                      <TableCell className="text-center font-bold text-muted-foreground">{i + 4}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8 border border-white/10">
                            <AvatarImage src={leader.avatar_url} />
                            <AvatarFallback>{leader.display_name?.[0]}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{leader.display_name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-bold text-primary">
                         <div className="flex items-center justify-end gap-1">
                            <Zap className="w-3.5 h-3.5 fill-primary" />
                            {leader.total_points || 0}
                         </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
