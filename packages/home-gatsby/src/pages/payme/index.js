import React from "react"
import SEO from "../../components/seo"

import 'bulma/css/bulma.css'

import {
  faBitcoin,
  faPaypal,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons'

import {
  faCoffee as faKofi,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Layout = React.Fragment;

export function PayLinks() {
  const Link = ({ children: label, icon, href }) => (
    <a target='_blank' rel="noopener noreferrer" href={href} className="button is-fullwidth">
      { icon &&
          <span className="icon is-medium"><FontAwesomeIcon icon={icon} /></span>
      }
      <span> {label}</span>
    </a>
  );

  return (
    <div className="buttons are-large">
      <Link href="https://blockchain.info/address/15LFWbptDobBVmgNw9ABDFBtnYg7KMh5WN" icon={faBitcoin}>
        Bitcoin
      </Link>
      <Link href="https://paypal.me/alexjpaz" icon={faPaypal}>
        Paypal
      </Link>
      <Link href="https://www.patreon.com/alexjpaz" icon={faPatreon}>
        Patreon
      </Link>
      <Link href="https://ko-fi.com/alexjpaz" icon={faKofi}>
        Ko-fi
      </Link>


    </div>
  )
}

export function BitcoinLink() {
  return (
    <a href='https://blockchain.info/address/15LFWbptDobBVmgNw9ABDFBtnYg7KMh5WN'>Bitcoin 15LFWbptDobBVmgNw9ABDFBtnYg7KMh5WN</a>
  )
}

export function PaypalLink() {
  return (
  <a href='https://paypal.me/alexjpaz'>paypal.me/alexjpaz</a>
  )
}

export function FullscreenHero() {
  return (
    <section className="hero is-primary is-fullheight">
      <HeroHead />
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title">
                Pay <a href='https://alexjpaz.com'>@alexjpaz</a>
              </h1>
              <h2 className="subtitle">
                Pay debts or chuck a couple dollars for a beer <span role="img" aria-label="a beer">🍺</span>
              </h2>
              <PayLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroHead() {
  return (

    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              @alexjpaz
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export const PaymePage = () => (
  <Layout>
    <SEO title="Payme" keywords={[`paypal`, `donate`]} />
    <FullscreenHero />
  </Layout>
);

export default PaymePage
