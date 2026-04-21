
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, GraduationCap, Languages, Menu, LogOut, User, Sun, Moon, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "./LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Logo } from "./Logo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Navigation() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const { user, profile, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const avatarFallback = PlaceHolderImages.find(img => img.id === 'avatar-fallback')?.imageUrl;

  const navItems = [
    { href: "/dashboard", label: t.dashboard, icon: LayoutDashboard, protected: true },
    { href: "/modules", label: t.modules, icon: GraduationCap, protected: false },
    { href: "/leaderboard", label: t.leaderboard, icon: Trophy, protected: false },
    { href: "/community", label: t.community, icon: Users, protected: true },
  ];

  const visibleItems = navItems.filter(item => !item.protected || (item.protected && user));

  const NavLinks = ({ className = "", mobile = false }: { className?: string; mobile?: boolean }) => (
    <div className={cn("flex items-center gap-6", className)}>
      {visibleItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
            pathname.startsWith(item.href) ? "text-primary font-bold" : "text-muted-foreground",
            mobile && "text-lg p-2 w-full"
          )}
        >
          <item.icon className={cn("w-4 h-4", mobile && "w-5 h-5")} />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="relative w-10 h-10 flex items-center justify-center">
             <Logo className="w-16 h-16 absolute -top-1" showDevices={false} showText={false} />
          </div>
          <span className="font-headline text-xl font-bold tracking-tight hidden sm:inline-block">
            CodWorks <span className="text-primary">Moz</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 font-bold"
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            >
              <Languages className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative w-8 h-8 rounded-full overflow-hidden border">
                    <Image 
                      src={profile?.avatar_url || avatarFallback || ""} 
                      alt="Avatar" 
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-2xl border-primary/10 shadow-2xl">
                  <DropdownMenuItem asChild className="rounded-xl cursor-pointer">
                    <Link href="/profile" className="flex items-center gap-2 w-full">
                      <User className="w-4 h-4" /> {t.profile}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()} className="gap-2 text-destructive cursor-pointer rounded-xl font-bold">
                    <LogOut className="w-4 h-4" /> Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button size="sm" className="rounded-full font-bold px-6">Entrar</Button>
              </Link>
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left font-headline font-bold">
                  CodWorks <span className="text-primary">Moz</span>
                </SheetTitle>
                <SheetDescription className="sr-only">Menu de navegação móvel</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-4">
                <NavLinks className="flex-col items-start gap-4" mobile />
                <div className="border-t pt-6 mt-2">
                   {user ? (
                     <div className="space-y-4">
                        <Link href="/profile" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden border">
                            <Image 
                              src={profile?.avatar_url || avatarFallback || ""} 
                              alt="Avatar" 
                              width={40}
                              height={40}
                            />
                          </div>
                          <span className="font-medium">{profile?.display_name || 'Usuário'}</span>
                        </Link>
                        <Button variant="ghost" className="w-full justify-start text-destructive p-0 font-bold" onClick={() => signOut()}>
                          <LogOut className="w-4 h-4 mr-2" /> Sair
                        </Button>
                     </div>
                   ) : (
                     <Link href="/login" className="w-full">
                       <Button className="w-full font-bold rounded-xl h-12">Entrar</Button>
                     </Link>
                   )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
