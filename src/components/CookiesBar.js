import React from 'react'
import {Link} from "gatsby"
import {useState, useEffect} from "react";

// Animation
import { motion } from "framer-motion";
import { cookiesBarAnim } from "./hooks/animation"

export default function CookiesBar() {

    const [cookies, setCookies] = useState(false);

    function cookiesHandler() {
        setCookies(true);
        localStorage.setItem("cookies", "true");
    }


    
    useEffect(() => {
        let cookies = localStorage.getItem("cookies");

        if (cookies === "true") {
            setCookies(true);
            console.log("true");
        } else {
            setCookies(false);
            console.log("false");
        }
    },[]);

    return (
        <motion.div variants={cookiesBarAnim} animate="show" initial="hidden" className={`cookies-bar wrap-fluid ${cookies ? "cookies-bar--disabled" : ""}`}>
            <p className="small gray-400">Na těchto stránkách používáme soubory cookies a další technologie ke sběru dat o vašem prohlížeči, zařízení a poloze. Pokud budete naše stránky nadále používat bez potvrzení této zprávy, budeme to považovat za váš souhlas s používáním cookies. Pro více informací si přečtěte <Link to="/gdpr">zpracování osobních údajů.</Link></p>
            
            <button onClick={cookiesHandler} className="btn-primary btn-xs">Souhlasím</button>
        </motion.div>
    )
}
