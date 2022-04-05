import React, { useEffect, useRef } from "react";
import selfie from "../shapes/selfie.jpg";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

// import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

// gsap.registerPlugin(ScrollSmoother);

const About = function () {
  // const smoothWrapperRef = useRef();

  // const smoother = ScrollSmoother.create({
  //   wrapper: '#smooth-wrapper',
  //   content: '#smooth-content'
  // })

  // useEffect(() => {
  //   gsap.to(smoothWrapperRef.current, {rotation: '+=360', delay: '4.0', repeat: '-1', duration: '1.0'})
  // })

  return (
    <div className="aboutPageHeader" id="about">
      <div style={{ width: "40%", justifyContent: 'center', borderBottom: '2pt solid black' }}>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          delay={100}
          duration={0.7}
        >
          <h1 className="aboutPageTitle" style={{ fontSize: "110%" }}>
            JORDAN.LAGUIO@GMAIL.COM
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          delay={100}
          duration={0.7}
        >
          <p className="aboutMyself">
            I'm Jordan, a 24 year old software engineer currently living in New
            York City. I have a strong love for fashion, visual art, and travel.
            Prior to my transition into tech, I was a stylist. When I'm not
            shopping or behind a computer I'm probably taking long strolls in
            the city or at coffee shops with my friends. I'm hoping to use my skills as a web developer to generate meaningful user experiences that are accessible to all.
          </p>
          <div className="socialLinks">
          <span >Find me on: </span>
          <a
            href="https://www.linkedin.com/in/jordan-laguio"
            target="_blank"
            rel="noreferrer"
            className="hover-underline-animation"
          >
            <span style={{ paddingRight: "2vw" }}> LinkedIn</span>
          </a>

          <a
            href="https://github.com/jlaguio97"
            target="_blank"
            rel="noreferrer"
            className="hover-underline-animation"
          >
            <span style={{ paddingRight: "2vw" }}>GitHub</span>{" "}
          </a>
          <a
            href="mailto:jordan.laguio@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover-underline-animation"
          >
            <span>Email</span>
          </a>
        </div>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll animateIn="animate__fadeIn" delay={200} duration={0.7}>
        <img src={selfie} alt="me on a roof" className="selfie"></img>

      </AnimationOnScroll>
      {/* <div id="smooth-wrapper" ref={smoothWrapperRef}>
        <div id='smooth-content'>
          <h1 className='title'>ScrollSmoother</h1>
          <div className="boxes">
            <div className="box box-a">a</div>
            <div className="box box-b">b</div>
            <div className="box box-c">c</div>
          </div>
          <div className='line'></div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
