import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-silva/" },
  { icon: Github, label: "GitHub", href: "https://github.com/samuelsilvaop/" },
  { icon: Mail, label: "Email", href: "mailto:samuelsilvaop@gmail.com" },
];

export const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <SectionTitle className="text-center">
          Vamos <span className="text-gradient">Conversar</span>?
        </SectionTitle>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Estou aberto a novas oportunidades e colaborações. Entre em contato!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map((link) => (
            <Button
              key={link.label}
              variant="heroOutline"
              size="lg"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon size={18} />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
