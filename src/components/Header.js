import React from 'react'


const Header = (props) => (
    <header id="header" className="alt">
        <a href="https://twitter.com/miniconf_dev?s=08" className="icon fa-2x fa-microphone alt" style={{ color: '#50a7f3' }}><span className="label">MIC</span></a>
        <h1>miniConf</h1>
        <p>Learn about React and Web Performance<br />
            Saturday, 30th March,  11 AM - 1:30 PM <br />
            <a href="https://miniconf.dev">RSVP</a>
        </p>
    </header>
)

export default Header
