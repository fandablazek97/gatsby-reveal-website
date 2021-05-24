import React from 'react'

// Assets 
import watermark from "../images/svg-base/reveal-symbol-solid.svg"

export default function ContactFormSection() {
    return (
        <section className="bg-gradient-gray">
            <div className="wrap py-10 grid">
                <div className="l-6 m-12 s-12 ">
                    <h2>Kontaktujte nás</h2>
                        <form className="form">
                            <input type="text" placeholder="Jméno a příjmení"/><br></br>
                            <input type="text" placeholder="Telefoní číslo"/><br></br>
                            <input type="email" placeholder="Email"/><br></br>
                            <input type="text" placeholder="Název firmy (volitelné)"/>

                            <h4 className="mt-5">Co poptáváte</h4>
                            <div className="grid form__toggleswitch">

                            <div>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <p className="pl-1">Web / Eshop</p>
                                </div>
                                ¨
                                <div>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <p className="pl-1">Grafiku</p>
                                </div>

                                <div>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <p className="pl-1">Online marketing</p>
                                </div>

                            </div>

                            <h4 className="h3 mt-5">Povězte nám o tom...</h4>
                            <textarea name="" id="" cols="30" rows="15" placeholder="Napište více o vašem projektu (rozsah, časový horizont, rozpočet..)"></textarea>
                            <button className="btn-inverse-primary btn-large btn-fluid btn-icon-right">Odeslat<span className="material-icons-outlined">arrow_forward</span></button>
                        </form>
                 </div>

                <div className="large-watermark cell l-6 s-12 sm-hidden">
                    <img src={watermark} alt="watermark" className="logo-large-watermark"></img>
                </div>
            </div>
        </section>
    )
}