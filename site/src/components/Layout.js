import React from "react"
import { Box } from "@chakra-ui/core"
import PropTypes from "prop-types"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"

const Layout = ({ title, description, children }) => {
  return (
    <Box overflowX="hidden">
      <SEO title={title && title} description={description && description} />
      <Navbar />
      <Box pt="72px">{children}</Box>
    </Box>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
