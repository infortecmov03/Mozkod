
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Terminal, LayoutDashboard, GraduationCap, Award, Languages, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "./LanguageContext";

export function Navigation() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

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
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Terminal className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">Codworks<span className="text-primary">Moz</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            >
              <Languages className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </Button>
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden border">
              <img src="https://picsum.photos/seed/user/32/32" alt="User avatar" />
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
          >
            {lang.toUpperCase()}
          </Button>
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
                   <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden border">
                      <img src="https://picsum.photos/seed/user/40/40" alt="User avatar" />
                    </div>
                    <span className="font-medium">User Profile</span>
                   </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
