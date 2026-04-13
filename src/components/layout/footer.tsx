"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-4 md:mb-0">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">Plataforma de educação em programação de código aberto para Moçambique.</p>
          </div>
          <div className="col-span-1 md:col-start-3 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground">Currículo</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/niveis" className="text-sm text-muted-foreground hover:text-foreground">Níveis</Link></li>
                <li><Link href="/areas-de-conhecimento" className="text-sm text-muted-foreground hover:text-foreground">Áreas de Conhecimento</Link></li>
                <li><Link href="/certificados" className="text-sm text-muted-foreground hover:text-foreground">Certificados</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Comunidade</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/forum" className="text-sm text-muted-foreground hover:text-foreground">Fórum</Link></li>
                <li><Link href="/eventos" className="text-sm text-muted-foreground hover:text-foreground">Eventos</Link></li>
                <li><Link href="/contribuir" className="text-sm text-muted-foreground hover:text-foreground">Contribuir</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-foreground">Política de Privacidade</Link></li>
                <li><Link href="/termos-de-servico" className="text-sm text-muted-foreground hover:text-foreground">Termos de Serviço</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {currentYear} Mozkod. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
