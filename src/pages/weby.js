import * as React from "react"

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

// import Cover from "../components/Cover";
import CoverWebsites from "../components/CoverWebsites";
import TextGray from "../components/TextGray";
import WeDoSection from "../Components/WeDoSection";
import WeDoSectionItem from "../Components/WeDoSectionItem";

import TKozackyMed from "../components/TKozackyMed";
import THooters from "../components/THooters";
import TGoldenGate from "../components/TGoldenGate";
import TCosuma from "../components/TCosuma";

import HowWeWorkSection from "../components/HowWeWorkSection";
import LogosEight from "../components/LogosEight";
import TextWhite from "../components/TextWhite";
import NextServicesSection from "../components/NextServicesSection";
import Card from "../components/Card";
import MegaCTA from "../components/MegaCTA";

// Assets
// import slide1 from "../images/img-base/websites-abstract.jpg"
// Logos
import tech1 from "../images/svg-tech/react-js.svg"
import tech2 from "../images/svg-tech/node-js.svg"
import tech3 from "../images/svg-tech/gatsby-js-symbol.svg"
import tech4 from "../images/svg-tech/sass.svg"
import tech5 from "../images/svg-tech/shoptet.svg"
import tech6 from "../images/svg-tech/wordpress.svg"
import tech7 from "../images/svg-tech/woocommerce.svg"
import tech8 from "../images/svg-tech/xd.svg"
// icons - in cards
import graphicsIcon from "../images/svg-icons/icon-2.svg";
import marketingIcon from "../images/svg-icons/icon-3.svg";


export default function WebyPage() {
  return (
    <Layout>
      <Seo title="Weby & E-shopy"></Seo>

      {/* <Cover 
        title="weby & e-shopy" 
        subtitle="Tvoříme fungující webové stránky pro Vaše podnikání. Připravíme pro Vás webové stránky, které budou odrážet přesně to, v čem jste dobří."
        slide={slide1}
      ></Cover> */}

      <CoverWebsites></CoverWebsites>

      <TextGray 
        title="Proč chtít web?" 
        subtitle="Webová stránka je ve většině případů první kontakt zákazníka s Vaším podnikáním. A jelikož se dnes už nepodniká stejně jako v divokých devadesátkách, mít správně udělanou webovou prezentaci je naprostý základ."
      ></TextGray>

      <WeDoSection>
        <WeDoSectionItem title="firemní & prezentační weby" subtitle="Chcete zapůsobit na Vaše potencionální zákazníky? Vytvoříme pro Vaši firmu moderní online prezentaci."/>

        <WeDoSectionItem title="Obsahové weby & blogy" subtitle="Na webu od nás se můžete pochlubit fotkami z Vaší letošní dovolené v Chorvatsku. Zvládneme ale i složitější projekty vzdělávacího nebo prezentačního charakteru."/>

        <WeDoSectionItem title="E-shopy a prodejní weby" subtitle="Máte hotový produkt, který potřebujete prodat zákazníkům? Zvládneme od jednoduchých e-shopu s několika produkty až po složitější projekty."/>

        <WeDoSectionItem title="Webové aplikace" subtitle="Jednodušší i složitější aplikace běžící ve webovém rozhraní zvládneme levou zadní."/>
      </WeDoSection>

      <TGoldenGate></TGoldenGate>
      <TKozackyMed></TKozackyMed>
      <THooters></THooters>
      <TCosuma></TCosuma>
      

    <HowWeWorkSection></HowWeWorkSection>

    <LogosEight 
        title="Nástroje které používáme" 
        subtitle=""
        logo1={tech1}
        alt1="React JS"
        logo2={tech2}
        alt2="Node JS"
        logo3={tech3}
        alt3="Gatsby JS"
        logo4={tech4}
        alt4="SASS language"
        logo5={tech5}
        alt5="Shoptet"
        logo6={tech6}
        alt6="Wordpress"
        logo7={tech7}
        alt7="Woocommerce"
        logo8={tech8}
        alt8="Adobe XD"
    ></LogosEight>

    <TextWhite 
      title="Jak je to cenově?" 
      subtitle="Ke každému projektu přistupujeme individuálně a cena se určuje na základě požadavků a náročnosti projektu. Ale nebojte, vždy přihlédneme k vašemu rozpočtu."
    ></TextWhite>

    <NextServicesSection>
      <Card
        path="/grafika"
        icon={graphicsIcon}
        title="Grafika & branding"
      ></Card>

      <Card
        path="/marketing"
        icon={marketingIcon}
        title="Online marketing"
      ></Card>
    </NextServicesSection>
    
    <MegaCTA></MegaCTA>
  </Layout>
  )
}
