
"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Share2, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { useUser, useFirestore, useCollection } from "@/firebase";
import { useMemo } from "react";
import { collection } from "firebase/firestore";
import jsPDF from "jspdf";

export default function CertificationsPage() {
  const { t } = useLanguage();
  const { user } = useUser();
  const firestore = useFirestore();
  const certBadge = PlaceHolderImages.find(img => img.id === 'certificate-badge')?.imageUrl;

  const certsQuery = useMemo(() => {
    if (!user || !firestore) return null;
    return collection(firestore, 'users', user.uid, 'certificates');
  }, [user, firestore]);

  const { data: certificates } = useCollection(certsQuery);

  const downloadCertificate = (cert: any) => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });

    // Design simples para o certificado
    doc.setFillColor(20, 24, 33);
    doc.rect(0, 0, 297, 210, "F");
    
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(40);
    doc.text("CERTIFICADO DE CONCLUSÃO", 148.5, 60, { align: "center" });

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text("Esta certifica que", 148.5, 85, { align: "center" });

    doc.setFontSize(30);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(59, 130, 246);
    doc.text(user?.displayName || "Estudante Codworks", 148.5, 105, { align: "center" });

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(`Completou com sucesso o módulo:`, 148.5, 125, { align: "center" });

    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text(cert.levelTitle || "Modern Web Architecture", 148.5, 145, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(`Emitido em: ${new Date().toLocaleDateString()}`, 148.5, 175, { align: "center" });
    doc.text(`ID: ${cert.id || "CWM-PRO-8392"}`, 148.5, 185, { align: "center" });

    doc.save(`certificado-codworks-${cert.levelTitle}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 border-2 border-accent/20">
            <Award className="w-10 h-10 text-accent" />
          </div>
          <h1 className="font-headline text-4xl font-bold mb-4">Seu Portfólio Profissional</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada certificado é um selo de qualidade verificado pela Codworks Moz.
          </p>
        </header>

        <div className="grid gap-8">
          {/* Exemplo de certificado já conquistado */}
          <Card className="bg-card/50 border-none shadow-xl overflow-hidden group hover:shadow-primary/5 transition-all">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-secondary/30 p-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
                <img 
                  src={certBadge} 
                  alt="Certificate Badge" 
                  className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="md:w-2/3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-green-500 font-bold text-xs mb-3">
                    <ShieldCheck className="w-4 h-4" />
                    CERTIFICADO VERIFICADO
                  </div>
                  <h2 className="font-headline text-2xl font-bold mb-2">Modern Web Architecture</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Este certificado valida o conhecimento profundo em Next.js 15, React e Firebase Integration.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-[10px] font-bold">
                      <ExternalLink className="w-3 h-3" />
                      ID: CWM-8392-L92
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => downloadCertificate({ levelTitle: "Modern Web Architecture" })}
                    className="flex-1 rounded-full font-bold shadow-lg shadow-primary/20"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t.downloadCert}
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-full font-bold">
                    <Share2 className="w-4 h-4 mr-2" />
                    {t.sharePortfolio}
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/20 border-dashed border-2 p-8 flex flex-col items-center justify-center text-center opacity-60">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-headline font-bold text-xl mb-2">Python Advanced</h3>
              <p className="text-sm text-muted-foreground mb-6">Complete mais 3 lições para desbloquear.</p>
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary/40 w-[60%]" />
              </div>
            </Card>

            <Card className="bg-card/20 border-dashed border-2 p-8 flex flex-col items-center justify-center text-center opacity-60">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-headline font-bold text-xl mb-2">Data Structures II</h3>
              <p className="text-sm text-muted-foreground mb-6">Complete mais 5 lições para desbloquear.</p>
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary/40 w-[15%]" />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
