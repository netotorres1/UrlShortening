import './Header.css'
import React from 'react'
import logo from './../../assets/images/logo.svg'
import illustration from './../../assets/images/illustration-working.svg'
import { useState } from 'react'

const Header = () => {

    const [isActive, setIsActive] = useState();
  
    const onClick = () => setIsActive(!isActive);
  return (
    <div className='containerHeader'>
        <div className='headernavbar'>
            <div className='logocontainer'>
                <img alt='' className='headerlogo' src={logo} />
                <nav className='links'>
                    <button className='link'>Features</button>
                    <button className='link'>Pricing</button>
                    <button className='link'>Resources</button>
                </nav>
            </div>
            <div className='login'>
                <button className='link'>Login</button>
                <button className='headerbtn'>Sign Up</button>
            </div>
        </div>
        <div className='MenuHamburger' onClick={onClick}>
            <div className='hamburguer' ></div>
            <div className='hamburguer'></div>
            <div className='hamburguer'></div>
        </div>
        <div>
            <nav className={`navbarMobile ${isActive ? 'active' : 'inactive'}`}>
                <button className='Mobilelink'>Features</button>
                <button className='Mobilelink'>Pricing</button>
                <button className='MobilelinkResources'>Resources</button>
                <button className='Mobilelink'>Login</button>
                <button className='MobilelinkSignIn'>Sign Up</button>
            </nav>
        </div>
        <div className='containerAnnouncement'>
        <img alt='' className='illustration' src={illustration} />
            <div className='Announcement'>
                <h1 className='title'>More than just shorter links</h1>
                <p className='text'>Build your brand's recognition and get detailed
                    insights on how links are performing.
                </p>
                <button className='btnAnnouncement'>Get Started</button>
            </div>
            
        </div>
        
    </div>
  )
}

export default Header