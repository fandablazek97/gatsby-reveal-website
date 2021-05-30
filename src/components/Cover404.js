import React from "react";
import {Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Animation
import { motion } from "framer-motion"
import { useScrollAnim } from "./hooks/useScrollAnim"
import { fadeFast, fadeItem, opacityItem } from "./hooks/animation"

// Data
// import video from "../Data/images/showreel_web.mp4";
// import image from "../Data/images/gastro.png";

export default function Cover404() {

    const [element, controls] = useScrollAnim();

    return (
        <section className="cover cover--fullscreen cover--404">
            <motion.div ref={element} variants={fadeFast} animate={controls} initial="hidden" className="intro wrap">
            <motion.h1 variants={fadeItem} className="white center text-xxl mb-3">404</motion.h1>
                <motion.h1 variants={fadeItem} className="white center mb-3">ztratili jste se?</motion.h1>
                <motion.div variants={opacityItem} className="btn-group-center s-btn-group-column">
                    <Link className="btn-inverse-primary btn-large" to="/">Domovská stránka</Link>
                </motion.div>
                <div className="intro__scroll-down-arrow"><span className="material-icons-outlined">arrow_downward</span></div>
            </motion.div>
            
            <div className="cover__hero-overlay-animated"></div>
            <div className="cover__hero-overlay"></div>
                
            <StaticImage 
                    src="../images/img-base/cover-404.jpg"
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