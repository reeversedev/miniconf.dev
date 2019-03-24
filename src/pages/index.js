import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import saurabh from '../assets/images/saurabh.jpg'
import tanay from '../assets/images/tanay.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="miniConf" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Saurabh Rajpal</h2>
                </header>
                <p>Technical Solutions Consultant at Google <br />
                PWA, AMP, mSite Performance & AoG Evangelist | Passionate Community Contributor & Event Speaker
                </p>
                <ul className="actions">
                  <li><a href="https://twitter.com/rajpal_saurabh" className="icon fa-twitter alt" style={{ color: '#50a7f3' }}><span className="label">Twitter</span></a></li>
                  <li><a href="https://www.linkedin.com/in/rajpalsaurabh/" className="icon fa-linkedin alt" style={{ color: '#50a7f3' }}><span className="label">LinkedIn</span></a></li>
                </ul>
              </div>
              <span className="image"><img src={saurabh} alt="" /></span>
            </div>
            <div className="spotlight">
              <span className="image" style={{ marginLeft: '0px', marginRight: '4rem' }}><img src={tanay} alt="" /></span>
              <div className="content">
                <header className="major">
                  <h2>Tanay Pratap</h2>
                </header>
                <p>Engineer at Microsoft <br />
                Delivering Tech Talks/ Workshops /Training since last 5 years, ever ready to share knowledge with community.
                Has ideas about web/career/engineering/life and computer science in general and is willing to help if you have a specific problem.
                </p>
                <ul className="actions">
                  <li><a href="https://twitter.com/tanaypratap" className="icon fa-twitter alt" style={{ color: '#50a7f3' }}><span className="label">Twitter</span></a></li>
                  <li><a href="https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA/" className="icon fa-youtube alt" style={{ color: 'red' }}><span className="label">You Tube</span></a></li>
                  <li><a href="https://www.linkedin.com/in/tpratap/" className="icon fa-linkedin alt" style={{ color: '#50a7f3' }}><span className="label">LinkedIn</span></a></li>
                  <li><a href="https://www.instagram.com/tanaypratap/?hl=en" className="icon fa-instagram alt" style={{ color: 'orange' }}><span className="label">Instagram</span></a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* <section id="first" className="main special">
            <header className="major">
              <h2>About miniConf</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Ipsum consequat</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section> */}

          <section id="first" className="main special">
            <header className="major">
              <h2>About miniConf</h2>
              <p>Learn React and web performance from people who care about web.</p>
            </header>
            
            <p>itur lacinia blah blah blah...</p>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Register yourself</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Get Started</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
