import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 30px auto;
  color: #333;
`;
export const ContainerContent = styled.div`
  @media (max-width: 768px) {
   display:flex;
   flex-direction: column;

    width: auto;
  
  }
`;
// Título principal
export const Title = styled.h2`
  color: #1e90ff;
  font-size: 32px;
  margin-bottom: 30px;
`;

// Cartão do cliente
export const ClientCard = styled.div`
  display: inline-block;
  width: 30%;
  margin: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: auto;
  }
`;

// Imagem do cliente
export const ClientImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10%;
  margin-bottom: 20px;
  object-fit:contain;
`;

// Informações do cliente
export const ClientInfo = styled.div`
  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #1e90ff;
  }
`;

// Categoria do cliente
export const ClientCategory = styled.p`
  color: #32cd32;
  font-weight: bold;
  margin: 10px 0;
`;

// Botão de visita
export const Button = styled.button`
  background-color: #32cd32;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #228b22;
  }
`;
