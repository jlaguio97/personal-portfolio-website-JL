import React from "react";
import selfie from "../shapes/selfie.jpg";

const About = () => (
  <div className="aboutPageHeader">
    <div>
      <h1 className="aboutPageTitle" style={{ fontSize: "10.5rem" }}>
        A little bit about myself...
      </h1>
      <p className='aboutMyself' style={{fontSize: '15pt'}}>I'm Jordan, a 24 year old software engineer currently living in New York City. I have a strong love for fashion, visual art, and travel. Prior to my transition into tech, I was a fashion stylist. When I'm not shopping or behind a computer I'm probably taking long strolls in the city or loitering at coffee shops with my friends.</p>
    </div>
    <img src={selfie} alt="me on a roof"></img>
  </div>
);

export default About;
