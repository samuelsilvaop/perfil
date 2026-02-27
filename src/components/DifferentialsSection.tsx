import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Mentalidade FinOps + Engenharia",
  "Visão executiva e técnica",
  "Capacidade de traduzir custo em estratégia",
  "Automação como padrão",
  "Estruturação de processos",
  "Perfil hands-on",
  "Experiência real em produção",
];

const visionItems = [
  "Transformar custo em inteligência",
  "Transformar dados em decisões",
  "Transformar processos em automações escaláveis",
  "Criar sistemas organizados, previsíveis e sustentáveis",
];

const openTo = [
  "Cloud Engineering",
  "FinOps",
  "DevOps",
  "SRE",
  "Multi-cloud Governance",
  "Oportunidades internacionais",
];

export const DifferentialsSection = () => {
  return (
    <SectionWrapper id="differentials">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Differentials */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-6 text-foreground">
            ✦ <span className="text-gradient">Diferenciais</span>
          </h3>
          <div className="space-y-3">
            {differentials.map((d) => (
              <div key={d} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4 text-foreground">
            🌎 <span className="text-gradient">Visão</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-6 italic">
            "Cloud não é apenas infraestrutura — é estratégia."
          </p>
          <div className="space-y-3">
            {visionItems.map((v) => (
              <div key={v} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span className="text-sm text-secondary-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open to */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-6 text-foreground">
            📈 <span className="text-gradient">Aberto a</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {openTo.map((o) => (
              <span
                key={o}
                className="px-3 py-1.5 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
