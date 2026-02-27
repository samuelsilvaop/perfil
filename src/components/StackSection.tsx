import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";

interface StackCategory {
  title: string;
  items: string[];
  color: string;
}

const stack: StackCategory[] = [
  {
    title: "Cloud",
    items: ["Google Cloud Platform", "BigQuery", "Cloud Run", "GKE", "Cloud SQL", "Billing Export", "Microsoft Azure", "Multi-cloud Governance"],
    color: "text-primary",
  },
  {
    title: "DevOps",
    items: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Helm", "CI/CD avançado", "SSH & Hardening"],
    color: "text-neon-blue",
  },
  {
    title: "Data & FinOps",
    items: ["BigQuery", "SQL avançado", "Looker Studio", "Power BI", "Metabase", "Modelagem de custos", "Classificação de consumo"],
    color: "text-primary",
  },
  {
    title: "Automação",
    items: ["Python", "Shell scripts", "APIs (Slack, Google, Azure)", "Bots corporativos"],
    color: "text-neon-blue",
  },
];

export const StackSection = () => {
  return (
    <SectionWrapper id="stack">
      <SectionTitle>
        Stack <span className="text-gradient">Técnica</span>
      </SectionTitle>

      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        {stack.map((category) => (
          <div
            key={category.title}
            className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300"
          >
            <h3 className={`text-lg font-bold mb-4 ${category.color}`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-mono bg-secondary border border-border/50 text-secondary-foreground hover:border-primary/40 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
