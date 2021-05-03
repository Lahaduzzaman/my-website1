import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm("gmail", "template_h28ip77", e.target, "user_uDyAOjxDVO6LGPmtwdUAP")
      .then((result) => {
        if (result) {
          alert('Your email sended successfully')
          e.target.reset()
        }
      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <div id="contact" className="">
      <h1 className='text-center font-weight-bold'>CONTACT ME</h1>
      <h5 className='text-center text-color font-weight-bold'>Have a question or want to work together? I'd really love to hear from your feedback.</h5>
      <div className="container-fluid">
        <div className="row p-3 my-5 d-flex justify-content-between">
          <div className="col-md-6 col-sm-12 shadow-lg p-5 contact-style">
            <h4 className='text-center font-weight-bold pb-4'>Get In Touch</h4>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group d-flex justify-content-center">
                <input type="text" className="form-control" name="name" autoComplete="off" id="exampleInputName" placeholder="Enter Your Name" required />
              </div>
              <div className="form-group d-flex justify-content-center">
                <input type="email" className="form-control" name="email" id="exampleInputEmail1" placeholder="Enter Your Email" autoComplete="off" required />
              </div>
              <div className="form-group d-flex justify-content-center">
                <textarea className="form-control" name="message" rows="3" placeholder="Your Message" required></textarea>
              </div>
              <div className="">
                <button type="submit" className="btn btn-bg text-white w-100">SUBMIT</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 col-sm-12 pl mt-5">
            <div className="contact-info">
              <div className="mb-2">
                <span className="mr-4"><FontAwesomeIcon className="text-color" icon={faMapMarkerAlt} /></span>
                <span>Mohammadpur, Dhaka, Bangladesh</span>
              </div>
              <div className="mb-2">
                <span className="mr-4"><FontAwesomeIcon className="text-color" icon={faPhoneAlt} /></span>
                <span>+880-1788052650</span>
              </div>
              <div className="mb-2">
                <span className="mr-4"><FontAwesomeIcon className="text-color" icon={faEnvelope} /></span>
                <span>lahaduzzaman.lahad@yahoo.com</span>
              </div>
            </div>
            <hr className="btn-bg my-5" />
            <div className="social-icon">
              <ul className="d-flex list-unstyled">
                {/* <li>
                  <a className=" social-icon-style" href="https://www.facebook.com/lahaduzzaman.lahad.7/" target="/_blank"><FontAwesomeIcon  icon={faFacebook} /></a>
                </li> */}
                <li>
                  <a className=" social-icon-style" href="https://www.linkedin.com/in/lahaduzzaman-lahad-638601189/" target="/_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li>
                  <a className=" social-icon-style" href="https://github.com/Lahaduzzaman" target="/_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
                <li>
                  <a className=" social-icon-style" href="https://twitter.com/_lahad_" target="/_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                </li>
                <li>
                  <a className=" social-icon-style" href="https://medium.com/@criclahad.2" target="/_blank"><FontAwesomeIcon icon={faMedium} /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="copyRight text-center bg-dark p-4 text-white">
        <p>© All Right Reserved By <span className="text-color font-weight-bold">Lahaduzzaman Lahad</span> | {(new Date()).getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Contact;