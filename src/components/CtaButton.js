import React from 'react'
import {Link} from "gatsby";

export default function CtaButton() {
    return (
        <Link to="/kontakt" className="cta-button shadow-xs">
            <span class="material-icons-outlined">forum</span>
        </Link>
    )
}
