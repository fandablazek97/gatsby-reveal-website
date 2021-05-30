import React from 'react'

// Animation
import { motion } from "framer-motion"
import { useScrollAnim } from "./hooks/useScrollAnim"
import { fade } from "./hooks/animation"

export default function WeDoSectionItem({title, subtitle}) {

    const [element, controls] = useScrollAnim();

    return (
        <motion.li ref={element} variants={fade} animate={controls} initial="hidden" className="we-do__list-item">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </motion.li>
    )
}
