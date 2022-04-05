import "./App.css";
import Navbar from "./components/Navbar";
// import gradientShape7 from "./shapes/17.png";
// import gradientShape3 from "./shapes/14.png";
// import gradientShape23 from "./shapes/20.png";
import About from "./components/About";
import Work from "./components/Work";
import LoadingScreen from "./components/LoadingScreen";
import arrow from "./shapes/arrow.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import "animate.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);



  return (
    <>
      {loading === false ? (
        <div className="App" >
          <AnimationOnScroll animateIn="animate__fadeIn" delay={100}>
            <Navbar></Navbar>

            <h1 className="titleText">
              <FadeIn delay={190} transitionDuration={900}>
                <div className="title1" style={{ color: "black"}}>
                  Creative Developer /
                </div>
                <div className="titleMarquee" style={{ color: "#d49e8d", textDecoration: 'underline' }}>
                  Web Designer /
                </div>
                <div className="title3" style={{ color: "black" }}>
                  Problem Solver
                </div>
                </FadeIn>

                <FadeIn delay={700} transitionDuration={1700}>
                <div className="spinAndPersonal">
                  <div id="container">
                    <div id="circle">
                      <a href="mailto:jordan.laguio@gmail.com">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="100%"
                          viewBox="0 0 300 300"
                          enableBackground="new 0 0 300 300"
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
                  </div>

                  <Link to="work" smooth={true} duration={1000} offset={100}>
                    <span>
                      <img className="arrow" src={arrow} alt="arrow"></img>
                    </span>
                  </Link>

                  <h6 className="personal">
                    Fullstack software engineer based in New York City,
                    with a love for UI/UX design.
                  </h6>
                </div>
                </FadeIn>
            </h1>
          </AnimationOnScroll>

          {/* <img
        className="gradientShape"
        src={gradientShape7}
        alt="gradient shape circle"
      /> */}

          {/* <img
            className="gradientShape2"
            src={gradientShape23}
            alt="gradient shape circle"
          /> */}
          {/* <img
        className="gradientShape3"
        src={gradientShape3}
        alt="gradient shape circle"
      ></img> */}

          <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate_fadeOut' delay={700} duration={2.9}>
            <Work></Work>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeIn">
            <About></About>
          </AnimationOnScroll>
        </div>
      ) : (
        // <AnimationOnScroll
        //   animateIn="animate__fadeIn"
        //   aniamteOut="animate__fadeOut"
        //   delay={10}
        // >
          <LoadingScreen />
        // </AnimationOnScroll>
      )}
    </>
  );
}

export default App;
