import React from "react"

import SEO from "../../components/seo"

import 'bulma/css/bulma.css'
import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { HeroElement } from '../../components/Hero/HeroElement';
import { Footer } from '../../components/Footer/';

//import {
  //faBell
//} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faTwitter,
  faLinkedin,
  faKeybase,
  faInstagram,

} from '@fortawesome/free-brands-svg-icons'

const Layout = React.Fragment;

const HeroSocialLinks = () => {
  const links = [
    { href: "https://github.com/alexjpaz", label: "github", icon: faGithub } ,
    { href: "https://instagram.com/alexanderthepaz", label: "instagram", icon: faInstagram },
    { href: "https://twitter.com/alexjpaz", label: "twitter", icon: faTwitter },
    { href: "https://www.linkedin.com/in/ajpaz/", label: "linkedin", icon: faLinkedin },
    { href: "https://keybase.io/alexjpaz", label: "keybase", icon: faKeybase },
  ];

  return (
    <div className="buttons are-medium">
      {
        links.map((link, i) => (
          <a key={i} target='_blank' rel="noopener noreferrer" className="button is-fullwidth" href={link.href}>
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
    { href: "https://polly.alexjpaz.com", label: "🦜 polly"  } ,
    { href: "https://liftit.alexjpaz.com", label: "💪 liftit"  } ,
    { href: "https://alexjpaz.com/quack", label: "quack 🦆"  } ,
    { href: "http://soundboard.alexjpaz.com?key=hold_up", label: "soundboard"  } ,
    { href: "https://alexjpaz.com/everyday/eat%20%F0%9F%8C%AE", label: "eat 🌮 everyday"  } ,
  ];

  return (
    <div className="buttons are-medium">
      {
        links.map((link, i) => (
          <a key={i} target='_blank' rel="noopener noreferrer" className="button is-fullwidth" href={link.href}>
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


const Home = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroElement />
    <div className='container is-narrow'>
      <HeroSocialLinks />
      <hr />
      <HeroAppLinks />
    </div>
    <Footer />
  </Layout>
);

export default Home;
