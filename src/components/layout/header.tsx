"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Globe, Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: "#features", label: "Recursos" },
    { href: "#", label: "Currículo" },
    { href: "#", label: "Comunidade" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center px-4">
        
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Alternar Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo />
                </Link>
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map(link => (
                    <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground/80 hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center gap-8">
            <Link href="/">
                <Logo />
            </Link>
            <nav className="flex items-center gap-6 text-sm">
            {navLinks.map(link => (
                <Link key={link.label} href={link.href} className="font-medium transition-colors text-foreground/60 hover:text-foreground/80">
                    {link.label}
                </Link>
            ))}
            </nav>
        </div>
        
        <div className="flex-1 flex justify-center md:hidden">
             <Link href="/">
                <Logo />
            </Link>
        </div>

        <div className="flex items-center justify-end gap-2 md:flex-1">
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Mudar idioma</span>
          </Button>
          <div className="hidden sm:flex gap-2">
            <Button variant="outline">Entrar</Button>
            <Button>Comece a Aprender</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
