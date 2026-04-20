
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Share2, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CertificationsPage() {
  const certBadge = PlaceHolderImages.find(img => img.id === 'certificate-badge')?.imageUrl;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 border-2 border-accent/20">
            <Award className="w-10 h-10 text-accent" />
          </div>
          <h1 className="font-headline text-4xl font-bold mb-4">Your Professional Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase your skills with verified certifications from Codworks Moz. 
            Each certificate is backed by industry-standard assessments.
          </p>
        </header>

        <div className="grid gap-8">
          <Card className="bg-card/50 border-none shadow-xl overflow-hidden group">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-secondary/30 p-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
                <img 
                  src={certBadge} 
                  alt="Certificate Badge" 
                  className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="md:w-2/3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-green-500 font-bold text-sm mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    VERIFIED CERTIFICATE
                  </div>
                  <h2 className="font-headline text-2xl font-bold mb-2">Modern Web Architecture</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    This certification validates deep knowledge of React, Next.js, and Distributed Systems. 
                    Issued upon successful completion of the Web Core learning path.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-xs">
                      <Clock className="w-3 h-3" />
                      Issued: Dec 2023
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-xs">
                      <ExternalLink className="w-3 h-3" />
                      ID: CWM-8392-L92
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 rounded-full font-bold shadow-lg shadow-primary/20">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-full font-bold">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Portfolio
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/40 border-dashed border-2 p-8 flex flex-col items-center justify-center text-center opacity-70">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-headline font-bold text-xl mb-2 text-muted-foreground">Python Advanced</h3>
              <p className="text-sm text-muted-foreground mb-6">Complete 3 more modules to unlock this certificate.</p>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-muted-foreground/30 w-[60%]" />
              </div>
            </Card>

            <Card className="bg-card/40 border-dashed border-2 p-8 flex flex-col items-center justify-center text-center opacity-70">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-headline font-bold text-xl mb-2 text-muted-foreground">Data Structures II</h3>
              <p className="text-sm text-muted-foreground mb-6">Complete 5 more modules to unlock this certificate.</p>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-muted-foreground/30 w-[15%]" />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

// Hallucinated icon fix
function Clock({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
