import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>9742353551</dd>
                <dt>Email</dt>
                <dd>tanay.mit@gmail.com</dd>
            </dl>
            {/* <ul className="icons">
                <li><a href="https://twitter.com/tanaypratap" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/tanaypratap/?hl=en" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA/" className="icon fa-youtube alt"><span className="label">GitHub</span></a></li>
            </ul> */}
        </section>
        <p className="copyright">&copy; miniConf. Created with Gatsby</p>
    </footer>
)

export default Footer
