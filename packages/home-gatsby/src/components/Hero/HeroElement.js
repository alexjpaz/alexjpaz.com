import React from "react"

import { HeroImage } from './HeroImage';
import { HeroActions } from './HeroActions';

const LinkedInUrl = 'https://www.linkedin.com/in/ajpaz';

export const Subtitle = () => (
  <p>
    I am a full stack <a className='has-text-primary' href={LinkedInUrl}>staff software engineer</a> for <a className='has-text-primary' href='https://realtor.com'>realtor.com</a> with over seven years of experience developing professional software.
    When I&apos;m not writing tests for my software where I am an avid <a className='has-text-primary' href='/projects/liftit/'>powerlifter</a>, amatuer <a className='has-text-primary' href='https://instagram.com/alexanderthepaz'> photographer</a>, casual <a className='has-text-primary' href='https://www.twitch.tv/alexjpaz'>streamer</a>, and just generally love learning and being <a className='has-text-primary' href='/blogs/pixelart/'>creative</a>.
  </p>
);

export const HeroElement = () => (
  <section className="hero is-medium is-dark is-bold">
    <div className="hero-body">
      <div className="container is-narrow">
        <HeroImage />
        <h1 className="title">
          <a className='has-text-white' href='https://alexjpaz.com/and-his-name-is/Alexander Paz'>Alexander Paz</a>
        </h1>
        <h2 className="subtitle">
          <Subtitle />
        </h2>
        <HeroActions />
      </div>
    </div>
  </section>
);
