import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

import nIcon1 from '../assets/img/nav-icon1.svg';
import nIcon2 from '../assets/img/leetcode.svg';
import nIcon3 from '../assets/img/github.svg';

// import logo from '../assets/img/';




// import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll",onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  
  return(
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className=
            {activeLink === 'home' ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>.home( )</Nav.Link>
            <Nav.Link href="#link" className=
            {activeLink === 'home' ? "active-navbar-link" : "navbar-link" }onClick={() => onUpdateActiveLink('skills')}>.skills( )</Nav.Link>
            <Nav.Link href="#link" className=
            {activeLink === 'home' ? "active-navbar-link" : "navbar-link"}onClick={() => onUpdateActiveLink('projects')}>.projects( )</Nav.Link>
            <Nav.Link href="#link" className=
            {activeLink === 'home' ? "active-navbar-link" : "navbar-link"}onClick={() => onUpdateActiveLink('resume')}>.resume( )</Nav.Link>
          </Nav>
          <span className="navbar-text">
          <div className="social-icon">
            < a href="#"><img src={nIcon1} alt =""></img></a>
            < a href="#"><img src={nIcon2} alt =""></img></a>
            < a href="#"><img src={nIcon3} alt =""></img></a>
          </div>
          <button className="vvd" onClick={() => console.log('connect')}><span>Get in touch</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}