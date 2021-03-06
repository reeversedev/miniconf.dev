import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import saurabh from '../assets/images/saurabh.jpg'
import tanay from '../assets/images/tanay.jpg'
import miniConfSocial from '../assets/images/miniConfSocial.jpg'
import Speaker from '../components/Speaker'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>miniConf</title>
          <meta property="og:title" content="miniConf" />
          <meta property="og:image" content={miniConfSocial} />
          <meta property="og:type" content="Website" />
          <meta property="og:url" content="https://miniconf.dev" />
          <meta
            property="og:description"
            content="Learn React, GraphQL, Web Performance from industry experts at miniConf"
          />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@miniConf_dev" />
          <meta name="twitter:title" content="miniConf" />
          <meta
            name="twitter:description"
            content="Learn React, GraphQL, Web Performance from industry experts at miniConf"
          />
          <meta name="twitter:image" content={miniConfSocial} />
        </Helmet>

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <header className="major special">
              <h2>Speakers</h2>
            </header>
            <Speaker speakerImage={saurabh} />
            <hr />
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Tanay Pratap</h2>
                </header>
                <p>
                  <strong>Engineer at Microsoft</strong> <br />
                  Delivering Tech Talks/ Workshops /Training since last 5 years,
                  ever ready to share knowledge with community. Has ideas about
                  web/career/engineering/life and computer science in general
                  and is willing to help if you have a specific problem.
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://twitter.com/tanaypratap"
                      className="icon fa-twitter alt"
                      target="_blank"
                      style={{ color: '#50a7f3' }}
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA/"
                      className="icon fa-youtube alt"
                      target="_blank"
                      style={{ color: 'red' }}
                    >
                      <span className="label">You Tube</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/tpratap/"
                      className="icon fa-linkedin alt"
                      target="_blank"
                      style={{ color: '#50a7f3' }}
                    >
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/tanaypratap/?hl=en"
                      className="icon fa-instagram alt"
                      target="_blank"
                      style={{ color: 'orange' }}
                    >
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={tanay} alt="Tanay Pratap" />
              </span>
            </div>
          </section>
          <section id="first" className="main">
            <header className="major special">
              <h2>Agenda</h2>
              <p>React Faster</p>
            </header>
            <p>
              This talk aims to discuss about two things
              <ol>
                <li>Getting started with React and building web apps</li>
                <li>Making those apps faster and performant</li>
              </ol>
              <p>
                We will guide you in creating and hosting your first React app.
                :){' '}
              </p>
              <p>
                <strong>Pre-requisites</strong>
                <ul>
                  <li>Basic HTML, CSS and Web knowledge</li>
                  <li>Familarity with JavaScript</li>
                  <li> Git </li>
                </ul>
              </p>
              <p>
                <strong>
                  This is a hands on workshop and attendees need to bring their
                  laptop (fully charged).
                </strong>{' '}
                We'll be sending instructions to get the softwares ready in the
                invitation email.
              </p>
              <p>
                <strong>Q: Is this event online?</strong> <br />
                <strong>A:</strong> No, this is a hands-on workshop in
                Bangalore. We're finalizing the venue and details will be sent
                to you via email.
              </p>
            </p>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Register yourself</h2>
              <p>
                Registration for current event is off. However, we are going to
                do many events in future and would love to have you. Please fill
                in the details so that we can contact you for the next event.
              </p>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScbkvYJggCVmPHa12F9kM_3i4bd1vGC4EZ08Gw0GDCPEPWg0w/viewform?embedded=true"
                width="100%"
                height="1034"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading...
              </iframe>
            </header>
            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Get Started</Link></li>
              </ul>
            </footer> */}
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
