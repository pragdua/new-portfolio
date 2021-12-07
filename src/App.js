import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { StyledContainer } from './styles/Container.styled';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blogs from './components/Blogs';
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
    <StyledContainer>
      <Navbar/>

      <Routes>
            <Route exact path="/projects" element={<Projects />}>
            </Route>
            <Route exact path="/blogs" element={<Blogs/>}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
        </Routes>

    </StyledContainer>
    </BrowserRouter>
  );
}

export default App;
