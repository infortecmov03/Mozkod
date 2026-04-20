
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Terminal, LayoutDashboard, GraduationCap, Award, Languages, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/modules", label: "Modules", icon: GraduationCap },
  { href: "/certifications", label: "Certifications", icon: Award },
];

export function Navigation() {
  const pathname = usePathname();
  const [lang, setLang] = useState<'en' | 'pt'>('en');

  const NavLinks = ({ className = "" }: { className?: string }) => (
    <div className={cn("flex items-center gap-6", className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
            pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
          )}
        >
          <item.icon className="w-4 h-4" />
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
              onClick={() => setLang(l => l === 'en' ? 'pt' : 'en')}
            >
              <Languages className="w-4 h-4" />
              <span>{lang === 'en' ? 'EN' : 'PT'}</span>
            </Button>
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden border">
              <img src="https://picsum.photos/seed/user/32/32" alt="User avatar" />
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(l => l === 'en' ? 'pt' : 'en')}
          >
            {lang === 'en' ? 'EN' : 'PT'}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-4 text-lg font-medium p-2 rounded-lg transition-colors",
                      pathname.startsWith(item.href) ? "bg-secondary text-primary" : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
