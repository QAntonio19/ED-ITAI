"use client";

import Link from "next/link";
import { BarChart, Github, Rocket, Zap, TestTubes, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "./fade-in";
import { ThemeToggle } from "@/components/theme-toggle";
import { useToast } from "@/hooks/use-toast";
import type { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function LandingPage() {
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Pronto nos comunicaremos contigo.",
    });
    e.currentTarget.reset();
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between z-10">
        <Link href="#" className="flex items-center gap-2 font-headline text-2xl font-bold" prefetch={false}>
          <img
            src="https://expertizdigital.com/wp-content/uploads/2020/06/Expertize-Digital-logo-FINAL-White-2048x307.png"
            alt="Expertiz Digital logo"
            className="h-8 w-auto"
          />
          <span className="text-foreground">Expertiz Digital</span>
        </Link>
        <ThemeToggle />
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4 text-center lg:text-left">
                  <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
                    Unleash Your Brand's Potential with AI
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                    Tired of lackluster headlines? Expertiz Digital transforms your ideas into captivating messages that grab attention and drive results. Stop guessing and start converting.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                      <Rocket className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-headline text-lg font-semibold">Skyrocket Engagement</h3>
                      <p className="text-muted-foreground">Generate headlines that are proven to increase clicks and shares.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-headline text-lg font-semibold">Instant Creativity</h3>
                      <p className="text-muted-foreground">Get dozens of creative options in seconds, breaking through writer's block.</p>
                    </div>
                  </div>
                </div>
              </div>
              <FadeIn className="duration-1000 delay-300">
                <Card className="shadow-xl rounded-xl">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold tracking-tight">Recibe Tu Consulta GRATIS</CardTitle>
                    <CardDescription>Respuesta en 24 horas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input id="name" placeholder="Tu Nombre" />
                      <Input id="email" type="email" placeholder="Tu Correo Electrónico" />
                      <Input id="whatsapp" placeholder="WhatsApp" />
                      <Textarea id="message" placeholder="Escribe Tu Mensaje" className="min-h-[100px]" />
                      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">MANDAR</Button>
                    </form>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </FadeIn>
        </section>

        <section id="features" className="bg-card py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center space-y-4 mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Powerful Features, Actionable Insights</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to analyze, test, and improve your landing page performance.
                </p>
              </div>
              </FadeIn>
              <FadeIn className="delay-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                      <BarChart className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4">AI-Powered Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Go beyond vanity metrics. Our AI analyzes user behavior to give you a clear path to higher conversion rates.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                      <TestTubes className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4">A/B Testing Simplified</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Easily set up and run A/B tests to discover what resonates with your audience. No code required.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4">Optimization Roadmap</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Get a prioritized list of actionable recommendations to boost your page's effectiveness and your bottom line.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Ready to Elevate Your Landing Page?</h2>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                  Join hundreds of businesses growing faster with Expertiz Digital. Get started today and see the difference.
                </p>
                <div className="mt-8">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Sign Up Now - It's Free
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://expertizdigital.com/wp-content/uploads/2020/06/Expertize-Digital-logo-FINAL-White-2048x307.png"
              alt="Expertiz Digital logo"
              className="h-6 w-auto"
            />
            <span className="font-headline text-lg font-semibold text-foreground">Expertiz Digital</span>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Expertiz Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
