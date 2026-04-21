
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Globe, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { Logo } from "@/components/Logo";

export default function Home() {
  const { t } = useLanguage();
  const heroAsset = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
          {heroAsset && (
            <Image 
              src={heroAsset.imageUrl} 
              alt={heroAsset.description}
              fill
              className="object-cover"
              data-ai-hint={heroAsset.imageHint}
              priority
            />
          )}
        </div>
        
        <div className="container px-4 mx-auto max-w-4xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs md:text-sm font-medium">
            <Zap className="w-3 h-3" />
            <span>AI-Powered Learning</span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tight leading-tight">
            {t.heroTitle.split(' ').slice(0, -3).join(' ')} <br className="hidden md:block" />
            <span className="text-primary">{t.heroTitle.split(' ').slice(-3).join(' ')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full font-semibold group shadow-lg shadow-primary/20">
                {t.getStarted}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/modules" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary">
                {t.modules}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 rounded-2xl bg-card border hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{t.practice}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pratique codificação diretamente no seu navegador com suporte para Python, JavaScript, Java e C++.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-accent w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{t.languages}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Alterne entre Inglês e Português sem problemas. Conteúdo adaptado para o contexto local.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{t.theory}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mergulhe profundamente em Estruturas de Dados, Algoritmos e Arquitetura de Sistemas com caminhos guiados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="mt-auto py-16 border-t bg-card/10">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Logo className="h-32 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 Codworks Moz. <br className="md:hidden" /> Empowering the next tech hub.
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">Privacidade</Link>
            <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors">Termos</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Suporte</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
