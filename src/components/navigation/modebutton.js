import React from "react"
/** @jsx jsx */
import { jsx, useColorMode, Button } from "theme-ui"

const ModeButton = props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      bg="background"
      color="text"
      sx={{
        width: "5rem",
      }}
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default")
        // setColorMode(colorMode === "default" ? "light" : "default")
      }}
    >
      {colorMode === "default" ? "Dark" : "Light"}
      {/* {colorMode === "default" ? "Light" : "Dark"} */}
    </Button>
  )
}

export default ModeButton
