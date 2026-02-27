import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Building2, TrendingUp, BarChart3, Eye } from "lucide-react";

const impacts = [
  { icon: TrendingUp, text: "Maior previsibilidade financeira" },
  { icon: Eye, text: "Transparência para liderança" },
  { icon: BarChart3, text: "Melhoria de decisões estratégicas baseadas em dados" },
  { icon: Building2, text: "Redução de desperdício estrutural" },
];

export const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience">
      <SectionTitle>
        Experiência <span className="text-gradient">Profissional</span>
      </SectionTitle>

      <div className="mt-8 glass rounded-2xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Building2 size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Blip</h3>
            <p className="text-sm text-primary font-mono">Cloud & FinOps Engineer / SRE</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Responsabilidades</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground">
              {[
                "Gestão e otimização de custos em GCP e Azure",
                "Construção de dashboards executivos (Looker Studio, Power BI, Metabase)",
                "Análise profunda de billing exportado para BigQuery",
                "Criação de views SQL estratégicas para rateio de custos",
                "Classificação por ambiente, criticidade, owner e centro de custo",
                "Análise de SKUs (Compute Engine, Cloud SQL, Cloud Storage, MongoDB Atlas, Pinecone)",
                "Análise de invoice month vs usage month",
                "Monitoramento de CUDs e savings",
                "Governança de clusters Kubernetes",
                "Apoio a times para consumo consciente de cloud",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Impacto</h4>
            <div className="grid gap-4">
              {impacts.map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <item.icon size={20} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
