import React from 'react'

// IMAGES
import SiteLogo from '../../images/footer-site-logo.svg'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillTikTok } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__content">
          <div className="footer__title">
            <img src={SiteLogo} alt="site logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <ul className="footer__list">
            <h3>Contact us</h3>
            <li>E: info@example.com</li>
            <li>P: +94 7670000000</li>
            <li>A: 123 Hospital rd, </li>
            <li>Kalubowila, Dehiwela</li>
          </ul>
          <ul className="footer__list">
            <h3>Useful links</h3>
            <li>Shop All </li>
            <li>Tempered Glass</li>
            <li>Back-cover </li>
            <li>About Us</li>
          </ul>
          <ul className="footer__socials">
            <li>
              <IoLogoWhatsapp />
              <p>Whatsapp</p>
            </li>
            <li>
              <FaFacebookSquare />
              <p>Facebook</p>
            </li>
            <li>
              <FaInstagramSquare />
              <p>Instargram</p>
            </li>
            <li>
              <AiFillTikTok />
              <p>Tik Tok</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer