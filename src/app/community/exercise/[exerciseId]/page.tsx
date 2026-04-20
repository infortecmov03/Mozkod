
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/components/LanguageContext";
import { MessageSquare, ArrowLeft, Send, Loader2, AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ExerciseCommunityPage() {
  const params = useParams();
  const exerciseId = params.exerciseId as string;
  const router = useRouter();
  const { user } = useAuth();
  const { t } = useLanguage();

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('community_posts')
        .select(`*, profiles:user_id (display_name, avatar_url)`)
        .eq('exercise_id', exerciseId)
        .order('created_at', { ascending: false });
      
      if (!error && data) setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, [exerciseId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newTitle || !newContent) return;

    setIsPosting(true);
    const { data, error } = await supabase
      .from('community_posts')
      .insert({
        user_id: user.id,
        exercise_id: exerciseId,
        title: newTitle,
        content: newContent
      })
      .select(`*, profiles:user_id (display_name, avatar_url)`)
      .single();

    if (!error && data) {
      setPosts([data, ...posts]);
      setNewTitle("");
      setNewContent("");
    }
    setIsPosting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8 gap-2 rounded-full">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Laboratório
        </Button>

        <header className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
             </div>
             <div>
                <h1 className="text-3xl font-headline font-bold">Dúvidas: {exerciseId}</h1>
                <p className="text-muted-foreground">Específico para este laboratório.</p>
             </div>
          </div>
        </header>

        <div className="space-y-12">
          {/* Post Form */}
          <Card className="bg-card/50 border-primary/20 shadow-2xl overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-lg">{t.createPost}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
               <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Título curto (ex: Erro no loop for)" 
                    className="rounded-xl"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                  />
                  <Textarea 
                    placeholder="Explica o que estás a tentar fazer e qual é o erro específico..." 
                    className="min-h-[150px] rounded-xl"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full rounded-xl h-12 font-bold gap-2" disabled={isPosting}>
                    {isPosting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Submeter Pedido de Ajuda
                  </Button>
               </form>
            </CardContent>
          </Card>

          {/* Posts List */}
          <div className="space-y-6">
             <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                Discussões Existentes
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">{posts.length}</span>
             </h3>

             {loading ? (
                <div className="text-center py-10">
                   <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
                </div>
             ) : posts.length > 0 ? (
                posts.map(post => (
                  <Card key={post.id} className="bg-card/30 border-white/5 shadow-lg">
                    <CardContent className="p-6 space-y-4">
                       <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                             <AvatarImage src={post.profiles?.avatar_url} />
                             <AvatarFallback>{post.profiles?.display_name?.[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs font-bold">{post.profiles?.display_name}</span>
                          <span className="text-[10px] text-muted-foreground">• {new Date(post.created_at).toLocaleDateString()}</span>
                       </div>
                       <h4 className="text-lg font-bold">{post.title}</h4>
                       <p className="text-sm text-muted-foreground whitespace-pre-wrap">{post.content}</p>
                       <Separator />
                       <Button variant="link" className="p-0 h-auto text-primary text-xs font-bold">
                          Ver Respostas e Soluções
                       </Button>
                    </CardContent>
                  </Card>
                ))
             ) : (
                <Alert className="bg-accent/5 border-accent/20">
                   <Info className="h-4 w-4" />
                   <AlertTitle>Não há dúvidas ainda!</AlertTitle>
                   <AlertDescription>{t.noPostsYet}</AlertDescription>
                </Alert>
             )}
          </div>
        </div>
      </main>
    </div>
  );
}
