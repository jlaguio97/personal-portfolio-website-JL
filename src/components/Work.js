import React from "react";
import xymeDemo from '../shapes/xymeDemo.png'
import goopDemo from '../shapes/goopDemo.png'
import santaFliesDemo from '../shapes/santaFliesDemo.png'

const Work = () => (
  <div className="workPageParentContainer">
    <h1 className='projectsTitle' style={{fontSize:'10.5rem'}}> Personal Projects: </h1>
    <div className="projectsBox">
      <div className="xymeContainer">
        <img src={xymeDemo} alt='desktop computer with XYME health app on screen' ></img>
        <h1>XYME</h1>
        <h4 style={{fontWeight:'lighter'}}>A mobile web-application that keeps a digital wallet of your medications. With xyme you can read about vital drug interactions to understand which medications should not be taken together. Keeping track of all your meds can be difficult, so our user friendly app will send you SMS notifications straight to your phone morning and night. This way you never forget to take your daily pills. With the integration of Google vision API, you can even scan your medication bottles to then add to your personal wallet.</h4>
      </div>
      <div className="goopMenContainer">
        <img src={goopDemo} alt='homepage interface for shopping website'></img>
        <h1>GOOP for Men</h1>
        <h4 style={{fontWeight:'lighter'}}>Goop is a modern lifestyle brand, for the modern man. A luxurious e-commerce website just for men.</h4>
      </div>
      <div className="santaFliesContainer">

        <img src={santaFliesDemo} alt='demo screen for Santa Flies'></img>
        <h1>Santa Flies!</h1>
        <h4 style={{fontWeight:'lighter'}}>A simple game using JQuery with a festive touch. The game is a flappy-bird clone reskinned as Santa. It uses local storange to save the high score and the user can play the game as many times as they want.</h4>
      </div>
    </div>
  </div>
);

export default Work;
