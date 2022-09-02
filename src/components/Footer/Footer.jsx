import React from 'react'
import './footer.css'
import logo from './../../assets/images/logo.svg'
import iconFB from './../../assets/images/icon-facebook.svg'
import iconTwitter from './../../assets/images/icon-twitter.svg'
import iconPinterest from './../../assets/images/icon-pinterest.svg'
import iconInsta from './../../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='containerFooter'>
        <h2 className='LogoFooter'>Shortly</h2>
        <div className='containerLista'>
            <ul className='lista'>
                <li className='item'><b>Features</b></li>
                <li className='item'>Link Shortening</li>
                <li className='item'>Branded Links</li>
                <li className='item'>Analytics</li>
            </ul>
            <ul className='lista' >
                <li className='item'><b>Resources</b></li>
                <li className='item'>Blog</li>
                <li className='item'>Developers</li>
                <li className='item'>Support</li>
            </ul>
            <ul className='lista' >
                <li className='item'><b>Company</b></li>
                <li className='item'>About</li>
                <li className='item'>Our Team</li>
                <li className='item'>Careers</li>
                <li className='item'>Contact</li>
            </ul>
        </div>
        <div className='containerIcons'>
            <img className='iconMedia' src={iconFB} />
            <img className='iconMedia' src={iconTwitter} />
            <img className='iconMedia' src={iconPinterest} />
            <img className='iconMedia' src={iconInsta} />
        </div>
    </div>
  )
}

export default Footer