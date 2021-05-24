import * as React from "react"

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

// import Cover from "../components/Cover";
import CoverWebsites from "../components/CoverWebsites";
import TextGray from "../components/TextGray";
import WeDoSectionFour from "../Components/WeDoSectionFour";

import TGoldenGate from "../components/TGoldenGate";
import THooters from "../components/THooters";
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

      <WeDoSectionFour 
        titlelist1="firemní & prezentační weby" subtitlelist1="Chcete zapůsobit na Vaše potencionální zákazníky? Vytvoříme pro Vaši firmu moderní online prezentaci."
        titlelist2="Obsahové weby & blogy" subtitlelist2="Na webu od nás se můžete pochlubit fotkami z Vaší letošní dovolené v Chorvatsku. Zvládneme ale i složitější projekty vzdělávacího nebo prezentačního charakteru."
        titlelist3="webové aplikace" subtitlelist3="Jednodušší i složitější aplikace běžící ve webovém rozhraní zvládneme levou zadní. Ale i když makáme fakt fest, tak aplikace pro iOS a Android ještě neumíme. Budete se proto muset poohlédnout jinde."
        titlelist4="Produktové prodejní weby" subtitlelist4="Máte hotový produkt, který potřebujete prodat zákazníkům? My se o to postaráme."
      ></WeDoSectionFour>

      <TGoldenGate></TGoldenGate>
      <THooters></THooters>
      <TCosuma></TCosuma>

    <HowWeWorkSection></HowWeWorkSection>

    <LogosEight 
        title="Nástroje které používáme" 
        subtitle=""
        logo1={tech1}
        logo2={tech2}
        logo3={tech3}
        logo4={tech4}
        logo5={tech5}
        logo6={tech6}
        logo7={tech7}
        logo8={tech8}
    ></LogosEight>

    <TextWhite 
      title="Jak je to cenově?" 
      subtitle="Ke každému projektu přistupujeme individuálně a cena se určuje na základě požadavků a náročnosti projektu. Jednoduše, online vizitka bude stát asi míň, než komplexní firemní web s několika stránkami, podstránkami a blogem. Ale nebojte, vždy přihlédneme k vašemu rozpočtu."
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
