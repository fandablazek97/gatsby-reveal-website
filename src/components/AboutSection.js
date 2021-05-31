import React from "react";

// Animation
import { motion } from "framer-motion"
import {useScrollAnim} from "./hooks/useScrollAnim"
import {fade, fadeItem} from "./hooks/animation"

// Images
import watermark from "../images/svg-base/reveal-symbol-solid.svg"

export default function AboutSection({children}) {

    const [element, controls] = useScrollAnim();
    return (
            <section className="about bg-gradient-gray py-4" id="about-section">
        <div className="wrap">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="grid py-5">
                <motion.h3 variants={fadeItem} className="cell l-5 m-6 s-12 h2">Proč si vybrat nás</motion.h3>
                <motion.p variants={fadeItem} className="cell l-7 m-6 s-12 text-large strong">Jsme mladá digitální agentura. Naším cílem je pomáhat firmám a startupům v budování své značky v online prostředí. Sledujeme moderní trendy a umožňujeme našim zákazníkům aby byli první, kdo využívají přínosy novinek v naší oblasti.</motion.p>
            </motion.div>
    
            <div className="grid py-4">
                <div className="cell l-6 m-12">{children}</div>
                <div className="large-watermark cell l-6 m-12 sm-hidden">
                    <img src={watermark} alt="watermark"></img>
                </div>
            </div>
        </div>
    </section>
    )
}