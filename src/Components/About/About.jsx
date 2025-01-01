import React from 'react';
import { Container, Title, SubTitle, Paragraph, Button } from './AboutStyle';

const About = () => {
  return (
    <Container id="about">
      <Title>Sobre a WM Infinity</Title>
      <SubTitle>Transformando sua visão digital em realidade</SubTitle>
      
      <Paragraph>
        Sou Welinson Macedo , fundador da WM Infinity, uma empresa
        especializada em soluções digitais inovadoras. Com um foco claro em resultados, ajudamos empresas
        a alavancar sua presença online, oferecendo serviços que vão desde a <strong>criação de sites</strong> e
        <strong> lojas virtuais</strong> até a <strong>gestão estratégica de redes sociais</strong>.
      </Paragraph>

      <Paragraph>
        A WM Digital é mais do que uma agência digital. Somos parceiros estratégicos no seu crescimento online.
        Nossa missão é entregar resultados reais e impactantes, proporcionando uma experiência personalizada
        e soluções inovadoras que atendem às necessidades específicas de cada cliente.
      </Paragraph>

      <Paragraph>
        Se você deseja impulsionar sua presença digital, aumentar as vendas e conquistar novos mercados, conte
        conosco. Vamos juntos transformar o seu negócio!
      </Paragraph>

      <Button> <a href="https://api.whatsapp.com/send?phone=5534991448794&text=Ol%C3%A1%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Wm-Infinity!"  target="_blank" rel="noreferrer">Entre em Contato e Vamos Crescer Juntos!</a></Button>
    </Container>
  );
};

export default About;
