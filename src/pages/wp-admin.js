import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

import CoverWpAdmin from "../components/CoverWpAdmin";

export default function WpAdmin() {
    return (
        <Layout>
            <Seo title="404: stránka nenalezena" />
            
            <CoverWpAdmin></CoverWpAdmin>
        </Layout>
    )
}
