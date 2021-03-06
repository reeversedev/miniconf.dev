import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'


const Header = (props) => (
    <header id="header" className="alt">
        <a href="https://twitter.com/miniconf_dev?s=08" className="icon fa-2x fa-microphone alt"><span className="label">MIC</span></a>
        <h1>miniConf</h1>
        <p style={{ marginBottom: '0.8rem' }}>Bringing concise, free and beginner friendly talks for everyone from the industry experts</p>
        <ul className="icons">
        <li>
          <a
            href="https://twitter.com/miniconf_dev"
            className="icon fa-twitter alt"
            target= '_blank'
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/MiniConf-589851378085283/"
            className="icon fa-facebook alt"
            target= '_blank'
          >
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
         <h2>React Faster</h2>  
        <p style={{ marginBottom: '0.5rem' }}>Upcoming Event on Saturday, 30th March,</p>
            <p style={{ marginBottom: '0.5rem' }}>10 AM - 1:00 PM, Bangalore, India</p> 
        <p style={{ marginBottom: '1rem' }}><Scroll type="id" element="cta"><a href="#">RSVP</a></Scroll></p>       
    </header>
)

export default Header
