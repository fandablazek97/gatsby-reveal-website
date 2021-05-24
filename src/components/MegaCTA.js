import React from 'react'
import {Link} from "gatsby";

export default function MegaCTA() {
    return (
        <Link className="mega-cta" to="/contact">
            <div className="mega-cta__wrapper wrap">
                <div className="mega-cta__inner px-2">
                    <p className="mega-cta__caption lead font-primary fw-400">Zaujalo vás to?</p>
                    <h4 className="mega-cta__heading h1">Kontaktujte nás</h4>
                    <span className="mega-cta__arrow material-icons-outlined">arrow_forward</span>
                </div>
            </div>
        </Link>
    )
}
