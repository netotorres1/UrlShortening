import './Header.css'
import React from 'react'
import logo from './../../assets/images/logo.svg'
import illustration from './../../assets/images/illustration-working.svg'

const Header = () => {
  return (
    <div className='container'>
        <div className='headernavbar'>
            <div className='logocontainer'>
                <img className='headerlogo' src={logo} />
                <nav className='links'>
                    <button className='link'>Features</button>
                    <button className='link'>Pricing</button>
                    <button className='link'>Resources</button>
                </nav>
            </div>
            <div>
                <button className='headerbtn'>Login</button>
                <button className='headerbtn'>Sign Up</button>
            </div>
        </div>
        <div className='containerAnnouncement'>
            <div className='Announcement'>
                <h1 className='title'>More than just shorter links</h1>
                <p className='text'>Build your brand's recognition and get detailed
                    insights on how links are performing.
                </p>
                <button className='btnAnnouncement'>Get Started</button>
            </div>
            <img className='illustration' src={illustration} />
        </div>
    </div>
  )
}

export default Header