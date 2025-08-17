import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compaixão",
      description: "Tratamos cada pessoa com dignidade, respeito e amor incondicional."
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Acreditamos que todos merecem oportunidades iguais, independentemente de sua situação."
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Mantemos total clareza sobre nossas ações e como utilizamos os recursos recebidos."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos continuamente melhorar nossos serviços para maximizar o impacto positivo."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a ONG Acolher
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Fundada em 2019, a ONG Acolher nasceu do sonho de criar um mundo mais justo e solidário. 
                Nossa missão é oferecer suporte integral para pessoas em situação de vulnerabilidade social, 
                promovendo dignidade, esperança e transformação.
              </p>
              <p>
                Acreditamos que cada pessoa tem potencial único e merece oportunidades para crescer e prosperar. 
                Por isso, desenvolvemos programas que atendem necessidades básicas enquanto capacitamos 
                indivíduos para construir um futuro sustentável.
              </p>
              <p>
                Nossa abordagem é holística e personalizada, reconhecendo que cada história é única. 
                Trabalhamos não apenas para resolver problemas imediatos, mas para criar caminhos 
                duradouros rumo à autonomia e realização pessoal.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-8"
                aria-label="Conhecer nossa história completa"
              >
                Nossa História Completa
              </Button>
            </div>
          </div>

          {/* Stats and Impact */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Nosso Impacto em Números
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Famílias Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1200+</div>
                <div className="text-sm text-muted-foreground">Refeições por Mês</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Crianças na Escola</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Taxa de Reinserção</div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-accent/10 rounded-xl">
              <p className="text-center text-muted-foreground italic">
                "Mais que números, cada estatística representa uma vida transformada e uma família 
                que encontrou esperança novamente."
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Nossos Valores
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Princípios que guiam todas nossas ações e decisões no trabalho social.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Promover a transformação social através do acolhimento, oferecendo suporte integral 
              para pessoas em situação de vulnerabilidade, respeitando sua dignidade e potencializando 
              suas capacidades para construção de um futuro autônomo e próspero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;