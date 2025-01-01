import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #333;
  color: white;
  position: relative;
  z-index: 10;
`;

export const Logo = styled.div`
 
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  margin: 0 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #58c9b9;
  }
`;
export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px 10px;

  }
`;

export const NavItem = styled.li`
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavLinks = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    color: #00bcd4;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 11;

  span {
    width: 25px;
    height: 4px;
    background-color: white;
    margin: 5px 0;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
