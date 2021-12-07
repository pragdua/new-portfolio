import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import { StyledContainer } from './styles/Container.styled';

function App() {
  return (
    <StyledContainer>
      <Navbar/>
      <Hero/>
      <SocialLinks/>
    </StyledContainer>
  );
}

export default App;
