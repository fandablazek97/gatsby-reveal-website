import React from 'react';

// Assets 
import watermark from "../images/svg-base/reveal-symbol-solid.svg";

export default function ContactFormSection() {

    return (
        <section className="bg-gradient-gray">
            <div className="wrap py-10 grid">
                <div className="l-6 m-12 s-12 ">
                    <h2>Kontaktujte nás</h2>
                        <form className="form" action="#">

                            <input type="text" placeholder="Jméno a příjmení"/><br></br>
                            <input type="text" placeholder="Telefoní číslo"/><br></br>
                            <input type="email" placeholder="Email"/><br></br>
                            <input type="text" placeholder="Název firmy (volitelné)"/>

                            <h4 className="mt-5">Co poptáváte</h4>
                            <div className="form__toggleswitch">

                                <div className="grid">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                    <p>Web / Eshop</p>
                                </div>

                                <div className="grid">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                    <p>Grafiku</p>
                                </div>

                                <div className="grid">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                    <p>Online marketing</p>
                                </div>

                            </div>

                            <h4 className="h3 mt-5">Povězte nám o tom...</h4>
                            <textarea name="" id="" cols="30" rows="15" placeholder="Napište více o vašem projektu (rozsah, časový horizont, rozpočet..)"></textarea>
                        <span>
                            <input type="checkbox" required/>
                            <label>Souhlasím se zpracováním osobních údajů</label>
                        </span>
                            <button type="submit" className="btn-inverse-primary btn-large btn-fluid btn-icon-right">Odeslat<span className="material-icons-outlined">arrow_forward</span></button>
                        </form>
                 </div>

                <div className="large-watermark cell l-6 s-12 sm-hidden">
                    <img src={watermark} alt="watermark" className="logo-large-watermark"></img>
                </div>
            </div>
        </section>
    )
}