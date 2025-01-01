import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 40px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 30px auto;
  color: #333;
`;

// Título principal
export const Title = styled.h2`
  color: #1e90ff;
  font-size: 32px;
  margin-bottom: 20px;
`;

// Subtítulo
export const SubTitle = styled.p`
  color: #32cd32;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
`;

// Parágrafo
export const Paragraph = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

// Destaque em palavras
export const Highlightt = styled.span`
  color: #32cd32;
  font-weight: bold;
`;

// Botão de CTA
export const Button = styled.button`
  background-color: #1e90ff;
  color: white;
  font-size: 18px;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  a{
    color: white; 
  }
  &:hover {
    background-color: #4682b4;
  }
`;
