import { Beer } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
          <Beer size={14} className="text-primary" />
          Sim, também sou Sommelier de Cerveja certificado — porque engenharia também é sobre sensibilidade, precisão e equilíbrio.
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Samuel Moreira da Silva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
