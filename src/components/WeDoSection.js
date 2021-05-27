import React from 'react'

// Components
import WeDoSectionItem from "./WeDoSectionItem"

// Animation
import { motion } from "framer-motion"
import { useScroll } from "./hooks/useScroll"
import { fade, fadeItem } from "./hooks/animation"

export default function WeDoSection({ children }) {
    
    const [element, controls] = useScroll();
    
    return (
        <section className="we-do bg-white py-10">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="grid wrap">
                <h2 className="cell h2">Co umíme</h2>
            </motion.div>

            <div className="grid wrap">
                <ol className="we-do__list cell">
                    {children}
                </ol>
            </div>
        </section>
    )
}
