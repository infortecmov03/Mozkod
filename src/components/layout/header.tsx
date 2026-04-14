"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Globe, Menu, User, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useI18n } from "@/context/I18nContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { t, setLocale } = useI18n();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const navLinks = [
    { href: "/#features", label: t('Header.features') },
    { href: "/curriculo", label: t('Header.curriculum') },
    { href: "/comunidade", label: t('Header.community') },
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
              <SheetTitle className="sr-only">Menu</SheetTitle>
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
                  {isMounted && user && (
                     <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground/80 hover:text-foreground">
                        {t('Header.dashboard')}
                      </Link>
                  )}
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
            {isMounted && user && (
              <Link href="/dashboard" className="font-medium transition-colors text-foreground/60 hover:text-foreground/80">
                {t('Header.dashboard')}
              </Link>
            )}
            </nav>
        </div>
        
        <div className="flex-1 flex justify-center md:hidden">
             <Link href="/">
                <Logo />
            </Link>
        </div>

        <div className="flex items-center justify-end gap-2 md:flex-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t('Header.changeLanguage')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLocale('pt')}>{t('Header.portuguese')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale('en')}>{t('Header.english')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale('es')}>{t('Header.spanish')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale('fr')}>{t('Header.french')}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setLocale('mkw')}>{t('Header.makhuwa')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale('ts')}>{t('Header.xichangana')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isMounted && (<>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                       <AvatarFallback>{user.name ? user.name.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name || 'Usuário'}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email || ''}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>{t('Header.userMenu.panel')}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t('Header.userMenu.logout')}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <div className="hidden sm:flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/login">{t('Header.login')}</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/cadastro">{t('Header.getStarted')}</Link>
                  </Button>
                </div>
                 <div className="sm:hidden">
                   <Button variant="outline" asChild>
                       <Link href="/login">{t('Header.login')}</Link>
                   </Button>
               </div>
              </>
            )}
          </>)}
        </div>
      </div>
    </header>
  );
}
