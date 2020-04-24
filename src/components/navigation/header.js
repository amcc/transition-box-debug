import { Link } from "gatsby"
import React from "react"
import ModeButton from "./modebutton"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: "muted",
      p: 4,
      variant: "styles.header",
    }}
  >
    <Container>
      <Flex
        as="nav"
        sx={{
          a: {
            // color: "black",
          },
        }}
      >
        <Link
          to="/"
          sx={{
            variant: "styles.navlink",
            p: 2,
            fontWeight: "heading",
          }}
        >
          Transition Box
        </Link>
        <Link
          to="/page2"
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          Page 2
        </Link>
        <div sx={{ mx: "auto" }} />
        <Link
          to="/about"
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          About
        </Link>
        <ModeButton />
      </Flex>
    </Container>
  </header>
)

export default Header
