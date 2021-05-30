import React from 'react'

// Components
import HowWeWorkItem from "./HowWeWorkItem"

// Animation
import { motion } from "framer-motion"
import {useScrollAnim} from "./hooks/useScrollAnim"
import {fade, fadeItem} from "./hooks/animation"

// Assets
import one from "../images/svg-base/1.svg";
import two from "../images/svg-base/2.svg";
import three from "../images/svg-base/3.svg";
import infinite from "../images/svg-base/infinite.svg";

export default function HowWeWorkSection() {

    const [element, controls] = useScrollAnim();

    return (
        <section className="process bg-white pt-8 pb-5">

            <div className="grid wrap">
                <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="cell">
                    <motion.h2 variants={fadeItem}>Jak Fungujeme</motion.h2>
                    {/* <motion.p variants={fadeItem}>Pokud zrovna nečekáme na podklady od klientů, tak začínáme na schůzce s Vámi. </motion.p> */}
                </motion.div>
            </div>

            <motion.div className="grid wrap">

                <HowWeWorkItem
                    symbol={one}
                    title="Schůzka"
                    caption="Začínáme na nezávazné schůzce, kde se pobavíme se o vašem projektu a možnostech jeho realizace. Na základě schůzky sestavíme cenovou kalkulaci a realizační plán, jak celý proces bude probíhat."
                />

                <HowWeWorkItem
                    symbol={two}
                    title="Tvorba designu"
                    caption="Tvorba designu je začátkem celého procesu. Navrhneme vzhled webu tak, aby byl moderní, intuitivní a každý uživatel jej dokázal bez problému používat. Vše s vámi budeme konzultovat a pokud s návrhem budete spokojení, pustíme se do realizace."
                />

                <HowWeWorkItem
                    symbol={three}
                    title="Realizace"
                    caption="Celý web vytvoříme podle zadaného návrhu, vyladíme veškerou funkčnost, v případě potřeby napojíme na redakční systém a další nástroje třetích stran. V předem domluveném termínu dostanete hotový produkt, který bude ihned prodávat vaše podnikání."
                />

                <HowWeWorkItem
                    symbol={infinite}
                    title="Předání a další rozvoj"
                    caption="Předáním webu většinou naše práce nekončí. Právě naopak! Díky datům z analytických nástrojů umíme vyhodnotit chování uživatelů a jsme schopni navrhovat různá vylepšení a další kroky k vašemu rozvoji."
                />

        </motion.div>

        </section>
    )
}
