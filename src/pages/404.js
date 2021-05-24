import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

import Cover404 from "../components/Cover404";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: stránka nenalezena" />
    
    <Cover404></Cover404>
  </Layout>
)

export default NotFoundPage
