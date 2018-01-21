import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div>
        <h1>Get In Touch</h1>
      </div>

      <div>
        <p>I am currently seeking employment for May 2018 and onwards. If you think I have what it takes
          to be part of your team or you're just here to say hi, I'd love to hear from you! </p>
      </div>

      <div className="contact-inner-container">
        <a href="https://www.linkedin.com/in/theophilus-jeffrey-ali-76603a139/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>
        <a href="https://github.com/theoJA" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x"></i></a>
        <a href="mailto:theophilus.ja@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-2x"></i></a>
      </div>
    </div>
  )
}