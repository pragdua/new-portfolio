import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { StyledContainer } from './styles/Container.styled';

function App() {
  return (
    <StyledContainer>
      <Navbar/>
      <Hero/>
    </StyledContainer>
  );
}

export default App;
