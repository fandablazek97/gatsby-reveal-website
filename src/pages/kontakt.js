import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

import CoverContact from "../Components/CoverContact";
import ContactFormSection from "../Components/ContactFormSection";

export default function KontaktPage() {
  return(
    <Layout>
    <Seo title="Kontakt"></Seo>

    <CoverContact></CoverContact>
    <ContactFormSection></ContactFormSection>
  </Layout>
  )
}
