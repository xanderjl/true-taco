import React from "react"
import { Box } from "@chakra-ui/react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import customTheme from "../@chakra-ui/gatsby-plugin/theme"

export const Container = props => {
  return (
    <Box maxW={customTheme.maxWidth} h="100%" m="auto" {...props}>
      {props.children}
    </Box>
  )
}

export const Section = props => {
  return (
    <Box p={["3rem 1.25rem"]} {...props}>
      {props.children}
    </Box>
  )
}

const Layout = ({ title, description, children, bg }) => {
  return (
    <Box
      d="flex"
      flexDir="column"
      minH="100vh"
      overflowX="hidden"
      bg={bg ? bg : "white"}
    >
      <SEO title={title && title} description={description && description} />
      <Box flex={1}>
        <Navbar />
        <Box pt={["3.25rem", "4rem"]}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
}

export default Layout
