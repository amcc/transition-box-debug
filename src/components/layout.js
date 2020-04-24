/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import Header from "./navigation/header"
import Footer from "./navigation/footer"
import { Global } from "@emotion/core"
import { Container } from "theme-ui"
import Transition from "./theming/transition"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  React.useEffect(() => {
    console.log("mount")
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Transition {...props}>
        <Container p="4" key={"container-" + props.location.pathname}>
          <main>{props.children}</main>
        </Container>
      </Transition>
      <Footer />
    </>
  )
}

export default Layout
