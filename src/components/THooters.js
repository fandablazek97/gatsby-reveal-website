import React from 'react'

// Animation
import { motion } from "framer-motion"
import {useScrollAnim} from "./hooks/useScrollAnim"
import {useScrollAnimSecond} from "./hooks/useScrollAnimSecond"
import {fade, fadeItem} from "./hooks/animation"

// Image plugin
import { StaticImage } from "gatsby-plugin-image"

// Assets
// import image from "../images/img-ref/website-hooters.png"
import logo from "../images/svg-ref/hooters-white.svg";

export default function THooters() {

    const [element, controls] = useScrollAnim();
    const [ref, reveal] = useScrollAnimSecond();

    return (
       <section className="testimonial bg-orange grid wrap-fluid">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="testimonial__content cell l-6 m-12 s-12 y-flex-center">
                <motion.div variants={fadeItem} className="testimonial__logo">
                    <img src={logo} alt=""></img>
                 </motion.div>
                <motion.p variants={fadeItem} className="lead font-sans fw-400">Síť amerických restaurací Hooters působící v České republice využila našich kompletních služeb. Prvotně jsme vytvořili nové webové stránky s rezervačním systémem pro jejich restaurace. Dále naše spolupráce pokračuje ve formě tvorby tiskovin, správy sociálních sítí a focení jídel či eventů.</motion.p>
                {/* <motion.p variants={fadeItem} className="p-small">- Marek Dyršmíd, oblastní vedoucí ve společnosti Golden gate</motion.p> */}
               <motion.ul variants={fadeItem} className="testimonial__list list-inline">
                    <li>Web</li>
                    <li>grafika</li>
                    <li>sociální sítě</li>
                </motion.ul>
            </motion.div>
            <motion.div ref={ref} variants={fade} animate={reveal} initial="hidden" className="testimonial__image cell l-6 m-12 s-12 container-img">
                {/* <img src={image} alt="showreel"></img> */}
                <StaticImage 
                    src="../images/img-ref/website-hooters.png"
                    alt="ukázka naší práce pro hooters"
                    className="overflow-visible"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif", "png"]}
                    loading="lazy"
                />
            </motion.div>
       </section>
    )
}
