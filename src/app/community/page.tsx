
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase/client";
import { MessageSquare, Search, PlusCircle, User, Clock, ArrowRight, Loader2, Filter } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function CommunityPage() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('community_posts')
        .select(`
          *,
          profiles:user_id (display_name, avatar_url)
        `)
        .order('created_at', { ascending: false });
      
      if (!error && data) setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.exercise_id?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="font-headline text-4xl font-bold">Fórum da Comunidade</h1>
            <p className="text-muted-foreground">Tira dúvidas, partilha soluções e cresce com outros devs moçambicanos.</p>
          </div>
          <div className="flex gap-4">
             <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Procurar dúvida ou exercício..." 
                  className="pl-10 rounded-full bg-card"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
             </div>
             <Button className="rounded-full font-bold gap-2 shadow-lg shadow-primary/20">
                <PlusCircle className="w-4 h-4" /> {t.createPost}
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           <div className="lg:col-span-1 space-y-6">
              <Card className="bg-card/40 border-none shadow-xl">
                 <CardHeader>
                    <CardTitle className="text-xs uppercase tracking-widest opacity-60">Filtros Rápidos</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-2">
                    <Button variant="secondary" className="w-full justify-start text-xs rounded-lg" size="sm">
                       🔥 Recentes
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-xs rounded-lg" size="sm">
                       ✅ Resolvidos
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-xs rounded-lg" size="sm">
                       ❓ Sem Resposta
                    </Button>
                 </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20 shadow-xl overflow-hidden">
                 <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                       <Filter className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-sm">Top Colaboradores</h3>
                    <p className="text-[10px] text-muted-foreground">Ranking semanal dos heróis da comunidade.</p>
                 </CardContent>
              </Card>
           </div>

           <div className="lg:col-span-3 space-y-4">
              {loading ? (
                <div className="py-20 text-center">
                  <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto" />
                </div>
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <Link key={post.id} href={`/community/post/${post.id}`}>
                    <Card className="bg-card/40 hover:bg-card/60 transition-all border-white/5 hover:border-primary/20 cursor-pointer group shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                           <Avatar className="w-10 h-10 border">
                              <AvatarImage src={post.profiles?.avatar_url} />
                              <AvatarFallback>{post.profiles?.display_name?.[0]}</AvatarFallback>
                           </Avatar>
                           <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold">{post.profiles?.display_name}</span>
                                    <span className="text-[10px] text-muted-foreground">• {new Date(post.created_at).toLocaleDateString()}</span>
                                 </div>
                                 {post.exercise_id && (
                                   <Badge variant="outline" className="text-[9px] bg-secondary font-bold">LAB: {post.exercise_id}</Badge>
                                 )}
                              </div>
                              <h3 className="text-xl font-headline font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                              <div className="flex items-center gap-4 pt-2">
                                 <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <MessageSquare className="w-3.5 h-3.5" /> 0 comentários
                                 </div>
                                 <div className="flex items-center gap-1.5 text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    Ver discussão <ArrowRight className="w-3.5 h-3.5" />
                                 </div>
                              </div>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="text-center py-20 bg-card/20 rounded-3xl border-dashed border-2">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                  <h3 className="text-xl font-bold mb-2 opacity-60">Nenhuma discussão encontrada</h3>
                  <p className="text-muted-foreground text-sm">Sê o primeiro a colocar uma dúvida!</p>
                </div>
              )}
           </div>
        </div>
      </main>
    </div>
  );
}
