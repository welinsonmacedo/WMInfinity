import React from 'react';
import styled from 'styled-components';

// Estilos do footer
const FooterContainer = styled.footer`
  background-color: #0a1d37;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #58c9b9;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  margin: 0 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #58c9b9;
  }
`;

const FooterCopyright = styled.p`
  margin-top: 20px;
  font-size: 12px;
  color: #bbb;
`;

// Componente de Footer
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#home">Início</FooterLink>
        <FooterLink href="#about">Sobre nós</FooterLink>
        <FooterLink href="#services">Serviços</FooterLink>
        <FooterLink href="#contact">Contato</FooterLink>
      </FooterLinks>
      
      <FooterSocial>
       
        <SocialIcon href="https://api.whatsapp.com/send?phone=5534991448794&text=Ol%C3%A1%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Wm-Infinity!" target="_blank">
          <i className="fab fa-whatsapp"></i>
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/welin_son/" target="_blank">
          <i className="fab fa-instagram"></i>
        </SocialIcon>
      </FooterSocial>
      
      <FooterCopyright>
        &copy; 2025 WM Infinity. Todos os direitos reservados.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
