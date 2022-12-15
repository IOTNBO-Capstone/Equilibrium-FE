import React from "react";
import { Link } from 'react-router-dom';
import "./OutboundLink.css";
import gitHubIcon from "../../Assets/github.png";
import linkedInIcon from "../../Assets/linkedin.png";

const OutboundLink = () => {
  return (
    <div className="outbound-page" data-cy='outbound-container'>
      <p className="thank-you" data-cy='thanks'>Thank you for viewing our application. We think it's important to take care of yourself and to be able to find the help you need. Humankind: be both.</p>
      <br />
      <p>We can be found in the following locations: </p>
      <div className="our-info">
        <div className="ali" data-cy='ali'>
          <h4>Ali Nix</h4>
          <div className="link-icons">
            <a href="https://github.com/alinix1" className="webLink" data-cy='ali-github-link'>
              <img src={ gitHubIcon } alt='github-icon' className='github-icon' data-cy='ali-github' />
            </a>
            <a href="https://www.linkedin.com/in/ali-nix-38b9b9126/" className="webLink" data-cy='ali-linkedin-link'>
              <img src={ linkedInIcon } alt='linkedin-icon' className='linkedin-icon' data-cy='ali-linkedin' />
            </a>
          </div>
        </div>
        <div className="candace" data-cy='candace'>
          <h4>Candace Eckels</h4>
          <div className="link-icons">
            <a href="https://github.com/cece-132" className="webLink" data-cy='candace-github-link'>
              <img src={ gitHubIcon } alt='github-icon' className='github-icon' data-cy='candace-github' />
            </a>
            <a href="https://www.linkedin.com/in/candace-eckels-b66089201/" className="webLink" data-cy='candace-linkedin-link'>
              <img src={ linkedInIcon } alt='linkedin-icon' className='linkedin-icon' data-cy='candace-linkedin' />
            </a>
          </div>
        </div>
        <div className="dana" data-cy='dana'>
          <h4>Dana Chapman</h4>
          <div className="link-icons">
            <a href="https://github.com/danalchapman" className="webLink" data-cy='dana-github-link'>
              <img src={ gitHubIcon } alt='github-icon' className='github-icon' data-cy='dana-github' />
            </a>
            <a href="https://www.linkedin.com/in/danalchapman/" className="webLink" data-cy='dana-linkedin-link'>
              <img src={ linkedInIcon } alt='linkedin-icon' className='linkedin-icon' data-cy='dana-linkedin' />
            </a>
          </div>
        </div>
        <div className="emily" data-cy='emily'>
          <h4>Emily Miles</h4>
          <div className="link-icons">
            <a href="https://github.com/emilyjmiles" className="webLink" data-cy='emily-github-link'>
              <img src={ gitHubIcon } alt='github-icon' className='github-icon' data-cy='emily-github' />
            </a>
            <a href="https://www.linkedin.com/in/emilyjmiles/" className="webLink" data-cy='emily-linkedin-link'>
              <img src={ linkedInIcon } alt='linkedin-icon' className='linkedin-icon' data-cy='emily-linkedin' />
            </a>
          </div>
        </div>
        <div className="taryn" data-cy='taryn'>
          <h4>Taryn Orlemann</h4>
          <div className="link-icons">
            <a href="https://github.com/torlemann" className="webLink" data-cy='taryn-github-link'>
              <img src={ gitHubIcon } alt='github-icon' className='github-icon' data-cy='taryn-github' />
            </a>
            <a href="https://www.linkedin.com/in/taryn-orlemann-99792519a/" className="webLink" data-cy='taryn-linkedin-link'>
              <img src={ linkedInIcon } alt='linkedin-icon' className='linkedin-icon' data-cy='taryn-linkedin' />
            </a>
          </div>
        </div>
        <div className="thomas" data-cy='thomas'>
          <h4>Thomas Hayes</h4>
          <div className="link-icons">
            <a href="https://github.com/thayes87" className="webLink" data-cy='thomas-github-link'>
              <img src={ gitHubIcon } alt='github-icon' className='github-icon' data-cy='thomas-github' />
            </a>
            <a href="https://www.linkedin.com/in/thomas-c-hayes/" className="webLink" data-cy='thomas-linkedin-link'>
              <img src={ linkedInIcon } alt='linkedin-icon' className='linkedin-icon' data-cy='thomas-linkedin' />
            </a>
          </div>
        </div>
        <div className="will" data-cy='will'>
          <h4>Will Hobson</h4>
          <div className="link-icons">
            <a href="https://github.com/willhobson85" className="webLink" data-cy='will-github-link'>
              <img src={ gitHubIcon } alt='github-icon' className='github-icon' data-cy='will-github' />
            </a>
            <a href="https://www.linkedin.com/in/the-william-hobson/" className="webLink" data-cy='will-linkedin-link'>
              <img src={ linkedInIcon } alt='linkedin-icon' className='linkedin-icon' data-cy='will-linkedin' />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Link to='/'>
        <button className="button">Return to Main Page</button>
      </Link>
    </div>
  );
};

export default OutboundLink;