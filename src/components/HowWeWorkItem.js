import React from 'react'

// Animation
import { motion } from "framer-motion"
import {useScrollAnim} from "./hooks/useScrollAnim"
import {fade} from "./hooks/animation"

export default function HowWeWorkItem({symbol, title, caption}) {

    const [element, controls] = useScrollAnim();
    
    return (
        <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="cell l-3 m-6 s-12">
            <div className="process__number">
                <img src={symbol} alt="1"/>
            </div>
            <h4 className="process__heading h3">{title}</h4>
            <p>{caption}</p>
        </motion.div>
    )
}
