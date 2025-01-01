import React from 'react';
import { Container, Title, ServiceList, ServiceItem, ServiceTitle, ServiceDescription, Button } from './ServicesStyle';

const Services = () => {
  return (
    <Container id="services">
      <Title>Descubra Nossos Serviços</Title>
      <p>Oferecemos soluções personalizadas e inovadoras para transformar o seu negócio. Conheça todos os nossos serviços:</p>

      <ServiceList>
        <ServiceItem>
          <ServiceTitle>Criação de Sites</ServiceTitle>
          <ServiceDescription>
            Criamos sites modernos e responsivos, que garantem uma presença online sólida e profissional. Seu site será otimizado para gerar mais conversões e engajamento.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Blogs</ServiceTitle>
          <ServiceDescription>
            Criamos blogs com design intuitivo, ideal para quem quer compartilhar conteúdo de qualidade, aumentar a audiência e fortalecer sua marca.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Lojas Virtuais</ServiceTitle>
          <ServiceDescription>
            Desenvolvemos lojas virtuais completas e seguras, para você começar a vender online de forma prática e eficaz, com integração de pagamentos e otimização para SEO.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Sistemas Web</ServiceTitle>
          <ServiceDescription>
            Soluções sob medida com sistemas web que otimizam processos e ajudam a escalar sua empresa com eficiência. De CRMs a ERPs, entregamos ferramentas que fazem a diferença.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Designs Criativos</ServiceTitle>
          <ServiceDescription>
            Desenvolvemos designs exclusivos que refletem a identidade do seu negócio, criando uma conexão emocional com seus clientes e destacando sua marca.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Logotipos</ServiceTitle>
          <ServiceDescription>
            Criamos logotipos impactantes que representam a essência da sua marca, tornando-a memorável e marcante para seus clientes.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Gestão de Redes Sociais</ServiceTitle>
          <ServiceDescription>
            Gerenciamos suas redes sociais, criando estratégias de conteúdo que aumentam o engajamento e conquistam o público-alvo de forma eficaz.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Impulsionamento de Redes Sociais</ServiceTitle>
          <ServiceDescription>
            Aumente o alcance de suas publicações com estratégias de impulsionamento e anúncios pagos, atraindo mais seguidores e potenciais clientes.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Tráfego Pago</ServiceTitle>
          <ServiceDescription>
            Criamos campanhas de tráfego pago no Google Ads e Meta Ads para gerar mais leads qualificados e aumentar suas vendas de forma rápida e eficaz.
          </ServiceDescription>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Consultorias para Empresas</ServiceTitle>
          <ServiceDescription>
            Oferecemos consultorias especializadas em tecnologia para empresas que querem alavancar seus processos e transformar seu modelo de negócios com inovação.
          </ServiceDescription>
        </ServiceItem>
      </ServiceList>

      <Button> <a href="https://api.whatsapp.com/send?phone=5534991448794&text=Ol%C3%A1%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Wm-Infinity!"  target="_blank" rel="noreferrer">Entre em Contato e Transforme seu Negócio!</a></Button>
    </Container>
  );
};

export default Services;
