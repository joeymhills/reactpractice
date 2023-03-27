import logo from './logo.svg';
import './App.css';
import homepage from './homepage.jpg'
import { Component } from 'react';

function App() {
  return (
    <div className="app">
      <header className="app-header">
          <img src={logo} className="header-logo" alt = " " />
          <div className="nav-box">
            <div className="nav-bar">
              <a id="home" href="./src/App.js">Home</a>
              <a id="projects" href="./src/projects">Projects</a>
              <a id="contact" href="./src/contact">Contact Us</a>
            </div>
          </div>
          <div className="request-button-div">
            <button type="button" className="request-button">Contact me!</button>
          </div>
      </header>
      <div className="homepage-content">
        <img src={homepage} className="homepage-img" alt=" " />
      </div>
    </div>
  );
}

export default App;
