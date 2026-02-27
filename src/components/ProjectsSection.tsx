import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Bot, BarChart3, Server } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Sentinel Bot",
    subtitle: "Slack Automation Bot",
    tech: ["FastAPI", "Slack SDK", "Cloud Run", "Cloud Scheduler"],
    description: "Bot corporativo com retry inteligente, rate limit handling, integração com APIs externas (RH, Service Now), fluxos de offboarding automatizados, modais interativos no Slack e logs estruturados.",
    impact: "Automação de gestão de usuários, redução de tarefas manuais e integração entre RH, IT e liderança.",
  },
  {
    icon: BarChart3,
    title: "Portal de Entregas e Custos",
    subtitle: "Integração DevOps + FinOps",
    tech: ["Azure DevOps", "Cloud Functions", "Cloud Run"],
    description: "Integração de tasks, PBIs, logs de Cloud Functions e custos mensais por projeto. Visão consolidada de impacto técnico e financeiro.",
    impact: "Mostra claramente quem entregou, quanto economizou e o impacto real no negócio.",
  },
  {
    icon: Server,
    title: "Jenkins CI Multi-Agent",
    subtitle: "Teste DevOps Senior",
    tech: ["Jenkins", "Ubuntu 24", "Pipeline Declarativo"],
    description: "Setup completo com agents dedicados, pipeline com stages de checkout, build, test e static analysis (clang-tidy). Execução de testes automatizados com gestão de ambiente em SSD limitado.",
    impact: "Pipeline de CI/CD robusto e otimizado para ambientes com recursos limitados.",
  },
];

export const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <SectionTitle>
        Projetos de <span className="text-gradient">Destaque</span>
      </SectionTitle>

      <div className="grid gap-6 mt-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass rounded-2xl p-6 md:p-8 hover:glow-border transition-all duration-300 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <project.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-primary font-mono">{project.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-secondary-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-semibold">Impacto:</span> {project.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
