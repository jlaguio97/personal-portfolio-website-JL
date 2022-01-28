import React from "react";
import selfie from "../shapes/selfie.jpg";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const About = () => (
  <div className="aboutPageHeader" id="about">
    <div>
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutLeft"
        delay={400}
      >
        <h1 className="aboutPageTitle" style={{ fontSize: "120%" }}>
          A little bit about myself...
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOutUp"
        delay={200}
      >
        <p className="aboutMyself" style={{ fontSize: "15pt" }}>
          I'm Jordan, a 24 year old software engineer currently living in New
          York City. I have a strong love for fashion, visual art, and travel.
          Prior to my transition into tech, I was a stylist at Marni. When I'm
          not shopping or behind a computer I'm probably taking long strolls in
          the city or loitering at coffee shops with my friends.
        </p>
      </AnimationOnScroll>
    </div>
    <AnimationOnScroll
      animateIn="animate__fadeInRight"
      animateOut="animate__fadeOutRight"
    >
      <img src={selfie} alt="me on a roof" className="selfie"></img>
      <div className="socialLinks">
          <a href="https://www.linkedin.com/in/jordan-laguio" target='_blank' rel='noreferrer' className='hover-underline-animation'>
            <span style={{ paddingRight: "2vw" }}>  LinkedIn</span>
          </a>

          <a href="https://github.com/jlaguio97" target='_blank' rel="noreferrer" className='hover-underline-animation'>
            <span style={{ paddingRight: '2vw'}}>GitHub</span>{" "}
          </a>
          <a href='mailto:jordan.laguio@gmail.com' target='_blank' rel='noreferrer' className='hover-underline-animation'>

            <span>Email</span>
          </a>
      </div>
    </AnimationOnScroll>
  </div>
);

export default About;
