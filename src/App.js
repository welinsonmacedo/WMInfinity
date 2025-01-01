
import styled from 'styled-components';
import './App.css';
import About from './Components/About/About';
import BigBanner from './Components/BigBanner/BigBanner';
import Clientes from './Components/Clientes/Clientes';
import Evolution from './Components/Evolution/Evolution';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';

const Container =styled.div`
display:flex;
flex-direction:column;
gap: 2rem;
`
function App() {
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
    </Container>
  );
}

export default App;
