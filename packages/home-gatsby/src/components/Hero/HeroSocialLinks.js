import React from "react"

import {
  faGithub,
  faTwitter,
  faLinkedin,
  faKeybase,
  faInstagram,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeroSocialLinks = () => {
  const links = [
    { href: "https://github.com/alexjpaz", label: "github", icon: faGithub } ,
    { href: "https://www.twitch.tv/alexjpaz", label: "twitch", icon: faTwitch },
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


