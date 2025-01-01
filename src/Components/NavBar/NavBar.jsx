/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Container, Logo, NavList, NavItem, BurgerMenu, NavLinks ,SocialIcon} from './NavBarStyle';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container id="home">
      <Logo>
      <SocialIcon href="https://www.instagram.com/welin_son/" target="_blank">
          <i className="fab fa-instagram"></i>
        </SocialIcon>
        <SocialIcon href="https://api.whatsapp.com/send?phone=5534991448794&text=Ol%C3%A1%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Wm-Infinity!" target="_blank">
          <i className="fab fa-whatsapp"></i>
        </SocialIcon>
      </Logo>
      <BurgerMenu onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenu>
      <NavList menuOpen={menuOpen}>
        <NavItem>
          <NavLinks href="#home">Home</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#about">Sobre</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#services">Serviços</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#clientes">Clientes</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#contact">Contato</NavLinks>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default NavBar;
