import React from 'react'

// Animation
import { motion } from "framer-motion"
import {useScroll} from "./hooks/useScroll"
import {useScrollSecond} from "./hooks/useScrollSecond"
import {fade, fadeItem} from "./hooks/animation"

// Image plugin
import { StaticImage } from "gatsby-plugin-image"

// Assets
// import image from "../images/img-ref/website-cosuma.png"
import logo from "../images/svg-ref/cosuma-wide.svg";

export default function TCosuma() {

    const [element, controls] = useScroll();
    const [ref, reveal] = useScrollSecond();

    return (
        <section className="testimonial testimonial--img-left testimonial--text-black bg-gray-100 grid wrap-fluid">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="testimonial__content cell l-6 m-12 s-12 y-flex-center">
                <motion.div variants={fadeItem} className="testimonial__logo" id="cosuma-logo">
                    <img src={logo} alt=""></img>
                </motion.div>
                <motion.p variants={fadeItem} className="lead">„Spolupráci velmi doporučuji. Kluci byli velmi kreativní, velmi dobře realizovali mé představy o webu mé start-up firmy. Troufnu si říct, že mé představy i předčili. Web je jednoduchý, výstižný a vypadá velmi profesionálně."</motion.p>
                <motion.p variants={fadeItem}>- Kristýna Váchalová - Cosuma Automotive</motion.p>
            <motion.ul variants={fadeItem} className="testimonial__list list-inline">
                    <li>Design</li>
                    <li>Web</li>
                    <li>Logo</li>
                    <li>Tiskoviny</li>
                </motion.ul>
            </motion.div>
            <motion.div ref={ref} variants={fade} animate={reveal} initial="hidden" className="testimonial__image cell l-6 m-12 s-12 container-img">
                {/* <img src={image} alt="showreel"></img> */}
                <StaticImage 
                    src="../images/img-ref/website-cosuma-auto.png"
                    alt="ukázka naší práce pro hooters"
                    className="overflow-visible"
                    formats={["auto", "webp", "avif", "png"]}
                    placeholder="blurred"
                    loading="lazy"
                />
            </motion.div>
   </section>
    )
}
