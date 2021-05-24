import React from 'react'

// Animation
import { motion } from "framer-motion"
import {useScroll} from "./hooks/useScroll"
import { fadeFast, fadeItem } from "./hooks/animation"

export default function LogosSix({title, subtitle, logo1, logo2, logo3, logo4, logo5, logo6}) {
    
    const [element, controls] = useScroll();

    return (
        <section className="logos bg-white">

            <motion.div ref={element} variants={fadeFast} animate={controls} initial="hidden" className="grid py-6 wrap">

                <div className="cell l-6">
                    <motion.h2 variants={fadeItem}>{title}</motion.h2>
                    <motion.p variants={fadeItem}>{subtitle}</motion.p>
                </div>
                
                <div className="cell l-6 logos__container">
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo1} alt="logo"></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo2} alt="logo"></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo3} alt="logo"></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo4} alt="logo"></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo5} alt="logo"></img></motion.div>
                    <motion.div variants={fadeItem} className="logos__logo-placeholder"><img src={logo6} alt="logo"></img></motion.div>
                </div>

            </motion.div>
            
         </section>
    )
}

