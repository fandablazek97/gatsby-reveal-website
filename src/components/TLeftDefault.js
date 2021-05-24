import React from 'react'

// Animation
import { motion } from "framer-motion"
import {useScroll} from "./hooks/useScroll"
import {useScrollSecond} from "./hooks/useScrollSecond"
import {fade, fadeItem} from "./hooks/animation"

// Assets
import image from "../images/img-ref/website-hooters.png"
import logo from "../images/svg-ref/image-pro-black.svg";

export default function TLeftDefault() {

    const [element, controls] = useScroll();
    const [ref, reveal] = useScrollSecond();

    return (
        <section className="testimonial testimonial--img-left testimonial--text-black bg-gray-200 grid wrap-fluid">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="testimonial__content cell l-6 m-12 s-12 y-flex-center">
                <motion.div variants={fadeItem} className="testimonial__logo">
                    <img src={logo} alt=""></img>
                 </motion.div>
                <motion.p variants={fadeItem} className="lead">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex ab, totam quam facilis atque magni dicta, iure amet illo possimus quidem consequatur aliquam fugit inventore! Maxime quasi corporis eligendi asperiores commodi. Repudiandae nemo officiis optio eos, ducimus impedit minima ex. Quibusdam, eaque! Beatae debitis aperiam at mollitia quia sed?"</motion.p>
                <motion.p variants={fadeItem}>- Marek Dyršmíd, oblastní vedoucí ve společnosti Golden gate</motion.p>
               <motion.ul variants={fadeItem} className="testimonial__list list-inline">
                    <li>Design</li>
                    <li>Web</li>
                </motion.ul>
            </motion.div>
            <motion.div ref={ref} variants={fade} animate={reveal} initial="hidden" className="testimonial__image cell l-6 m-12 s-12 container-img">
                <img src={image} alt="showreel"></img>
            </motion.div>
       </section>
    )
}
