import * as React from "react"

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

// import Cover from "../components/Cover";
import CoverGraphics from "../components/CoverGraphics";
import TextGray from "../components/TextGray";
import WeDoSection from "../Components/WeDoSection";
import WeDoSectionItem from "../Components/WeDoSectionItem";

import TEventReality from "../components/TEventReality";
import TMely from "../components/TMely";

import LogosSix from "../components/LogosSix";
import NextServicesSection from "../components/NextServicesSection";
import Card from "../components/Card";
import MegaCTA from "../components/MegaCTA";

// Assets
// import slide1 from "../images/img-base/hero-3.jpg"
// Logos
import tech1 from "../images/svg-tech/photoshop.svg";
import tech2 from "../images/svg-tech/xd.svg";
import tech3 from "../images/svg-tech/indesign.svg";
import tech4 from "../images/svg-tech/blender.svg";
import tech5 from "../images/svg-tech/illustrator.svg";
import tech6 from "../images/svg-tech/premiere.svg";
// icons - in cards
import websitesIcon from "../images/svg-icons/icon-1.svg";
import marketingIcon from "../images/svg-icons/icon-3.svg";
  


export default function GrafikaPage() {
  return (
    <Layout>
      <Seo title="Grafika & Branding"></Seo>

      {/* <Cover 
        title="Grafika & branding" 
        subtitle="První dojem dvakrát neuděláš! Lidé vás často soudí podle vzhledu. Proto skvělý branding je první krok k úspěšnému podnikání."
        slide={slide1}
      ></Cover> */}
      <CoverGraphics></CoverGraphics>

      <TextGray 
        title="Moderní vzhled prodává" 
        subtitle="Branding není pouze logo vaší firmy. Skrývá se v něm mnohem více… Vzpomeňte si třeba na firmy jako Apple nebo Coca Cola. V brandu těchto firem se skrývá vize, mise i vášeň pro jejich produkty. Proto vhodně a moderně vytvořený vizuál firmy je další krok do světa úspěšného podnikání. Použijte svůj brand jako záruku kvality."
      ></TextGray>

      <WeDoSection>
        <WeDoSectionItem title="Tvorba loga a vizuální identity" subtitle="Kompletní vizuální styl pro vaši značku obsahující veškeré komponenty jako je logo v různých variantách, typografie, barevné schéma, ilustrace nebo fotografie. Vše v přehledném PDF s návodam, jak styl správně používat."/>

        <WeDoSectionItem title="Tvorba tiskovin" subtitle="Veškeré reklamní a upomínkové předměty jako jsou vizitky, letáky, slevové vouchery atd. Vše graficky navrhneme a případně i vyrobíme. Nemusíte se o nic starat."/>

        <WeDoSectionItem title="Fotografie" subtitle="Propagační fotografie Vaší služby, produktů na eshop nebo na sociální sítě, případně i firemní portréty lidí ve Vaší firmě. Představivosti se meze nekladou."/>

        <WeDoSectionItem title="Video" subtitle="Zvládneme super Stories natočené na iPhone. Ale taky Profesionální, minutu až tři dlouhý reklamní spot, u kterého se divák nebude nudit."/>

        <WeDoSectionItem title="Tisk a velkoplošný tisk" subtitle="Navržené materiály u našich dodavatelů necháme vyrobit a přivezeme vám je. Ať už potřebujete 500 letáků, billboardy pro celé město, polepit výlohu či firemní vozy."/>

        <WeDoSectionItem title="3D vizualizace" subtitle="Potřebujete vidět produkt který ještě fyzicky nemáte nebo není možné jej jinak zachytit? Máte plány budovy a potřebujete ukázat klientům, jak bude vypadat až bude postavená? Vdechneme život vašim představám."/>
      </WeDoSection>

      <TMely></TMely>
      <TEventReality></TEventReality>

      <LogosSix 
        title="Nástroje které používáme" 
        logo1={tech1}
        alt1="Adobe Photoshop"
        logo2={tech2}
        alt2="Adobe XD"
        logo3={tech3}
        alt3="Adobe Indesign"
        logo4={tech4}
        alt4="Blender"
        logo5={tech5}
        alt5="Adobe Illustrator"
        logo6={tech6}
        alt6="Adobe Premiere Pro"
    ></LogosSix>

    <NextServicesSection>

      <Card
        path="/weby"
        icon={websitesIcon}
        title="Weby & E-shopy"
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
