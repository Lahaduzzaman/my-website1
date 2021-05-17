import React from 'react';
import './About.css'
import lahad from '../../images/lahad.png'

const About = () => {
  return (
    <div id="about" className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center m-5 p-3">
          <h1 className="font-weight-bold">ABOUT <span className="text-color">ME</span></h1>
          <h3>Let Me Introduce...</h3>
        </div>
        <div className="col-md-12 px-5  pb-3 mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 col-sm-12 text-center mb-4">
              <img className="img-style mr-4" src={lahad} alt="" />
            </div>
            <div className="col-md-5 col-sm-12 d-flex align-items-center">
              <p className="text-justify "><b> Passionate Web Developer.</b> Always try to grab the new features of technology. Self-Motivated IT professional with deep knowledge and proficiency in mobile responsive website development. Acquired to maintain strong interpersonal relationships with teammates. I’m passionate about providing care to my work, which keeps me motivated and excited about doing my best work.
</p>
            </div>
          </div>

        </div>
        <div className="col-md-12 px-5 pb-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pb-2">PROFILE</h3>
              <h5>Name:</h5>
              <p>Lahaduzzaman Lahad</p>
              <h5>Education:</h5>
              <p className="font-weight-bold mb-0">B.Sc. in Computer Science & Engineering (CSE)</p>
              <p>University of Development Alternative</p>
              <h5>Location:</h5>
              <p>Mohammadpur, Dhaka, Bangladesh</p>
              <h5>Nationality:</h5>
              <p>Bangladeshi</p>
            </div>
            <div className="col-md-6">
              <h3 className="">My Skills</h3>
              <div className="technology mb-5"><span>JavaScript</span><span>ES6</span><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>HTML</span><span>CSS</span><span>Bootstrap</span><span>React-Router</span><span>Material UI</span>
              </div>
              <h3 >Familiar</h3>
              <div className="technology mb-5"><span>SASS</span><span>Redux</span><span> Data Structure</span><span>Algorithm</span><span>OOP</span></div>
              <h3 className="">Tools</h3>
              <div className="technology mb-5"><span>Git</span><span>GitHub</span><span>Heroku</span><span>Netlify</span><span>NPM</span><span>VS Code</span><span>Chrome Dev Tool</span><span>Firebase</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
