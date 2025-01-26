import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'; // Importando a biblioteca do EmailJS

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 50px 20px;
`;

const ContactTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #58c9b9;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
  outline: none;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #58c9b9;
  }
`;

const SubmitButton = styled.button`
  background-color: #58c9b9;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
width:100%;
  &:hover {
    background-color: #47a18d;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    emailjs.send(
      'service_ydotiqh', 
      'template_3t0881i', 
      formData, 
      'T06G2lCALXzpmelqC' 
    )
    .then((response) => {
      console.log('Sucesso:', response.status, response.text);

      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Mensagem enviada com sucesso!');
    })
    .catch((err) => {
      console.log('Erro:', err);
      alert('Falha no envio da mensagem. Tente novamente.');
    });
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Entre em Contato</ContactTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Mensagem</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm;
