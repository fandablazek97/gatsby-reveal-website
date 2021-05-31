import * as React from "react"

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

// import Cover from "../components/Cover";
import CoverMarketing from "../components/CoverMarketing";
import TextGray from "../components/TextGray";
import WeDoSection from "../Components/WeDoSection";
import WeDoSectionItem from "../Components/WeDoSectionItem";

import TKozackyMed from "../components/TKozackyMed";
import THooters from "../components/THooters";
import TEventReality from "../components/TEventReality";

import LogosSix from "../components/LogosSix";
import NextServicesSection from "../components/NextServicesSection";
import Card from "../components/Card";
import MegaCTA from "../components/MegaCTA";

// Assets
// import slide1 from "../images/img-base/marketing-2.jpeg"
// Logos
import tech1 from "../images/svg-tech/google-analytics.svg";
import tech2 from "../images/svg-tech/s-klik.svg";
import tech3 from "../images/svg-tech/yoast.svg";
import tech4 from "../images/svg-tech/facebook-pixel.svg";
import tech5 from "../images/svg-tech/shoptet.svg";
import tech6 from "../images/svg-tech/g-ads.svg";
// icons - in cards
import websitesIcon from "../images/svg-icons/icon-1.svg";
import graphicsIcon from "../images/svg-icons/icon-2.svg";
  


export default function MarketingPage() {
  return (
    <Layout>
      <Seo title="Online Marketing"></Seo>

      {/* <Cover 
        title="Online Marketing" 
        subtitle="Postaráme se o to aby se Váš produkt nebo služby skvěle prodávali v online světě. Věříme si ale i na offline."
        slide={slide1}
      ></Cover> */}

      <CoverMarketing></CoverMarketing>

      <TextGray 
        title="Vstupenka do světa onlinu" 
        subtitle="Vítejte ve světě neomezených možností. Začít propagovat produkt či službu pomocí sociálních sítí je nejsnazší cesta k získání prvních zákazníků. Věřte nebo ne, ale Facebook používá bezmála 3 miliardy uživatelů. A kde jinde najdete tolik potenciálních zákazníků?"
      ></TextGray>

      <WeDoSection> 
        <WeDoSectionItem title="Správa sociálních sítí" subtitle="Postaráme se kompletně o Vaše sociální sítě. Specializujeme se především na Facebook a Instagram, ale zvládneme i jiné.  Od návrhu content planu až po postování příspěvků nebo nastavení reklamy. O vaše sociální sítě bude postaráno."/>

        <WeDoSectionItem title="Příprava online kampaně" subtitle="Nevíte si rady s tím kde a jak na internetu oslovovat vaše zákazníky? Pomůžeme Vám s kompletní přípravou online kampaně."/>

        <WeDoSectionItem title="PPC reklamy" subtitle="Pomocí vhodně nastavené PPC reklamy přivedeme na webové stránky relevantní uživatele."/>

        <WeDoSectionItem title="SEO" subtitle="Pomocí optimalizace pro vyhledávače zvýšíte návštěvnost vašeho webu z organického vyhledávání. Vždy pamatujte že, SEO je investice do budoucna!"/>
      </WeDoSection>

      <TKozackyMed></TKozackyMed>
      <THooters></THooters>
      <TEventReality></TEventReality>

    <LogosSix 
        title="Nástroje které používáme" 
        logo1={tech1}
        alt1="Google Analytics"
        logo2={tech2}
        alt2="Sklik"
        logo3={tech3}
        alt3="Yoast"
        logo4={tech4}
        alt4="Facebook pixel"
        logo5={tech5}
        alt5="Shoptet"
        logo6={tech6}
        alt6="Google Ads"
    ></LogosSix>

    <NextServicesSection>

      <Card
        path="/weby"
        icon={websitesIcon}
        title="Weby & E-shopy"
      ></Card>

      <Card
        path="/grafika"
        icon={graphicsIcon}
        title="Grafika & branding"
      ></Card>

    </NextServicesSection>

    <MegaCTA></MegaCTA>
  </Layout>
  )
}
