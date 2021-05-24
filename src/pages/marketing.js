import * as React from "react"

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

// import Cover from "../components/Cover";
import CoverMarketing from "../components/CoverMarketing";
import TextGray from "../components/TextGray";
import WeDoSectionFour from "../Components/WeDoSectionFour";

import TGoldenGate from "../components/TGoldenGate";
import THooters from "../components/THooters";
import TCosuma from "../components/TCosuma";

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
        subtitle="Vítejte ve světě neomezených možností. Začít propagovat produkt či službu pomocí sociálních sítí je nejsnazší cesta k získání prvních zákazníků. Věřte nebo ne ale Facebook používá bezmála 3 miliardy uživatelů. A kde jinde najdete tolik potenciálních zákazníků?"
      ></TextGray>

      <WeDoSectionFour 
        titlelist1="správa sociálních sítí" subtitlelist1="Postaráme se kompletně o Vaše sociální sítě. Specializujeme se především na Facebook a Instagram. Navrhneme komunikaci, obsahovou strategii, vytvoříme obsah i publikační plán. "
        titlelist2="příprava online kampaně" subtitlelist2="Nevíte si rady s tím kde a jak na internetu oslovovat vaše zákazníky? Pomůžeme Vám s kompletní přípravou online kampaně."
        titlelist3="PPC reklamy" subtitlelist3="Pomocí vhodně nastavené PPC reklamy přivedeme na webové stránky relevantní uživatele."
        titlelist4="Výkonnostní marketing" subtitlelist4="Pomocí optimalizace pro vyhledávače zvýšíte návštěvnost vašeho webu z organického vyhledávání. Vždy pamatujte že, SEO je investice do budoucna!"
      ></WeDoSectionFour>

      <TGoldenGate></TGoldenGate>
      <THooters></THooters>
      <TCosuma></TCosuma>

    <LogosSix 
        title="Nástroje které používáme" 
        subtitle=""
        logo1={tech1}
        logo2={tech2}
        logo3={tech3}
        logo4={tech4}
        logo5={tech5}
        logo6={tech6}
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
