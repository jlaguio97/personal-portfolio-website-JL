import "./App.css";
import Navbar from "./components/Navbar";
import gradientShape7 from "./shapes/17.png";
import gradientShape3 from "./shapes/14.png";
import gradientShape23 from "./shapes/20.png";
import About from "./components/About";
import Work from "./components/Work";
import arrow from "./shapes/arrow.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import "animate.css";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1 className="titleText">
        <FadeIn delay={850} transitionDuration={850}>
          <div className="titleMarquee2">Creative Developer</div>
          <div className="titleMarquee2">Web Designer</div>
          <div className="titleMarquee2">Problem Solver</div>

          <div className="spinAndPersonal">
            <div id="container">
              {/* <Link to="contact" smooth={true} duration={1300}> */}
              <div id="circle">
                <a href="mailto:jordan.laguio@gmail.com">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enable-background="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#000">
                        <textPath xlinkHref="#circlePath">
                          contact contact contact contact contact contact
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </a>
              </div>
              {/* </Link> */}
            </div>

            <Link to="work" smooth={true} duration={1000} offset={100}>
              <img className="arrow" src={arrow} alt="arrow"></img>{" "}
            </Link>

            <h6 className="personal">
              Hello, I'm a fullstack web developer based in New York City, with
              a love for UI/UX design.
            </h6>
          </div>
        </FadeIn>
      </h1>

      <img
        className="gradientShape"
        src={gradientShape7}
        alt="gradient shape circle"
      />

      <img
        className="gradientShape2"
        src={gradientShape23}
        alt="gradient shape circle"
      />
      <img
        className="gradientShape3"
        src={gradientShape3}
        alt="gradient shape circle"
      ></img>

      {/* <Link to="about" smooth={true} duration={1000}>
        <img className="arrow2" src={arrow} alt="arrow"></img>
      </Link> */}

      <Work></Work>

      <About></About>

      {/* <Contact></Contact> */}
    </div>
  );
}

export default App;
