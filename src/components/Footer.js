import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Follow MiniConf</h2>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/miniconf_dev"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/MiniConf-589851378085283/"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">&copy; miniConf. Created with Gatsby</p>
  </footer>
)

export default Footer
