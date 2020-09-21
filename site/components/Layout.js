import PropTypes from "prop-types"
import Head from "next/head"
import Navbar from "../components/Navbar"

const Layout = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title ? title + " | " : null}True Taco</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content={
            description
              ? description
              : "True Taco has offered authentic, fresh, Mexican and Salvadoran food to London, ON since 2009."
          }
        />
      </Head>
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
