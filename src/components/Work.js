import React from "react";
import xymeDemo from "../shapes/xymeDemo.png";
import goopDemo from "../shapes/goopDemo.png";
import santaFliesDemo from "../shapes/santaFliesDemo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Work = () => (
  <div className="workPageParentContainer" id='work'>
    <AnimationOnScroll
      animateIn="animate__fadeIn"
      delay={150}
    >
      <h1 className="projectsTitle" style={{ fontSize: "10.5vw", color:'#FAF6F2'}}>
        Personal Projects:
      </h1>
    </AnimationOnScroll>
    <div className="projectsBox">
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={400}>
        <div className="xymeContainer">
          <img
            src={xymeDemo}
            alt="desktop computer with XYME health app on screen"
          ></img>

          <a className='hover-underline-animation' href='https://fsa-xyme.herokuapp.com/' target='_blank' rel='noreferrer'>
          <h1>XYME</h1></a>


          <h4 style={{ fontWeight: "lighter" }}>
            A mobile web-application that keeps a digital wallet of your
            medications. With xyme you can read about vital drug interactions to
            understand which medications should not be taken together. Keeping
            track of all your meds can be difficult, so our user friendly app
            will send you SMS notifications straight to your phone morning and
            night. This way you never forget to take your daily pills. With the
            integration of Google vision API, you can even scan your medication
            bottles to then add to your personal wallet.
          </h4>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={600}>
        <div className="goopMenContainer">
          <img
            src={goopDemo}
            alt="homepage interface for shopping website"
          ></img>

<a className='hover-underline-animation' href='https://mm-grace-shopper.herokuapp.com/home' target='_blank' rel='noreferrer'>
          <h1>GOOP for Men</h1> </a>


          <h4 style={{ fontWeight: "lighter" }}>
            Goop is a modern lifestyle brand, for the modern man. Drawing from the business mantra of Gwyeneth Paltrow's highly-revered lifestyle brand, it finds the balance between indulgence and necessity. It features several strange luxury products across multiple product categories and a functional 'shopping cart' experience. It is a single-page e-commerce website that was built with React, Express, and PostgreSql.
          </h4>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={800}>
        <div className="santaFliesContainer">
          <img src={santaFliesDemo} alt="demo screen for Santa Flies"></img>

          <a className='hover-underline-animation' href='https://santa-flies.herokuapp.com ' target='_blank' rel='noreferrer'>
          <h1>Santa Flies!</h1> </a>
          <h4 style={{ fontWeight: "lighter" }}>
            A simple game using JQuery with a festive touch. The game is a
            flappy-bird clone reskinned as Santa. It uses local storange to save
            the high score and the user can play the game as many times as they
            want.
          </h4>
        </div>
      </AnimationOnScroll>
    </div>
  </div>
);

export default Work;
