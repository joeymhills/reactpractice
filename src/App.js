import logo from './logo.svg';
import './App.css';
import webdesign from './webdesign.gif'
import laptop from './laptop.jpg'
import { Component } from 'react';

function App() {
  return (
    <div className="app">
      <header className="app-header">
         <div className= "header-logo">
            <h1>JMH</h1>
            <p>web design</p>
         </div>
          <div className="nav-box">
            <div className="nav-bar">
              <a id="home" href="./src/App.js">Home</a>
              <a id="about" href="./src/about"> About</a>
              <a id="projects" href="./src/projects">Projects</a>
              <a id="contact" href="./src/contact">Contact</a>
            </div>
          </div>
          <div className="request-button-div">
            <button type="button" className="request-button">Request</button>
          </div>
      </header>
      <div className="homepage-content">
        <h1 id="welcome-text"> Welcome to my website</h1>
        <div className="laptop-box">
          <img src={laptop} id="laptop" alt=" " />
        </div>
      </div>
      <img src={webdesign} className="web-design"  alt= " " />

    </div>
  );
}

export default App;
