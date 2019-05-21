import React from "react"

import SEO from "../../components/seo"

import 'bulma/css/bulma.css'
import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import {
  //faBell
//} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faTwitter,
  faLinkedin,
  faKeybase
} from '@fortawesome/free-brands-svg-icons'

const Layout = React.Fragment;

const LinkedInUrl = 'https://www.linkedin.com/in/ajpaz';

const HeroElement = () => (
  <div className='text-center'>
    <HeroImage />


    <h1 className="title">
    <a className='link-unstyled' href='https://alexjpaz.com/and-his-name-is/Alexander Paz'>Alexander Paz</a>
    </h1>
    <p>full stack <a href={LinkedInUrl}>staff software engineer</a> for <a href='https://realtor.com'>realtor.com</a> with over seven years of experience developing professional software.</p>
  </div>
);

const HeroImage = () => (
  <figure className="image">
    <img alt="avatar" className="is-rounded" src="//1.gravatar.com/avatar/830145a71ea797aaff758c7432411d2a?size=500" />
  </figure>
);

const HeroSocialLinks = () => {
  const links = [
    { href: "https://github.com/alexjpaz", label: "github", icon: faGithub } ,
    { href: "https://twitter.com/alexjpaz", label: "twitter", icon: faTwitter },
    { href: "https://www.linkedin.com/in/ajpaz/", label: "linkedin", icon: faLinkedin },
    { href: "https://keybase.io/alexjpaz", label: "keybase", icon: faKeybase },
  ];

  return (
    <div className="buttons are-medium">
      {
        links.map((link, i) => (
          <a key={i} className="button is-fullwidth" href={link.href}>
            {link.icon &&
              <span className='icon is-medium'><FontAwesomeIcon icon={link.icon} /></span>
            }
            <span>{link.label}</span>
          </a>
       ))
      }
    </div>
  );
};

const HeroAppLinks = () => {
  const links = [
    { href: "http://soundboard.alexjpaz.com?key=hold_up", label: "soundboard"  } ,
    { href: "https://alexjpaz.com/everyday/eat%20%F0%9F%8C%AE", label: "eat 🌮 everyday"  } ,
    { href: "https://alexjpaz.com/fast", label: "gotta go fast"  } ,
    { href: "https://alexjpaz.com/doggo", label: "summon doggo 🐶"  } ,
  ];

  return (
    <div className="buttons are-medium">
      {
        links.map((link, i) => (
          <a key={i} className="button is-fullwidth" href={link.href}>
            {link.icon &&
              <span className='icon is-medium'><FontAwesomeIcon icon={link.icon} /></span>
            }
            <span>{link.label}</span>
          </a>
       ))
      }
    </div>
  );
};

const HomeFooter = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <span>Built by </span><a href="https://twitter.com/alexjpaz">@alexjpaz</a>.
      </p>
      <p><a href='https://www.gatsbyjs.org/'>Built with Gatsby</a></p>
      <p><span role="img" aria-label="ending note">🤔</span></p>
      <p>© 2019</p>
    </div>
  </footer>
);

const Home = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='container'>
      <HeroElement />
      <hr />
      <HeroSocialLinks />
      <hr />
      <HeroAppLinks />
    </div>
    <HomeFooter />
  </Layout>
);

export default Home;
