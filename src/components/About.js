import React from "react";
import selfie from "../shapes/selfie.jpg";
import 'animate.css'
// import ScrollAnimation from "react-animate-on-scroll";
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css'
// import Fade from 'react-reveal/Fade'

const About = () => (
  <div className="aboutPageHeader">
    <div>
      <AnimationOnScroll animateIn='animate__fadeInLeft' animateOut='animate__fadeOutLeft' delay={400}>
      <h1 className="aboutPageTitle" style={{ fontSize: "10.5rem" }}>
        A little bit about myself...
      </h1>
      </AnimationOnScroll>
      {/* <AnimationOnScroll animateIn="animate__bounceIn" animateOut='fadeOut' delay={200}>
  <h2>Some Text</h2>
</AnimationOnScroll> */}
      <AnimationOnScroll animateIn='animate__fadeInUp' animateOut='animate__fadeOutUp' delay={500}>
      <p className='aboutMyself' style={{fontSize: '15pt'}}>I'm Jordan, a 24 year old software engineer currently living in New York City. I have a strong love for fashion, visual art, and travel. Prior to my transition into tech, I was a stylist at Marni. When I'm not shopping or behind a computer I'm probably taking long strolls in the city or loitering at coffee shops with my friends.</p>
      </AnimationOnScroll>
    </div>
    <AnimationOnScroll animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
    <img src={selfie} alt="me on a roof" className='selfie'></img>
    </AnimationOnScroll>
  </div>
);

export default About;
