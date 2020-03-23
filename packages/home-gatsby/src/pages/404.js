import React from "react"

import LayoutFull from "../components/layout-full"
import SEO from "../components/seo"

import 'bulma/css/bulma.css'

const NotFoundPage = () => (
  <LayoutFull>
    <SEO title="404: Not found" />

    <div className="container has-text-centered">
      <h1 className="title">
        NOT FOUND
      </h1>
      <h2 className="subtitle">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </h2>
      <section className='section'>
        <a href="/" className='button is-large'>Go Home</a>
      </section>
    </div>
  </LayoutFull>
)

export default NotFoundPage
