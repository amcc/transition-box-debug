import React from "react"
import Layout from "./../../components/layout"

const CustomLayout = ({ element, props }, pluginOptions) => {
  return <Layout {...props}>{element}</Layout>
}

export default CustomLayout
