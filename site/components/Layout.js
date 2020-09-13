import PropTypes from "prop-types"
import Head from "next/head"
import Navbar from "../components/Navbar"

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title ? title + " | " : null}True Taco</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
}

export default Layout
