import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/navigation/seo"

const IndexPage = props => (
  <Layout {...props}>
    <SEO title="Home" />
    <h1>transition box</h1>
    <p>
      Health goth vegan pinterest lumbersexual retro fashion axe, everyday carry
      mlkshk asymmetrical dreamcatcher. You probably haven't heard of them
      keytar vinyl raclette taiyaki shaman enamel pin farm-to-table. Shaman
      tattooed pork belly PBR&B. Fingerstache literally af viral mumblecore.
      Knausgaard affogato taiyaki migas. Vexillologist tumeric kickstarter,
      yuccie kitsch tofu drinking vinegar bitters marfa brooklyn shaman +1 XOXO
      twee polaroid. Retro palo santo narwhal pour-over.
    </p>
    <Image />
  </Layout>
)

export default IndexPage
