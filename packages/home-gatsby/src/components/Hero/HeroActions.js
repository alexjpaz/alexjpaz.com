import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faBlog,
} from '@fortawesome/free-solid-svg-icons'

export const HeroActions = () => (
  <div className="buttons">
    <a className="button is-primary" target="_blank" rel="noopener noreferrer" href="https://alexjpaz.github.io">
      <span className='icon is-medium'><FontAwesomeIcon icon={faBlog} /></span>
      <span>Dev Blog</span>
    </a>
  </div>
);
