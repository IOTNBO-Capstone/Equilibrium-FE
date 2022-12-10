import React from "react"
import { Link } from 'react-router-dom'
import "./OutboundLink.css"
import gitHubIcon from "../../Assets/github.png"
import linkedInIcon from "../../Assets/linkedin.png"

const OutboundLink = () => {
  return (
    <div className="outbound-page">
      <p className="thank-you">Thank you for viewing our application. We think it's important to take care of yourself and to be able to find the help you need. Humankind: be both.</p>
      <p>We can be found in the following locations: </p>
      <div className="our-info">
        <div className="ali">
          <h4>Ali Nix:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/alinix1" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/ali-nix-38b9b9126/" className="webLink">LinkedIn</a>
          </div>
        </div>
        <div className="candace">
          <h4>Candace Eckels:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/cece-132" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/candace-eckels-b66089201/" className="webLink">LinkedIn</a>
          </div>
        </div>
        <div className="dana">
          <h4>Dana Chapman:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/danalchapman" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/danalchapman/" className="webLink">LinkedIn</a>
          </div>
        </div>
        <div className="emily">
          <h4>Emily Miles:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/emilyjmiles" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/emilyjmiles/" className="webLink">LinkedIn</a>
          </div>
        </div>
        <div className="taryn">
          <h4>Taryn Orlemann:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/torlemann" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/taryn-orlemann-99792519a/" className="webLink">LinkedIn</a>
          </div>
        </div>
        <div className="thomas">
          <h4>Thomas Hayes:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/thayes87" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/thomas-c-hayes/" className="webLink">LinkedIn</a>
          </div>
        </div>
        <div className="will">
          <h4>Will Hobson:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/willhobson85" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/the-william-hobson/" className="webLink">LinkedIn</a>
          </div>
        </div>
      </div>
      <Link to='/'>
        <button>Return to Main Page</button>
      </Link>
    </div>
  )
}

export default OutboundLink