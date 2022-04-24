import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { GrInstagram, GrGithub, GrYoutube } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className='py-5 text-center'>
      <a href="#" className='footer__logo'>HOPE LIM</a>

      <ul className="d-flex flex-wrap flex-column flex-sm-row justify-content-center gap-3 gap-sm-5 mt-0 mx-auto mb-5 ps-0">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials d-flex justify-content-center gap-3 mb-5">
        <a href="https://www.facebook.com/profile.php?id=100070080600098" target='_blank'><FaFacebook /></a>
        <a href="https://www.instagram.com/jiayong.lim/" target='_blank'><GrInstagram /></a>
        <a href="https://www.linkedin.com/in/jia-yong-lim-b520681aa/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/jiayong1008/" target='_blank'><GrGithub /></a>
        <a href="https://www.youtube.com/channel/UCtuIDCvRXt9fx1QX43DnXhg/videos/" target='_blank'><GrYoutube /></a>
      </div>

      <div className="footer__copyright mb-3 mb-sm-5">
        <small>&copy; Hope Lim Jia Yong. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer