import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'


const Header = (props) => (
    <header id="header" className="alt">
        <a href="https://twitter.com/miniconf_dev?s=08" className="icon fa-2x fa-microphone alt"><span className="label">MIC</span></a>
        <h1>miniConf</h1>
        <p>Bringing concise, free and beginner friendly talks for everyone from the industry experts</p><br />
         <h2>React Faster</h2>  
        <p>Upcoming Event on Saturday, 30th March,  10 AM - 1:30 PM <br/>
        <Scroll type="id" element="cta"><a href="#">RSVP</a></Scroll></p>        
    </header>
)

export default Header
