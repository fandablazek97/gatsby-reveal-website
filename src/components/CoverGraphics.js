import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Animation
import { motion } from "framer-motion"
import {useScroll} from "./hooks/useScroll"
import {fadeFast, fadeItem} from "./hooks/animation"

// Data
// import video from "../Data/images/showreel_web.mp4";
// import image from "../Data/images/gastro.png";

export default function CoverWebsites() {

    const [element, controls] = useScroll();

    return (
        <section className="cover cover--fullscreen">
            <motion.div ref={element} variants={fadeFast} animate={controls} initial="hidden" className="intro wrap">
                <motion.h1 variants={fadeItem} className="white s-center">Grafika & branding</motion.h1>
                <motion.p variants={fadeItem} className="p-large gray-200 s-center">První dojem dvakrát neuděláš! Lidé vás často soudí podle vzhledu. Proto skvělý branding je první krok k úspěšnému podnikání.</motion.p>
                <div className="intro__scroll-down-arrow"><span className="material-icons-outlined">arrow_downward</span></div>
            </motion.div>
            
            <div className="cover__hero-overlay-animated"></div>
            <div className="cover__hero-overlay"></div>
                
            <StaticImage 
                    src="../images/img-base/hero-3.jpg"
                    alt="Úvodní fotka stránky"
                    className="cover__hero"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    formats={["AUTO", "WEBP", "AVIF", "JPG"]}
                    placeholder="dominantColor"
                />

        </section>
    )
};