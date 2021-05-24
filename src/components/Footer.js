import React from 'react'
import {Link} from "gatsby";

// Assets
import logo from "../images/svg-base/reveal-symbol-base.svg";

// Import Components
import Socials from "./Socials";

export default function Footer() {
    return (
        <footer className="footer bg-gray-900">
            <div className="grid wrap pt-8 pb-3">
                <div className="footer__left cell l-6 m-5 s-12 py-3">
                    <div className="footer__brand">
                        <img src={logo} alt="logo"/>
                    </div>
                    <p className="lead">Lorem ipsum dolor sit amet</p>

                    <Socials></Socials>
                </div>

                <div className="footer__right cell l-6 m-7 s-12 py-3">
                    <h5 className="white">Rychlý kontakt</h5>
                    <ul className="footer__cta list-column">
                        <li><a href="tel:+420737090913" className="h6">+420 737 090 913</a></li>
                        <li><a href="mailto:info@reveal.cz" className="h6">info@reveal.cz</a></li>
                    </ul>

                    <h5 className="white">Navigace</h5>
                    <ul className="footer__nav list-inline">
                        <li><Link to="/weby" className="h6">Weby & Eshopy</Link></li>
                        <li><Link to="/grafika" className="h6">Grafika</Link></li>
                        <li><Link to="/marketing" className="h6">Online marketing</Link></li>
                        <li><Link to="/kontakt" className="h6">Kontakt</Link></li>
                    </ul>

                    <p className="p gray-500">Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className="grid wrap py-3">
                <div className="footer__copyright cell l-12 m-12 s-12">
                    <ul className="list-inline">
                        <li><p className="p-small">Copyright C 2021 Reveal</p></li>
                        <li><Link to="/gdpr" className="p-small">Zpracování osobních údajů</Link></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}
