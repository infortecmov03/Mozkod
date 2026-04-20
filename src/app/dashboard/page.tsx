
"use client";

import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2, Trophy, Clock, BookOpen, Award } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const { t } = useLanguage();
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-headline text-2xl md:text-3xl font-bold mb-2">Welcome Back, Dev!</h1>
          <p className="text-muted-foreground">{t.progress}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {[
            { label: 'Completed', value: '12', icon: CheckCircle2, color: 'text-green-500' },
            { label: 'Course Progress', value: '68%', icon: Trophy, color: 'text-yellow-500' },
            { label: 'Hours', value: '142', icon: Clock, color: 'text-primary' },
            { label: 'Skill Points', value: '2.4k', icon: Zap, color: 'text-accent' }
          ].map((stat, i) => (
            <Card key={i} className="bg-card/50 border-none shadow-sm overflow-hidden">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <div>
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-xl md:text-3xl font-headline font-bold">{stat.value}</p>
                </div>
                <stat.icon className={cn("w-6 h-6 md:w-8 md:h-8 opacity-80", stat.color)} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <h2 className="font-headline text-xl md:text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              {t.modules}
            </h2>
            <div className="grid gap-6">
              {modules.map((module) => (
                <Card key={module.id} className="overflow-hidden bg-card/40 hover:bg-card/60 transition-colors border-none group shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-40 h-40 md:h-auto relative shrink-0">
                      <img 
                        src={getImg(module.image)} 
                        alt={module.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <CardContent className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">{module.category}</span>
                          <span className="text-xs font-medium text-muted-foreground">{module.progress}%</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">{module.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{module.description}</p>
                      </div>
                      <div className="space-y-3">
                        <Progress value={module.progress} className="h-1.5" />
                        <div className="flex items-center justify-end">
                          <Link href={`/learn/${module.id}`}>
                            <Button size="sm" className="rounded-full flex items-center gap-2">
                              {module.progress === 100 ? 'Review' : module.progress === 0 ? 'Start' : 'Continue'}
                              <Play className="w-3 h-3 fill-current" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h2 className="font-headline text-xl md:text-2xl font-bold flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              {t.certifications}
            </h2>
            <Card className="bg-card/40 border-none shadow-md p-6 space-y-6">
              {[
                { title: 'Python Guru', date: '2 days ago', badge: 'https://picsum.photos/seed/b1/60/60' },
                { title: 'Algo Master', date: '1 week ago', badge: 'https://picsum.photos/seed/b2/60/60' }
              ].map((ach, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors">
                    <img src={ach.badge} alt="badge" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{ach.title}</p>
                    <p className="text-[10px] text-muted-foreground">{ach.date}</p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full text-accent hover:text-accent hover:bg-accent/10">View All</Button>
            </Card>

            <Card className="bg-primary/10 border-primary/20 p-6">
              <h3 className="font-headline font-bold text-primary mb-2">Daily Challenge</h3>
              <p className="text-xs text-primary/80 mb-4">Solve a 5-minute recursive algorithm puzzle to maintain your streak!</p>
              <Button size="sm" className="w-full bg-primary text-primary-foreground font-bold">Solve Now</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M4 14.7V3l9 10H8l5 8-9-7.3z"/>
    </svg>
  );
}
