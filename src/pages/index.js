import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

import CoverHome from "../Components/CoverHome";
import AboutSection from "../components/AboutSection";
import Card from "../components/Card";
import LogosSix from "../components/LogosSix";

import TGoldenGate from "../components/TGoldenGate";
import THooters from "../components/THooters";
import TCosuma from "../components/TCosuma";

import HowWeWorkSection from "../components/HowWeWorkSection";
import MegaCTA from "../components/MegaCTA";

// Assets
// Logos - in logo component
import tech1 from "../images/svg-ref/hooters-black.svg";
import tech2 from "../images/svg-ref/golden-gate-black.svg";
import tech3 from "../images/svg-ref/image-pro-black.svg";
import tech4 from "../images/svg-ref/2p-gastro-height-black.svg";
import tech5 from "../images/svg-ref/kozacky-med-black.svg";
import tech6 from "../images/svg-ref/foto-fest-black.svg";

// icons - in cards
import websitesIcon from "../images/svg-icons/icon-1.svg";
import graphicsIcon from "../images/svg-icons/icon-2.svg";
import marketingIcon from "../images/svg-icons/icon-3.svg";



export default function IndexPage() {
  return (
      <>
      <Layout>
        <Seo title="Digitální agentura" ></Seo> 

        <CoverHome></CoverHome>

        <AboutSection>
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

          <Card
            path="/marketing"
            icon={marketingIcon}
            title="Online marketing"
          ></Card>
        </AboutSection>

        <LogosSix 
              title="Naši klienti" 
              subtitle="Za dobu našeho působení jsme zrealizovali několik desítek projektů. Podívejte se na několik vybraných klientů se kterými jsme spolupracovali."
              logo1={tech1}
              logo2={tech2}
              logo3={tech3}
              logo4={tech4}
              logo5={tech5}
              logo6={tech6}
        ></LogosSix>

        <TGoldenGate></TGoldenGate>
        <THooters></THooters>
        <TCosuma></TCosuma>

        <HowWeWorkSection></HowWeWorkSection>
        <MegaCTA></MegaCTA>
    </Layout>
    </>
  )
}

