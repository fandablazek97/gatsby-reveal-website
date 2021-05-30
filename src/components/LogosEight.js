import React from 'react'

// Animation
import { motion } from "framer-motion"
import {useScrollAnim} from "./hooks/useScrollAnim"
import { fadeFast, fadeItem } from "./hooks/animation"

export default function LogosEight({title, subtitle, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, alt1, alt2, alt3, alt4, alt5, alt6, alt7, alt8}) {
    
    const [element, controls] = useScrollAnim();

    return (
        <section className="logos bg-white">

            <motion.div ref={element} variants={fadeFast} animate={controls} initial="hidden" className="grid py-6 wrap">

                <div className="cell l-6">
                    <motion.h2 variants={fadeItem}>{title}</motion.h2>
                    <motion.p variants={fadeItem}>{subtitle}</motion.p>
                </div>
                
                <div className="cell l-6 logos__container logos__container--eight">
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo1} alt={alt1}></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo2} alt={alt2}></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo3} alt={alt3}></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo4} alt={alt4}></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo5} alt={alt5}></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo6} alt={alt6}></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo7} alt={alt7}></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo8} alt={alt8}></img></motion.div>
                </div>

            </motion.div>

         </section>
    )
}

