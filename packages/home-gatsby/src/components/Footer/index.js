
import React from "react"

import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faBitcoin,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';

const BuildInformationFooter = ({ build = {} }) => (
    <small>{build.sha} - {build.number}</small>
);

const PaymeLink = () => (
  <a href="/payme" aria-label="donate link">
    <span className="icon"><FontAwesomeIcon icon={faBitcoin} /></span>
    <span className="icon"><FontAwesomeIcon icon={faPaypal} /></span>
  </a>
);

export const Footer = () => (
  <StaticQuery
    query={graphql`
      query HomeFooter {
        site {
          siteMetadata {
            author
            build {
              sha
              number
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <span>Built by </span><a href="https://twitter.com/alexjpaz">{ data.site.siteMetadata.author }</a>
            <span> using </span>
            <a href='https://www.gatsbyjs.org/'>Gatsby</a>
          </p>
          <p>
            <small><PaymeLink /></small>
          </p>
          <p>
            <small><a href='https://github.com/alexjpaz/alexjpaz.com'><BuildInformationFooter build={data.site.siteMetadata.build} /></a></small>
          </p>
          <p><span role="img" aria-label="ending note">🤔</span></p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    )}/>
);

export default Footer;
