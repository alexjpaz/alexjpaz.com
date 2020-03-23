import React from "react"

import { HeroImage } from './HeroImage';
import { HeroActions } from './HeroActions';

const LinkedInUrl = 'https://www.linkedin.com/in/ajpaz';

export const HeroElement = () => (
  <section className="hero is-medium is-dark is-bold">
    <div className="hero-body">
      <div className="container">
        <HeroImage />
        <h1 className="title">
          <a className='has-text-white' href='https://alexjpaz.com/and-his-name-is/Alexander Paz'>Alexander Paz</a>
        </h1>
        <h2 className="subtitle">
          <p>full stack <a href={LinkedInUrl}>staff software engineer</a> for <a href='https://realtor.com'>realtor.com</a> with over seven years of experience developing professional software.</p>
        </h2>
        <HeroActions />
      </div>
    </div>
  </section>
);
