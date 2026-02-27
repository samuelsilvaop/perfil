import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Cloud, DollarSign, Container, Database, Cog, GitBranch, Server, Shield } from "lucide-react";

const expertiseItems = [
  { icon: Cloud, label: "Cloud Engineering (GCP e Azure)" },
  { icon: DollarSign, label: "FinOps e otimização de custos" },
  { icon: Container, label: "Kubernetes (produção e staging)" },
  { icon: Database, label: "BigQuery e análise de billing" },
  { icon: Cog, label: "Automação de processos internos" },
  { icon: GitBranch, label: "DevOps e CI/CD (Jenkins, GitHub Actions)" },
  { icon: Server, label: "Infraestrutura como código" },
  { icon: Shield, label: "Governança multi-cloud" },
];

const focusItems = [
  "Redução de desperdícios",
  "Visibilidade financeira por projeto",
  "Classificação inteligente de custos (COGS vs AI-COGS vs Infra)",
  "Estruturação de dashboards executivos",
  "Automatização de workflows críticos",
  "Padronização e organização de ambientes",
];

export const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <SectionTitle>
        Sobre <span className="text-gradient">Mim</span>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <h3 className="text-lg font-semibold mb-6 text-foreground">Áreas de Atuação</h3>
          <div className="grid gap-3">
            {expertiseItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 border border-border/50 hover:border-primary/30 transition-colors duration-200"
              >
                <item.icon size={18} className="text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 text-foreground">Foco de Atuação</h3>
          <div className="grid gap-3">
            {focusItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 border border-border/50 hover:border-primary/30 transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-secondary-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
