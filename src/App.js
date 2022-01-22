import './App.css';
import Navbar from './components/Navbar';
import gradientShape7 from './shapes/17.png'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='titleText'>
        <span className='titleMarquee'>Creative Developer</span> Web Designer Problem Solver
      </h1>
      {/* <h1>Jordan is a fullstack developer specializing in intuitive design and effective system architecture</h1> */}

      <img className='gradientShape' src={gradientShape7} alt='gradient shape circle'/>


    </div>
  );
}

export default App;
