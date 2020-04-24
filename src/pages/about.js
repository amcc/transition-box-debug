import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/navigation/seo"

const IndexPage = props => (
  <Layout {...props}>
    <SEO title="Home" />
    <h1>About transition site</h1>
    <p>
      Affogato beard hashtag intelligentsia 3 wolf moon iPhone swag williamsburg
      paleo. Meditation brooklyn freegan mlkshk, slow-carb thundercats pinterest
      hexagon umami. Cronut hot chicken selfies lomo chillwave tilde, quinoa
      vinyl sustainable humblebrag hammock. Organic bespoke affogato vice synth
      vape, fingerstache umami scenester hoodie aesthetic snackwave glossier
      90's.
    </p>
  </Layout>
)

export default IndexPage
