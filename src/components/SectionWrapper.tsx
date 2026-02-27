import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "section-padding max-w-6xl mx-auto",
        isInView ? "animate-fade-in" : "opacity-0",
        className
      )}
    >
      {children}
    </section>
  );
};

export const SectionTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", className)}>
    {children}
  </h2>
);

export const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
    {children}
  </p>
);
