import React from 'react'
import {Link} from "gatsby";

export default function Card({path, icon, title}) {
    return (
        <Link className="card" to={path}>
            <div className="card__head-icon">
                <img src={icon} alt="icon" />
            </div>
            <h3 className="h4">{title}</h3>
            <span className="card__arrow material-icons-outlined">arrow_forward</span>
        </Link>
    )
}
