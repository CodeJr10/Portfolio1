import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg'
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills"

// import { useState } from 'react'


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      {/* <Projects />
      <Contact />
      <Footer /> } */}
    </div>
  );
}

export default App
