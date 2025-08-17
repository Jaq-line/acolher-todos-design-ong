import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua da Solidariedade, 123 - Centro\nCidade Esperança - SP, 01234-567"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3456-7890\n(11) 98765-4321"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@ongacolher.org.br\nvoluntarios@ongacolher.org.br"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h\nSábados: 8h às 14h"
    }
  ];

  const quickLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#impacto", label: "Nosso Impacto" },
    { href: "#voluntarios", label: "Seja Voluntário" },
    { href: "#transparencia", label: "Transparência" }
  ];

  const supportLinks = [
    { href: "#doar", label: "Como Doar" },
    { href: "#solicitar-ajuda", label: "Solicitar Ajuda" },
    { href: "#campanhas", label: "Campanhas" },
    { href: "#eventos", label: "Eventos" },
    { href: "#noticias", label: "Notícias" },
    { href: "#relatorios", label: "Relatórios" }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-semibold">Acolher</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Transformando vidas através do cuidado, oferecendo suporte integral para 
              pessoas em situação de vulnerabilidade social há mais de 5 anos.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              aria-label="Fazer uma doação para a ONG Acolher"
            >
              <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
              Fazer uma Doação
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <nav aria-label="Links rápidos do footer">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Apoio e Ajuda</h3>
            <nav aria-label="Links de apoio e ajuda">
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-sm mb-1">{info.title}</div>
                    <div className="text-background/80 text-sm whitespace-pre-line">
                      {info.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm text-center md:text-left">
              © {currentYear} ONG Acolher. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="#politica-privacidade"
                className="text-background/80 hover:text-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                aria-label="Política de Privacidade"
              >
                Política de Privacidade
              </a>
              <a
                href="#termos-uso"
                className="text-background/80 hover:text-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                aria-label="Termos de Uso"
              >
                Termos de Uso
              </a>
              <a
                href="#acessibilidade"
                className="text-background/80 hover:text-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                aria-label="Declaração de Acessibilidade"
              >
                Acessibilidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;