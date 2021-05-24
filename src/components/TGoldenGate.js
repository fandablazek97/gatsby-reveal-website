import React from 'react'

// Animation
import { motion } from "framer-motion"
import {useScroll} from "./hooks/useScroll"
import {useScrollSecond} from "./hooks/useScrollSecond"
import {fade, fadeItem} from "./hooks/animation"

// Image plugin
import { StaticImage } from "gatsby-plugin-image"

// Assets
// import image from "../images/img-ref/website-golden-gate-5.png"
import logo from "../images/svg-ref/golden-gate-white.svg";

export default function TGoldenGate() {

    const [element, controls] = useScroll();
    const [ref, reveal] = useScrollSecond();

    return (
        <section className="testimonial testimonial--img-left bg-gradient-to-r-primary grid wrap-fluid">
            <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="testimonial__content cell l-6 m-12 s-12 y-flex-center">
                <motion.div variants={fadeItem} className="testimonial__logo">
                    <img src={logo} alt=""></img>
                </motion.div>
                <motion.p variants={fadeItem} className="lead">„Kluky určitě doporučuji. Web patří k nejlepšímu, co naši obchodníci používají. Tvorba bez problémů, požadavky z mé strany byly vyřešeny rychle a k mé spokojenosti."</motion.p>
                <motion.p variants={fadeItem}>- Marek Dyršmíd, oblastní vedoucí ve společnosti Golden gate</motion.p>
            <motion.ul variants={fadeItem} className="testimonial__list list-inline">
                    <li>Design</li>
                    <li>Web</li>
                </motion.ul>
            </motion.div>
            <motion.div ref={ref} variants={fade} animate={reveal} initial="hidden" className="testimonial__image cell l-6 m-12 s-12 container-img">
                {/* <img src={image} alt="showreel"></img> */}
                <StaticImage 
                    src="../images/img-ref/website-golden-gate-5.png"
                    alt="ukázka naší práce pro golden gate"
                    className="overflow-visible"
                    formats={["auto", "webp", "avif", "png"]}
                    placeholder="blurred"
                    loading="lazy"
                />
        </motion.div>
   </section>
    )
}
