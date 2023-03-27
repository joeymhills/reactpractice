import './App.css';
import headshot from './headshot.png'
import laptop from './laptop.jpg'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {
  useEffect(()=> {
    AOS.init({duration:2000})
  },[]);
  return (
    <div className="app">
      <header className="app-header">
         <div className= "header-logo">
            <h1>JMH</h1>
         </div>
          <div className="nav-box">
            <div className="nav-bar">
              <a id="home" href="./src/App.js">Home</a>
              <a id="about" href="./src/about"> About</a>
              <a id="projects" href="./src/projects">Services</a>
              <a id="contact" href="./src/contact">Contact</a>
              <div className="request-button-div">
                <button type="button" className="request-button">Request</button>
              </div>
            </div>
          </div>
          
      </header>
      <div className="homepage-content">
        <h1 className="flex-box1"></h1>
        <h1 className="flex-box2"></h1>
        <h1 className="welcome-text"></h1>
      </div>

      <div className="about-page">
        <h1 className="about-heading">Hi, i'm Joey</h1>
        <img src={headshot} className="headshot" data-aos="fade-up" alt = " " />
        <p className="about-p">I'm a computer science student with a passion for coding.<br />I create
          custom, responsive, and affordable websites.
        </p>
      </div>
      <div className="services-page">
        <h1 className="services-heading">Services</h1>
      </div>
    </div>
  );
}


export default App;
