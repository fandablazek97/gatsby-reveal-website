import React from 'react'

// Animation
import { motion } from "framer-motion"
import { useScroll } from "./hooks/useScroll"
import { fade, fadeItem } from "./hooks/animation"

export default function TextGray({title, subtitle}) {

    const [element, controls] = useScroll();
    
    return (
        <section className="bg-white">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="grid py-12 wrap">
                <motion.h2 variants={fadeItem} className="cell l-6 m-6 s-12">{title}</motion.h2>
                <motion.p variants={fadeItem} className="cell l-6 m-6 s-12">{subtitle}</motion.p>
            </motion.div>
        </section>
    )
}
