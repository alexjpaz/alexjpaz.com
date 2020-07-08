import React from "react"

import { HeroImage } from './HeroImage';
import { HeroActions } from './HeroActions';

const LinkedInUrl = 'https://www.linkedin.com/in/ajpaz';

export const HeroLink = ({ href, children }) => (
  <a className='has-text-primary' href={href} target='_blank' rel="noopener noreferrer">{ children }</a>
);

export class SayAlexPaz extends React.Component {
  handleClick() {
    const audio = new Audio();
    audio.src = 'https://soundboard.alexjpaz.com/alexpaz'
    audio.play();
  }
  render () {
    return (
      <span>Most people just call me <a onClick={() => this.handleClick()} className='has-text-primary'>Paz</a>.</span>
    );
  }
}

export const CurrentWork = () => (
  <HeroLink href='https://realtor.com'>realtor.com</HeroLink>
);

export const Subtitle = () => (
  <p>
    <SayAlexPaz /> I am a full stack <HeroLink href={LinkedInUrl}>staff software engineer</HeroLink> for <CurrentWork /> with over seven years of experience developing professional software.
    When I&apos;m not writing tests for my software I am an avid <HeroLink className='has-text-primary' href='/projects/liftit/'>powerlifter</HeroLink>, amatuer <HeroLink className='has-text-primary' href='https://instagram.com/alexanderthepaz'> photographer</HeroLink>, casual <HeroLink className='has-text-primary' href='https://www.twitch.tv/alexjpaz'>streamer</HeroLink>, and just generally love learning and being <HeroLink className='has-text-primary' href='/blogs/pixelart/'>creative</HeroLink>.
  </p>
);

export const HeroElement = () => (
  <section className="hero is-medium is-dark is-bold">
    <div className="hero-body">
      <div className="container is-narrow">
        <HeroImage />
        <h1 className="title">
          <a className='has-text-white' target='_blank' rel="noopener noreferrer" href='https://alexjpaz.com/and-his-name-is/Alexander Paz'>Alexander Paz</a>
        </h1>
        <h2 className="subtitle">
          <Subtitle />
        </h2>
        <HeroActions />
      </div>
    </div>
  </section>
);
