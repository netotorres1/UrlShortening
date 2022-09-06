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
                <li className='itemF'><b>Features</b></li>
                <li className='itemF'>Link Shortening</li>
                <li className='itemF'>Branded Links</li>
                <li className='itemF'>Analytics</li>
            </ul>
            <ul className='lista' >
                <li className='itemF'><b>Resources</b></li>
                <li className='itemF'>Blog</li>
                <li className='itemF'>Developers</li>
                <li className='itemF'>Support</li>
            </ul>
            <ul className='lista' >
                <li className='itemF'><b>Company</b></li>
                <li className='itemF'>About</li>
                <li className='itemF'>Our Team</li>
                <li className='itemF'>Careers</li>
                <li className='itemF'>Contact</li>
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