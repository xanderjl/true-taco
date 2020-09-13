import React from "react"
import Head from "next/head"
import Navbar from "../components/Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
