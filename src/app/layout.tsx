
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: 'Codworks Moz | Aprendizagem Interactiva',
  description: 'Domine a programação com módulos interactivos, execução de código em tempo real e trilhas de aprendizagem localizadas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
