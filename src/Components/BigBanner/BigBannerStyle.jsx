import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
flex-direction: column;
  height: 400px;
  background-image: url(); /* Substitua pela URL da sua imagem */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 0 20px;
  position: relative;

  @media (max-width: 768px) {
    height: 300px;
    align-items: start;
  }
`;

export const BannerContent = styled.div`
  max-width: 900px;
  z-index: 2;
  display:flex;
  align-items:center;
  gap:3rem;
`;

export const BannerTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color:#018b1f;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BannerForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const InputField = styled.input`
  padding: 12px;
  font-size: 16px;
  width: 60%;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-right: 10px;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 25px;
  font-size: 16px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
a{
  color: white;
}
  &:hover {
    background-color: #008c9e;

  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Image=styled.img`
width:400px;

@media (max-width: 768px) {
  width:100px;
  }
`