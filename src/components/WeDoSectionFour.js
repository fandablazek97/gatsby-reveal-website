import React from 'react'

// Animation
import { motion } from "framer-motion"
import { useScroll } from "./hooks/useScroll"
import { fade, fadeItem } from "./hooks/animation"

export default function WeDoSectionFour({ titlelist1, titlelist2, titlelist3, titlelist4, subtitlelist1, subtitlelist2, subtitlelist3, subtitlelist4 }) {
    
    const [element, controls] = useScroll();
    
    return (
        <section className="we-do bg-white py-10">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="grid wrap">
                <h2 className="cell h2">Co umíme</h2>
            </motion.div>

            <div className="grid wrap">
                <motion.ol ref={element} variants={fade} animate={controls} initial="hidden" className="we-do__list cell">

                    <motion.li variants={fadeItem} className="we-do__list-item">
                        <h3>{titlelist1}</h3>
                        <p>{subtitlelist1}</p>
                    </motion.li>

                    <motion.li variants={fadeItem} className="we-do__list-item">
                        <h3>{titlelist2}</h3>
                        <p>{subtitlelist2}</p>
                    </motion.li>

                    <motion.li variants={fadeItem} className="we-do__list-item">
                        <h3>{titlelist3}</h3>
                        <p>{subtitlelist3}</p>
                    </motion.li>

                    <motion.li variants={fadeItem} className="we-do__list-item">
                        <h3>{titlelist4}</h3>
                        <p>{subtitlelist4}</p>
                    </motion.li>

                </motion.ol>
            </div>
        </section>
    )
}
