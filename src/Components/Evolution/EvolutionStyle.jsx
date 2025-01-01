import styled from 'styled-components';


export const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 30px auto;
`;


export const Title = styled.h2`
  color: #1e90ff;
`;


export const SubTitle = styled.p`
  color: #2f4f4f;
  margin-bottom: 20px;
`;


export const Milestones = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  color: #2e8b57;
  font-weight: bold;
`;

export const ProgressBarContainer = styled.div`
  background-color: #e0f7fa;
  border-radius: 50px;
  height: 20px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`;


export const ProgressBarFill = styled.div`
  background-color: #32cd32;
  height: 100%;
  transition: width 1s ease-in-out;
`;

export const Button = styled.button`
  background-color: #1e90ff;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
a{
  color: white;
}
  &:hover {
    background-color: #4682b4;
  }
`;
