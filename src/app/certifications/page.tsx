
"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Award, Download, Share2, ShieldCheck, CheckCircle, ExternalLink, Loader2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import jsPDF from "jspdf";

export default function CertificationsPage() {
  const { t } = useLanguage();
  const { user, profile } = useAuth();
  const certAsset = PlaceHolderImages.find(img => img.id === 'certificate-badge');
  
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCerts() {
      if (!user) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('user_id', user.id);
      
      if (!error && data) {
        setCertificates(data);
      }
      setLoading(false);
    }
    fetchCerts();
  }, [user]);

  const downloadCertificate = (cert: any) => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });

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
    doc.text(profile?.display_name || "Estudante Codworks", 148.5, 105, { align: "center" });

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(`Completou com sucesso o módulo:`, 148.5, 125, { align: "center" });

    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text(cert.level_title || "Modern Web Architecture", 148.5, 145, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(`Emitido em: ${new Date(cert.issued_at || Date.now()).toLocaleDateString()}`, 148.5, 175, { align: "center" });
    doc.text(`ID: ${cert.id || "CWM-PRO-VERIFIED"}`, 148.5, 185, { align: "center" });

    doc.save(`certificado-codworks-${cert.level_title}.pdf`);
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

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-8">
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <Card key={cert.id} className="bg-card/50 border-none shadow-xl overflow-hidden group hover:shadow-primary/5 transition-all">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-secondary/30 p-8 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
                      {certAsset && (
                        <Image 
                          src={certAsset.imageUrl} 
                          alt={certAsset.description}
                          width={200}
                          height={200}
                          className="drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                          data-ai-hint={certAsset.imageHint}
                        />
                      )}
                    </div>
                    <CardContent className="md:w-2/3 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-green-500 font-bold text-xs mb-3">
                          <ShieldCheck className="w-4 h-4" />
                          CERTIFICADO VERIFICADO
                        </div>
                        <h2 className="font-headline text-2xl font-bold mb-2">{cert.level_title}</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                          Este certificado valida o conhecimento profundo e prático adquirido no módulo.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-[10px] font-bold">
                            <ExternalLink className="w-3 h-3" />
                            ID: {cert.id.substring(0, 8).toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          onClick={() => downloadCertificate(cert)}
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
              ))
            ) : (
              <div className="text-center py-20 bg-card/20 rounded-3xl border-dashed border-2">
                <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                <h3 className="text-xl font-bold mb-2 opacity-60">Nenhum certificado ainda</h3>
                <p className="text-muted-foreground text-sm">Complete os módulos para desbloquear suas certificações.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
