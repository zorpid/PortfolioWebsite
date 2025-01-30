import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from "./Modules/Skills";
import NavBar from "./Modules/Navbar";
import Footer from "./Modules/Footer";
import Projects from "./Modules/Projects";
import About from "./Modules/About"
import "./Styles/Home.scss";
import Home from './Modules/Home';

function App() {
  const [navstate, setNavState] = useState("Home");

  function updateNavState(newNavstate) {
    setNavState(newNavstate);
  }

  return (
    <div className="wrapper">
      <NavBar updateNavState={updateNavState} navstate={navstate}></NavBar>
      <main>
        {navstate == "Home" && <Home />}
        {navstate == "Skills" && <Skills />}
        {navstate == "My Project" && <Projects />}
        {navstate == "About" && <About />}
        
      </main>
      <Footer />
    </div>
  )
}

export default App
