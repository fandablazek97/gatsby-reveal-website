/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// Components
import Navbar from "./Navbar"
import CookiesBar from "./CookiesBar"
import CtaButton from "./CtaButton"
import Footer from "./Footer"

// Styles
import "../scss/main.css"

// Icons
import "../scss/fw_icons/iconfont/icofont.css";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <Navbar></Navbar>
        <main>{children}</main>
       <Footer></Footer>
       <CtaButton></CtaButton>
       <CookiesBar></CookiesBar>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
