import React from 'react';
import { ProgressBar } from './ProgressBar';
import { Container, Title, SubTitle, Milestones, Button } from './EvolutionStyle';

const Evolution = () => {
  return (
    <Container>
      <Title>Evolução do seu sucesso!</Title>
      <SubTitle>Veja como nossos clientes estão crescendo. E você, está pronto para se juntar a eles?</SubTitle>
      
   
      <ProgressBar progress={80} />
      

      <Milestones>
        <p><strong>+100 novos clientes conquistados!</strong></p>
        <p>Satisfação média: 4.5/5</p>
        <p>92% de retenção após 1 ano</p>
      </Milestones>
      
      <div className="call-to-action">
        <p>Junte-se a esses clientes de sucesso!</p>
        <Button><a href="https://api.whatsapp.com/send?phone=5534991448794&text=Ol%C3%A1%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Wm-Infinity!">Seja nosso próximo caso de sucesso!</a></Button>
      </div>
    </Container>
  );
};

export default Evolution;
