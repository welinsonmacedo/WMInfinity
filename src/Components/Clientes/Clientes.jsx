import React from 'react';
import { Container, Title, ClientCard, ClientImage, ClientInfo, ClientCategory, Button,ContainerContent } from './ClientesStyle';

const clients = [
  {
    id: 1,
    name: "T-Shirts Amore Vero",
    category: "Loja",
    imageUrl: "./tshirtsamorevero.png",
    websiteUrl: "https://tshirtsamorevero.com/"
  },
  {
    id: 2,
    name: "Arte de Cuidar",
    category: "Blog",
    imageUrl: "./artedecuidar.png",
    websiteUrl: "https://blog-react-red-eight.vercel.app/"
  },
  {
    id: 3,
    name: "@professora_julice",
    category: "Gerenciamento de Instagram",
    imageUrl: "./professorajulice.png",
    websiteUrl: "https://www.instagram.com/professora_julice/"
  },
  // Adicione mais clientes conforme necessário
];

const Clientes = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container id="clientes">
      <Title>Nossos Clientes</Title>
      <ContainerContent>
        {clients.map(client => (
          <ClientCard key={client.id}>
            <ClientImage src={client.imageUrl} alt={client.name} />
            <ClientInfo>
              <h3>{client.name}</h3>
              <ClientCategory>{client.category}</ClientCategory>
              <Button onClick={() => handleClick(client.websiteUrl)}>Visitar </Button>
            </ClientInfo>
          </ClientCard>
        ))}
      </ContainerContent>
    </Container>
  );
};

export default Clientes;
