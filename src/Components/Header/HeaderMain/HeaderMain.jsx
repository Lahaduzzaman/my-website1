import React from 'react';
import './HeaderMain.css';
import Particles from 'react-particles-js';
import Typical from 'react-typical'


const HeaderMain = () => {
  return (
    <div id="home" style={{ height: '100vh', position: "relative" }} className='header-bg'>
      <header id="home" className="d-flex justify-content-center align-items-center">
        <div className="header-section" id="div">
          <h2 className="text-color">Hello!</h2>
          <h1 style={{ fontSize: '5vw' }}>I'm <span >Lahaduzzaman </span>Lahad</h1>
          <Typical
            steps={["Front-End Web Developer", 1000, "I'm a Programmer", 1000, "I Love Handling Errors", 1000, "I'm Creative", 1000,]}
            loop={Infinity}
            wrapper="h1"
            className="caca"
          />
          <div className="mt-4">
            <a className="btn btn-bg text-white mt-2 mr-2" href="#project">MY WORKS</a>
            <a className="btn btn-outline-danger text-white mt-2" href="#contact">CONTACT ME</a>
          </div>
        </div>
      </header>
      <Particles

        height="100vh"
        width="100%"
        params={{
          "particles": {
            "number": {
              "value": 60
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />

    </div>
  );
};

export default HeaderMain;