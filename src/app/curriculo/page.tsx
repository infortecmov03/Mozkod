'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { curriculumData } from '@/lib/curriculum-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) {
    return <LucideIcons.Code className={className} />; // Fallback icon
  }
  return <LucideIcon className={className} />;
};

export default function CurriculoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-headline text-3xl md:text-4xl font-bold">
            Nosso Currículo
          </h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            Uma jornada de aprendizado completa, do zero ao programador profissional, alinhada com os padrões da ACM. Explore nossos 7 níveis de conhecimento.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          {curriculumData.map((level) => (
            <AccordionItem value={`item-${level.id}`} key={level.id}>
              <AccordionTrigger className="text-xl font-headline hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full h-10 w-10 font-bold">
                    {level.id}
                  </div>
                  <div>
                    <h2 className="text-left">{level.title}</h2>
                    <p className="text-sm text-muted-foreground font-normal text-left">{level.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {level.knowledgeAreas.map((area) => (
                    <Card key={area.id} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                            <CardTitle className="text-lg font-headline flex items-center gap-3">
                                <Icon name={area.iconName} className="w-6 h-6 text-accent" />
                                {area.title}
                            </CardTitle>
                             <Badge variant="secondary">{area.load}</Badge>
                        </div>
                         <CardDescription>{area.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-end">
                        <Button variant="secondary" className="w-full" asChild>
                            <Link href={`/lessons/${area.id}`}>
                                Começar a aprender
                            </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <Footer />
    </div>
  );
}
