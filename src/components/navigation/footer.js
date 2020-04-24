import { Link } from "gatsby"
import React from "react"
import ModeButton from "./modebutton"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, NavLink } from "theme-ui"

const Footer = () => (
  <footer
    sx={{
      bg: "muted",
      p: 4,
      variant: "styles.footer",
    }}
  >
    <Container>
      <Flex
        as="nav"
        sx={{
          a: {
            color: "black",
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
        <div sx={{ mx: "auto" }} />
        <div>
          <div>© {new Date().getFullYear()} Transition Box</div>
        </div>
      </Flex>
    </Container>
  </footer>
)

export default Footer
