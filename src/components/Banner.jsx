import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"

import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = [" FrontEnd Developer","Web Designer", "UI/UX Designer"];
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 2000;

useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  },delta)

  return () => { clearInterval(ticker)};
},[text])

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

  setText(updatedText);

  if(isDeleting){
    setDelta(prevDelta => prevDelta /2 )
  }

  if (!isDeleting && updatedText === fullText){
    setIsDeleting(true);
    setDelta(period);
  }else if (isDeleting && updatedText === ""){
    setIsDeleting(false);
    setLoopNum[loopNum + 1];
    setDelta(500);
  }
}

return (
<section className="banner" id="home">
  <Container>
    <Row className="align-items-center">
    <Col xs={12} md={6} xl={1}>
      <span className="tagline">Portfolio</span>
        <h1>{`I'm Aaditya Malap`}<span className="wrap">{text}</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur provident nulla totam enim minima beatae officia, maxime vitae libero, nesciunt pariatur alias fugiat id obcaecati quibusdam similique ut doloribus eius.</p>
        <button onClick={() => console.log('connect')}>Get in Touch <ArrowRightCircle size={25}/> </button>
    </Col>
    <Col xs={12} md={6} xl={5}>
        <img src={headerImg} alt="Header Img"></img>
    </Col></Row>
  </Container>
</section>
)
}