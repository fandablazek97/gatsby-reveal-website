import React from "react";

// Animation
import { motion } from "framer-motion"
import {useScroll} from "./hooks/useScroll"
import {fadeFast, fadeItem} from "./hooks/animation"

// Data
// import video from "../Data/images/showreel_web.mp4";
// import image from "../Data/images/gastro.png";

export default function Cover({title, subtitle, slide}) {

    const [element, controls] = useScroll();

    return (
        <section className="cover cover--fullscreen">
            <motion.div ref={element} variants={fadeFast} animate={controls} initial="hidden" className="intro wrap">
                <motion.h1 variants={fadeItem} className="white s-center">{title}</motion.h1>
                <motion.p variants={fadeItem} className="p-large gray-200 s-center">{subtitle}</motion.p>
                <div className="intro__scroll-down-arrow"><span className="material-icons-outlined">arrow_downward</span></div>
            </motion.div>
            
            <div className="cover__hero-overlay-animated"></div>
            <div className="cover__hero-overlay"></div>
            <div className="cover__hero">
                {/* <video autoPlay loop muted src={video}></video> */}
                <img src={slide} alt="úvodní obrázek stránky"/>
            </div>
        </section>
    )
};