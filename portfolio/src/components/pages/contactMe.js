import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import "./contactMe.css";

const ContactMe = () => {
  const email = "WilliamSu668@gmail.com";
  const github = "https://github.com/Ws538";
  const linkedIn = "https://www.linkedin.com/in/william-su-75798a253/";

  const openEmail = () => {
    window.open = (`mailto:${email}`);
  };

  return (
    <div className="contact-me-container">
      <h2 className="contact-me-h2">Contact Me</h2>
      <ul className="linksUL">
      <li>
          <FiMail className="icon" />
          <a className="links" onClick={openEmail} href={"#email"} style={{ cursor: "pointer" }}>
            {email}
          </a>
        </li>
        <li>
          <FiGithub className="icon" />
          <a className="links" href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <FiLinkedin className="icon" />
          <a className="links" href={linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
