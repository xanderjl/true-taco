import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"

const Layout = ({ title, description, children }) => {
  return (
    <div>
      <SEO title={title && title} description={description && description} />
      <Navbar />
      {children}
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
