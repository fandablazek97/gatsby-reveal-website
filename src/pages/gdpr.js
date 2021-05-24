import React from 'react'
import { Helmet } from "react-helmet"

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function gdprPage() {
    return (
        <div>
            <Helmet
             bodyAttributes={{
                class: 'navbar--dark'
            }}
            />

            <Layout>
                <Seo title="Zpracování osobních údajů"></Seo>

                <div className="gdpr">
                    <div className="gdpr__cover">
                        <h2>Zásady ochrany osobních údajů</h2>
                    </div>
                    
                    <h3>I. ZÁKLADNÍ USTANOVENÍ</h3>
                    <p>1. Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „GDPR”) je Radek Sieber, IČ: 03692477 se sídlem v: U Vrbky 595, 33012 Horní Bříza (dále jen: „správce“).</p>
                    <p>2. Kontaktní údaje správce jsou:</p>
                    <ul>
                        <li>Jméno a příjmení: František Blažek</li>
                        <li>IČ:</li>
                        <li>Adresa: Honezovice 127, 33301 Stod</li>
                        <li>E-mail: blazek@reveal.cz</li>
                        <li>Telefon: +420 737 090 913</li>
                    </ul>
                    <p>3. Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.</p>
                    <p>4. Správce nejmenoval pověřence pro ochranu osobních údajů.</p>

                    <h3>II. ZÁKONNÝ DŮVOD ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ</h3>
                    <p>1. Zákonným důvodem zpracování osobních údajů je plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1 písm. b) GDPR. (dále jen “Plnění smlouvy”) – zpracování je nezbytné pro splnění smlouvy, jejíž smluvní stranou je subjekt údajů, nebo pro provedení opatření přijatých před uzavřením smlouvy na žádost tohoto subjektu údajů.</p>
                    <p>2. Ze strany správce nedochází k automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR.</p>

                    <h3>III. ÚČEL ZPRACOVÁNÍ, KATEGORIE A ZDROJE OSOBNÍCH ÚDAJŮ</h3>
                    <ol>
                        <li>Zákonný důvod – Plnění smlouvy</li>
                        <li>Účel – Vyřízení objednávky nebo odpověď na poptávku zaslanou přes kontaktní formulář</li>
                        <li>Údaje – Osobní údaje klientů (Kontaktní údaje)</li>
                        <li>Zdroj údajů – Kontaktní formulář</li>
                    </ol>


                </div>
            
            </Layout>
        </div>
    )
}