// React
// State and useEffect
import React, {useState, useEffect} from "react";
import {Link} from "gatsby";

// Assets
import logo from "../images/svg-base/reveal-symbol-solid.svg";
// Aby bylo logo na webu bílé, je přes css desaturováno a zesvětleno - na určitých stránkách
// je poté vráceno na výchozí červenou pozici - je to z důvodu toho, že nelze jiným způsobem
// nastavit patřičné barvy loga na jiných stránkách, hlavně kvůli kontrastu - v otevřeném
// menu bylo třeba vždy černé a nešlo logo žádným selektorem vybrat aby se obarvilo jen 
// v té konkrétní situaci na bílou

// Utilities
import { debounce, isBrowser } from "./hooks/utils";

// Import Components
import Socials from "./Socials";


export default function Navbar() {

    // State
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuScroll, setMenuScroll] = useState(false);
    const [menuHover, setMenuHover] = useState(false);

    // Toggle menu open
    const menuOpenToggle = () => {
        if (isBrowser) {
            setMenuOpen(!menuOpen);
            document.body.classList.toggle("no-scroll");
        }
    }

    // Close menu on click at logo or menu link
    const menuClose = () => {
        if (isBrowser) {
            setMenuOpen(false);
            document.body.classList.remove("no-scroll");
            window.scrollTo(0, 0);
        }
     }

    // Menu toggle Solid on Scroll
    const menuScrollToggle = () => {
        if (isBrowser) {

            if (window.scrollY < 60) {
                setMenuScroll(false);
            } else {
                setMenuScroll(true);
            }

        }
    };

    // Hover on lists in opened menu
    const hoverHandlerOn = () => {
        setMenuHover(true);
    }

    const hoverHandlerOff = () => {
        setMenuHover(false);
    }



   const [visible, setVisible] = useState(true);
   const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = debounce( () => {

        const currentScrollPos = window.pageYOffset; // Set actual position of scroll

        if ((prevScrollPos > currentScrollPos) || currentScrollPos < 540) {
            setVisible(true);
        } else {
            setVisible(false);
        };

        // prevScrollPos = currentScrollPos;
        setPrevScrollPos(currentScrollPos);

    }, 100);



    //  Use Effect
      useEffect(() => {
       window.addEventListener('scroll', () => {
           handleScroll(); // Event listener show / hide navbar
           menuScrollToggle(); // Event listener for add solid class for navbar
       });  
    
        return () => window.removeEventListener('scroll', () => {
            handleScroll();
            menuScrollToggle();
        });
    
      }, [prevScrollPos, visible, handleScroll]);


    return(
        <nav 
        className={`navbar ${menuScroll ? "navbar--is-solid" : ""} ${visible ? "navbar--is-visible" : "navbar--is-hidden"}`}>
            <Link onClick={menuClose} className="navbar__brand" to="/">
                <img src={logo} alt="brand-logo" className={`${menuOpen ? "logo--white-overlay" : ""}`}/>
            </Link>

            <button onClick={menuOpenToggle} className={menuOpen ? "navbar__opener navbar__opener--active" : "navbar__opener"}>
                <div id="opener-1"></div>
                <div id="opener-2"></div>
                <div id="opener-3"></div>
            </button>

        <div className={`navbar__menu ${menuOpen ? "navbar__menu--active" : ""} ${menuHover ? "navbar__menu--hovering" : ""}`}>

             <div className="navbar__menu-left">
                <ul onMouseEnter={hoverHandlerOn} onMouseLeave={hoverHandlerOff} className="navbar__menu-list">
                <li><Link onClick={menuClose} className="navbar__menu-link" to="/">Hlavní strana</Link></li>
                    <li><Link onClick={menuClose} className="navbar__menu-link" to="/weby">Weby & E-shopy</Link></li>
                    <li><Link onClick={menuClose} className="navbar__menu-link" to="/grafika">Grafické práce</Link></li>
                    <li><Link onClick={menuClose} className="navbar__menu-link" to="/marketing">Online marketing</Link></li>
                    <li><Link onClick={menuClose} className="navbar__menu-link" to="/kontakt">Kontakt</Link></li>
                </ul>
            </div>

            <div className="navbar__menu-right">
                <ul className="navbar__menu-cta">
                    <li><a className="h5" href="tel:+420737090913">+420 737 090 913</a></li>
                    <li><a className="h5" href="mailto:info@reveal.cz">info@reveal.cz</a></li>
                    <li><p>Lorem ipsum dolor sit amet.</p></li>
                </ul>
                <Socials></Socials>
            </div>
        </div>

        </nav>
    )
}