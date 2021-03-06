import React from 'react'

// Animation
import { motion } from "framer-motion"
import { useScrollAnim } from "./hooks/useScrollAnim"
import { fade, fadeItem } from "./hooks/animation"

export default function TextGray({title, subtitle}) {

    const [element, controls] = useScrollAnim();
    
    return (
        <section className="bg-white">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="grid py-8 wrap">
                <motion.h3 variants={fadeItem} className="cell l-6 m-6 s-12 h2">{title}</motion.h3>
                <motion.p variants={fadeItem} className="cell l-6 m-6 s-12">{subtitle}</motion.p>
            </motion.div>
        </section>
    )
}
