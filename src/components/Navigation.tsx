
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, GraduationCap, Award, Languages, Menu, LogOut, User, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "./LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Logo } from "./Logo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const { user, profile, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { href: "/dashboard", label: t.dashboard, icon: LayoutDashboard },
    { href: "/modules", label: t.modules, icon: GraduationCap },
    { href: "/certifications", label: t.certifications, icon: Award },
  ];

  const NavLinks = ({ className = "", mobile = false }: { className?: string; mobile?: boolean }) => (
    <div className={cn("flex items-center gap-6", className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
            pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground",
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
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
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
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            >
              <Languages className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative w-8 h-8 rounded-full overflow-hidden border">
                    <img src={profile?.avatar_url || `https://picsum.photos/seed/${user.id}/32/32`} alt="Avatar" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="gap-2">
                    <User className="w-4 h-4" /> Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={signOut} className="gap-2 text-destructive">
                    <LogOut className="w-4 h-4" /> Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button size="sm" className="rounded-full">Entrar</Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col gap-6 mt-10">
                <NavLinks className="flex-col items-start gap-4" mobile />
                <div className="border-t pt-6 mt-2">
                   {user ? (
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden border">
                            <img src={profile?.avatar_url || `https://picsum.photos/seed/${user.id}/40/40`} alt="Avatar" />
                          </div>
                          <span className="font-medium">{profile?.display_name || 'Usuário'}</span>
                        </div>
                        <Button variant="ghost" className="w-full justify-start text-destructive p-0" onClick={signOut}>
                          <LogOut className="w-4 h-4 mr-2" /> Sair
                        </Button>
                     </div>
                   ) : (
                     <Link href="/login" className="w-full">
                       <Button className="w-full">Entrar</Button>
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
