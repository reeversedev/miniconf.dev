import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src="{logo}" alt="" /></span>
        <h1>miniConf</h1>
        <p>Learn about React and Web Performance<br />
            Saturday, 30th March,  11 AM - 1:30 PM <br />
            <a href="https://miniconf.dev">RSVP</a>
        </p>
    </header>
)

export default Header
