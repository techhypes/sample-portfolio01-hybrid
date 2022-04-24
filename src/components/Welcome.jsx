import React from 'react'
import resume from '../assets/Resume.pdf'
import me2 from '../assets/me2.png'
import me from '../assets/me.png'
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'

const Welcome = () => {
  return (
  <section className="welcome pt-5 overflow-hidden">
        <div className="container pt-5 text-center h-100 position-relative">
            <h5>Hello, I'm</h5>
            <h1>Hope Lim Jia Yong</h1>
            <h5 className="text-light">Fullstack Developer</h5>

            {/* CTA */}
            <div className="mt-4 d-flex justify-content-center">
              <a href={resume} className="btn mx-2" download>Download Resume</a>
              <a href="#contact" className='btn btn-primary mx-2'>Let's Talk</a>
            </div>

            {/* Socials */}
            <div className="welcome__socials d-none d-sm-flex flex-column align-items-center">
              <a href="https://github.com/jiayong1008/" target="_blank"><BsGithub /></a>
              <a href="https://www.youtube.com/channel/UCtuIDCvRXt9fx1QX43DnXhg/videos" target="_blank"><BsYoutube /></a>
              <a href="https://www.linkedin.com/in/jia-yong-lim-b520681aa/" target="_blank"><BsLinkedin /></a>
            </div>

            <div className="me mt-5 overflow-hidden">
              <img src={me} alt="me" />
            </div>

            <a href="#contact" className='scroll__down d-none d-sm-block'>Scroll Down</a>
        </div>
    </section>
  )
}

export default Welcome