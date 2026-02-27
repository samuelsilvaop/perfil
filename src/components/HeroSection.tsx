import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import { ArrowDown, MessageSquare, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-mono text-primary tracking-wider animate-fade-in">
          Cloud & FinOps Engineer · DevOps · SRE
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Transformando Cloud em{" "}
          <span className="text-gradient">Estratégia</span>, Custos em{" "}
          <span className="text-gradient">Inteligência</span> e Automação em{" "}
          <span className="text-gradient">Escala</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Cloud & FinOps Engineer especializado em GCP, Azure, Kubernetes e governança multi-cloud.
          Atuo na interseção entre engenharia, custos, automação e estratégia de negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <Button variant="hero" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            <ArrowDown size={18} />
            Ver Projetos
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            <MessageSquare size={18} />
            Falar Comigo
          </Button>
          <Button variant="heroGhost" size="lg">
            <Download size={18} />
            Baixar CV
          </Button>
        </div>

        {/* Location */}
        <p className="mt-12 text-xs text-muted-foreground font-mono animate-fade-in" style={{ animationDelay: "0.6s" }}>
          📍 Ouro Preto – MG, Brasil · Aberto a oportunidades remotas, híbridas ou internacionais
        </p>
      </div>
    </section>
  );
};
