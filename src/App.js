import './App.css';
import headshot from './headshot.png'
import laptop from './laptop.jpg'
import { Component } from 'react';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  window.addEventListener("scroll", reveal);
}


function App() {
  reveal();
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
              <a id="projects" href="./src/projects">Projects</a>
              <a id="contact" href="./src/contact">Contact</a>
              <div className="request-button-div">
                <button type="button" className="request-button">Request</button>
              </div>
            </div>
          </div>
          
      </header>
      <div className="homepage-content">
        <h1 id="welcome-text"></h1>
      </div>
      <div className="about-page">
        <h1 className="about-heading">Hi, i'm Joey</h1>
        <img src={headshot} className="headshot" alt = " " />
        <p className="about-p">I'm a computer science student with a passion for coding. I create
          custom, responsive, and affordable websites.
        </p>
      </div>
    </div>
  );
}

export default App;
