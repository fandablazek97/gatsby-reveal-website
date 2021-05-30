import React from "react";
import {Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Animation
import { motion } from "framer-motion"
import { useScrollAnim } from "./hooks/useScrollAnim"
import { fadeFast, fadeItem, opacityItem } from "./hooks/animation"

export default function CoverWpAdmin() {

    const [element, controls] = useScrollAnim();

    return (
        <section className="cover cover--fullscreen cover--404">
            <motion.div ref={element} variants={fadeFast} animate={controls} initial="hidden" className="intro wrap">
                <motion.h1 variants={fadeItem} className="white center mb-3">Wordpress umíme také</motion.h1>
                <motion.div variants={opacityItem} className="btn-group-center s-btn-group-column">
                    <Link className="btn-inverse-primary btn-large" to="/kontakt">Kontaktujte nás</Link>
                </motion.div>
                <div className="intro__scroll-down-arrow"><span className="material-icons-outlined">arrow_downward</span></div>
            </motion.div>
            
            <div className="cover__hero-overlay-animated"></div>
            <div className="cover__hero-overlay"></div>
                
            <StaticImage 
                    src="../images/img-base/cover-wordpress.jpg"
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