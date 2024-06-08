import "react-multi-carousel/lib/styles.css";

import {Col, Container, Row} from "react-bootstrap";

import  Carousel  from "react-multi-carousel";
import colorsharp from "../assets/img/color-sharp.png"
import css from "../assets/img/css.png"
import html from "../assets/img/html.png"
import js from "../assets/img/javascript.png"
import react from "../assets/img/react.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000}, items: 5
      },
      desktop: {
breakpoint: { max: 3000, min: 1024}, items: 3
      },
      tablet:{
breakpoint: { max: 1024, min: 464}, items: 2
      },
      mobile: {
breakpoint: { max: 464, min: 0}, items: 1
      }
    };
  

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2> Skills 
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perferendis suscipit provident dicta distinctio mollitia cupiditate sapiente ea minus commodi non, quas, est molestiae. Quidem, itaque cupiditate! Ad, voluptas officiis?</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src={js} alt="Image"></img>
                <h5>Javascript</h5>
              </div>
               <div className="item">
                <img src={react} alt="Image"></img>
                <h5>React</h5>
              </div>
               <div className="item">
                <img src={html} alt="Image"></img>
                <h5>HTML</h5>
              </div>
               <div className="item">
                <img src={css} alt="Image"></img>
                <h5>CSS</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorsharp}> </img>
    </section>
  )}