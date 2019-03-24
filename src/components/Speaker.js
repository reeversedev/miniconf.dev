import React from 'react'

const Saurabh = {
  speakerImage: 'tbd',
  socialMedia: [
    {
      type: 'twitter',
      url: 'https://twitter.com/rajpal_saurabh',
    },
    {
      type: 'linkedIn',
      url: 'https://www.linkedin.com/in/rajpalsaurabh/',
    },
  ],
  speakerName: 'Saurabh Rajpal',
  speakerIntro:
    'PWA, AMP, mSite Performance & AoG Evangelist | Passionate Community Contributor & Event Speaker',
  speakerTitle: 'Technical Solutions Consultant at Google',
}

const Speaker = ({
  speakerImage,
  socialMedia,
  speakerName,
  speakerIntro,
  speakerTitle,
}) => (
  <div className="spotlight">
    <div className="content">
      <header className="major">
        <h2>Saurabh Rajpal</h2>
      </header>
      <p>
        <strong>Technical Solutions Consultant at Google</strong>
        {Saurabh.speakerIntro}
      </p>
      <p />
      <ul className="actions">
        <li>
          <a
            href="https://twitter.com/rajpal_saurabh"
            className="icon fa-twitter alt"
            style={{ color: '#50a7f3' }}
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rajpalsaurabh/"
            className="icon fa-linkedin alt"
            style={{ color: '#50a7f3' }}
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
    <span className="image">
      <img src={speakerImage} alt="Saurabh Rajpal" />
    </span>
  </div>
)

export default Speaker
