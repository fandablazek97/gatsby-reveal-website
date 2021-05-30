import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

// Animation - Framer Motion
import { motion } from "framer-motion"
import { useScrollAnim } from "./hooks/useScrollAnim"
import { fadeFast, fadeItem, opacityItem } from "./hooks/animation"

// Assets
// import video from "../Data/images/showreel_web.mp4";
// import image from "../images/img-base/preview-2.jpg";

export default function CoverContact() {

    // Animation based on intersection observer
    const [element, controls] = useScrollAnim();

    return (
        <section className="cover cover--fullscreen">
            <motion.div ref={element} variants={fadeFast} animate={controls} initial="hidden" className="intro wrap">
                <motion.h1 variants={fadeItem} className="white s-center">Řekněte nám <br></br> o vašem projektu</motion.h1>
                <motion.p variants={fadeItem} className="p-large gray-200 s-center">Vyplňte poptávkový formulář níže, napište email, nebo klidně rovnou zavolejte.</motion.p>

                <div className="btn-group s-btn-group-column">
                <motion.a variants={opacityItem} className="btn-inverse-primary btn-icon-left" href="tel:+420737090913"><span className="material-icons-outlined">phone_iphone</span>+420 737 090 913</motion.a>
                <motion.a variants={opacityItem} className="btn-inverse-primary btn-icon-left" href="mailto:info@revealmedia.cz"><span className="material-icons-outlined">email</span>info@reveal.cz</motion.a>
                </div>
                
                <div className="intro__scroll-down-arrow"><span className="material-icons-outlined">arrow_downward</span></div>
            </motion.div>
            
            <div className="cover__hero-overlay-animated"></div>
            <div className="cover__hero-overlay"></div>
            <div className="cover__hero">
                {/* <video autoPlay loop muted src={video}></video>
                <img src={image} alt="Cover"/> */}

                <StaticImage 
                    src="../images/img-base/preview-2.jpg"
                    alt="Úvodní fotka stránky"
                    className="cover__hero"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    formats={["AUTO", "WEBP", "AVIF", "JPG"]}
                    placeholder="dominantColor"
                />
            </div>
        </section>
    )
}
