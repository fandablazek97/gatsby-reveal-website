import React, {useEffect, useState} from 'react';
import {Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Animation - Framer Motion
import { motion } from "framer-motion"
import { useScroll } from "./hooks/useScroll"
import { fadeFast, fadeItem, opacityItem } from "./hooks/animation"

// Assets
// import video from "../Data/images/showreel_web.mp4";
// import image from "../images/img-base/website-cover-7.jpg";


// Animated text
import TextTransition from "react-text-transition";

const TEXTS = [
    "weby",
    "e-shopy",
    "grafiku",
    "branding"
  ];

export default function CoverHome() {

    // Animation based on intersection observer
    const [element, controls] = useScroll();

    // // Animated Text 
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3200 // every 4 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <section className="cover cover--fullscreen">
            <motion.div ref={element} variants={fadeFast} animate={controls} initial="hidden" className="intro wrap">
                <motion.h1 variants={fadeItem} className="white s-center">Tvoříme 
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={{ stiffness: 50, damping: 20 }}
                        // noOverflow
                        style={{ margin: "0 0.35em", display: "inline-block" }}
                    />
                </motion.h1>
                
                <motion.p variants={fadeItem} className="p-large gray-200 s-center">Jsme tým vývojářů, designérů a marketérů pro každý váš nápad. Pomocí kreativity a aktuálních trendů zrealizujeme jakýkoliv projekt. Pojďte do toho společně s námi.</motion.p>
                <motion.div variants={opacityItem} className="btn-group s-btn-group-column">
                    <Link className="btn-inverse-primary btn-icon-right" to="/#about-section">Zjistit více<span className="material-icons-outlined">arrow_forward</span></Link>
                </motion.div>
                <div className="intro__scroll-down-arrow"><span className="material-icons-outlined">arrow_downward</span></div>
            </motion.div>
            
            <div className="cover__hero-overlay-animated"></div>
            <div className="cover__hero-overlay"></div>
            {/* <div className="cover__hero">
                <video autoPlay loop muted src={video}></video>
                <img src={image} alt="Cover"/>
            </div> */}
            <StaticImage 
                    src="../images/img-base/homepage-3.jpg"
                    alt="Úvodní fotka webu"
                    className="cover__hero"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    formats={["AUTO", "WEBP", "AVIF", "JPG"]}
                    placeholder="dominantColor"
                />
        </section>
    )
}