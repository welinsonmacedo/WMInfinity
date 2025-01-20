
import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import './App.css';
import About from './Components/About/About';
import BigBanner from './Components/BigBanner/BigBanner';
import Clientes from './Components/Clientes/Clientes';
import Evolution from './Components/Evolution/Evolution';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
const Container =styled.div`
display:flex;
flex-direction:column;
gap: 2rem;
`
export const FloatingButtons = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;

  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #25d366; /* Cor do WhatsApp */
    color: white;
    font-size: 24px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .top-button {
    background-color: #007bff; /* Cor do botão de voltar ao topo */
  }
`;
function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container>
 <NavBar/>
 <BigBanner/>
 <Evolution/>
 <Services/>
 <About/>
 <Clientes/>
 <ContactForm/>
 <Footer/>
 <FloatingButtons>
        {/* Botão de WhatsApp */}
        <a
          href="https://wa.me/5511999999999" // Substitua pelo seu número
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          title="Fale conosco no WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Botão de voltar ao topo */}
        {showTopButton && (
          <div
            className="button top-button"
            onClick={scrollToTop}
            title="Voltar ao topo"
          >
            <FaArrowUp size={24} />
          </div>
        )}
      </FloatingButtons>
    </Container>
  );
}

export default App;
