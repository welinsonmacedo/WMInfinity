import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 30px auto;
  color: #333;
`;

// Título principal
export const Title = styled.h2`
  color: #1e90ff;
  font-size: 28px;
  margin-bottom: 20px;
`;

// Lista de serviços
export const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Item de serviço
export const ServiceItem = styled.li`
  background-color: #ffffff;
  margin: 15px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

// Título do serviço
export const ServiceTitle = styled.h3`
  color: #32cd32;
  font-size: 22px;
  margin-bottom: 10px;
`;

// Descrição do serviço
export const ServiceDescription = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.5;
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