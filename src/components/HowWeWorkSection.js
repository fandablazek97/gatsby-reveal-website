import React from 'react'

// Animation
import { motion } from "framer-motion"
import {useScroll} from "./hooks/useScroll"
import {fade, fadeItem} from "./hooks/animation"

// Assets
import one from "../images/svg-base/1.svg";
import two from "../images/svg-base/2.svg";
import three from "../images/svg-base/3.svg";
import infinite from "../images/svg-base/infinite.svg";

export default function HowWeWorkSection() {

    const [element, controls] = useScroll();

    return (
        <section className="process bg-white pt-8 pb-5">

            <div className="grid wrap">
                <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="cell">
                    <motion.h2 variants={fadeItem}>Jak Fungujeme</motion.h2>
                    {/* <motion.p variants={fadeItem}>Pokud zrovna nečekáme na podklady od klientů, tak začínáme na schůzce s Vámi. </motion.p> */}
                </motion.div>
            </div>

            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="grid wrap">

                <motion.div variants={fadeItem} className="cell l-3 m-6 s-12">
                    <div className="process__number">
                        <img src={one} alt="1"/>
                    </div>
                    <h4 className="process__heading h3">Schůzka</h4>
                    <p>Začínáme na nezávazné schůzce, kde se pobavíme se o vašem projektu a možnostech jeho realizace. Na základě schůzky sestavíme cenovou kalkulaci a realizační plán, jak celý proces bude probíhat.</p>
                </motion.div>

                <motion.div variants={fadeItem} className="cell l-3 m-6 s-12">
                    <div className="process__number">
                        <img src={two} alt="2"/>
                    </div>
                    <h4 className="process__heading h3">Tvorba designu</h4>
                    <p>Tvorba designu je začátkem celého procesu. Navrhneme vzhled webu tak, aby byl moderní, intuitivní a každý uživatel jej dokázal bez problému používat. Vše s vámi budeme konzultovat a pokud s návrhem budete spokojení, pustíme se do realizace.</p>
                </motion.div>

                <motion.div variants={fadeItem} className="cell l-3 m-6 s-12">
                    <div className="process__number">
                        <img src={three} alt="3"/>
                    </div>
                    <h4 className="process__heading h3">Realizace</h4>
                    <p>Celý web nakódujeme podle vytvořeného návrhu, vyladíme veškerou funkčnost, v případě potřeby napojíme na redakční systém a další nástroje třetích stran. V předem domluveném termínu dostanete hotový produkt, který bude ihned prodávat vaše podnikání.</p>
                </motion.div>

                <motion.div variants={fadeItem} className="cell l-3 m-6 s-12">
                    <div className="process__number">
                        <img src={infinite} alt="4"/>
                    </div>
                    <h4 className="process__heading h3">Předání a další rozvoj</h4>
                    <p>Předáním webu většinou naše práce nekončí. Právě naopak! Díky statistikám z analytických nástrojů vyhodnocujeme chování uživatelů a díky tomu jsme schopni navrhovat další vylepšení a dále produkt rozvíjet.</p>
                </motion.div>

        </motion.div>

        </section>
    )
}
