import React from "react";
import selfie from "../shapes/selfie.jpg";
import 'animate.css'
// import ScrollAnimation from "react-animate-on-scroll";
import 'animate.css'
import Fade from 'react-reveal/Fade'

const About = () => (
  <div className="aboutPageHeader">
    <div>
      <Fade left>
      <h1 className="aboutPageTitle" style={{ fontSize: "10.5rem" }}>
        A little bit about myself...
      </h1>
      </Fade>

      <Fade bottom>
      <p className='aboutMyself' style={{fontSize: '15pt'}}>I'm Jordan, a 24 year old software engineer currently living in New York City. I have a strong love for fashion, visual art, and travel. Prior to my transition into tech, I was a fashion stylist. When I'm not shopping or behind a computer I'm probably taking long strolls in the city or loitering at coffee shops with my friends.</p>
      </Fade>
    </div>
    <img src={selfie} alt="me on a roof"></img>
  </div>
);

export default About;
