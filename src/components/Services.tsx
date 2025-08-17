import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import foodIcon from "@/assets/food-icon.jpg";
import housingIcon from "@/assets/housing-icon.jpg";
import educationIcon from "@/assets/education-icon.jpg";
import healthIcon from "@/assets/health-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "Alimentação",
      description: "Refeições nutritivas e balanceadas para pessoas em situação de vulnerabilidade social.",
      details: "Servimos mais de 200 refeições diárias em nossa cozinha comunitária, garantindo segurança alimentar para famílias necessitadas.",
      icon: foodIcon,
      alt: "Ícone representando alimentação - tigela de sopa fumegante sendo oferecida por mãos cuidadosas"
    },
    {
      title: "Moradia",
      description: "Abrigo temporário e apoio para encontrar moradia digna e sustentável.",
      details: "Oferecemos abrigo seguro e trabalhamos para reinserção habitacional, conectando famílias a programas de moradia social.",
      icon: housingIcon,
      alt: "Ícone representando moradia - casa acolhedora com luz nas janelas sendo protegida por mãos"
    },
    {
      title: "Educação",
      description: "Programas educacionais e capacitação profissional para crianças e adultos.",
      details: "Aulas de reforço escolar, alfabetização de adultos e cursos profissionalizantes para geração de renda.",
      icon: educationIcon,
      alt: "Ícone representando educação - livros abertos com capelo de formatura e mãos oferecendo conhecimento"
    },
    {
      title: "Saúde",
      description: "Atendimento médico básico e orientações de saúde preventiva.",
      details: "Consultas médicas, distribuição de medicamentos e campanhas de vacinação e prevenção.",
      icon: healthIcon,
      alt: "Ícone representando saúde - cruz médica com coração e mãos oferecendo cuidado"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos suporte integral para pessoas em situação de vulnerabilidade, 
            trabalhando em diferentes frentes para promover dignidade e transformação social.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-soft"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src={service.icon}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.details}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={`Saiba mais sobre nossos serviços de ${service.title.toLowerCase()}`}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precisa de Ajuda?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Se você ou alguém que conhece precisa de apoio, entre em contato conosco. 
              Estamos aqui para acolher e oferecer o suporte necessário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-8"
                aria-label="Solicitar ajuda dos nossos serviços"
              >
                Solicitar Ajuda
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8"
                aria-label="Entrar em contato com a ONG Acolher"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;