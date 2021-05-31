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
                    
                    <h3>1. ZÁKLADNÍ USTANOVENÍ</h3>
                    <p>A. Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „GDPR”) je Libor Šebek IČ: 07136331 se sídlem Lipová 418, 334 42 Chlumčany (dále jen: „správce“).</p>
                    <p>B. Kontaktní údaje správce jsou:</p>
                    <ul>
                        <li>Adresa: Lipová 418, Chlumčany 334 42</li>
                        <li>Email: sebeklibor1997@gmail.com</li>
                        <li>Telefon: +420 724 188 885 </li>
                    </ul>
                    <p>C. Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.</p>
                    <p>D. Správce nejmenoval pověřence pro ochranu osobních údajů.</p>

                    <h3>2. ZDROJE A KATEGORIE ZPRACOVÁVANÝCH OSOBNÍCH ÚDAJŮ</h3>
                    <p>A. Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní údaje, které správce získal na základě plnění Vaší objednávky.</p>
                    <p>B. Správce zpracovává Vaše identifikační a kontaktní údaje a údaje nezbytné pro plnění smlouvy.</p>

                    <h3>3. ZÁKONÝ DŮVOD A ÚČEL ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ</h3>
                    <p>A. Zákonným důvodem zpracování osobních údajů je</p>
                    <ul>
                        <li>plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1 písm. b) GDPR,</li>
                        <li>oprávněný zájem správce na poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. f) GDPR,</li>
                        <li>Váš souhlas se zpracováním pro účely poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. a) GDPR ve spojení s § 7 odst. 2 zákona č. 480/2004 Sb., o některých službách informační společnosti v případě, že nedošlo k objednávce zboží nebo služby.</li>
                    </ul>

                    <p>B. Účelem zpracování osobních údajů je</p>
                    <ul>
                        <li>vyřízení Vaší objednávky a výkon práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem; při objednávce jsou vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení objednávky (jméno a adresa, kontakt), poskytnutí osobních údajů je nutným požadavkem pro uzavření a plnění smlouvy, bez poskytnutí osobních údajů není možné smlouvu uzavřít či jí ze strany správce plnit,</li>
                        <li>zasílání obchodních sdělení a činění dalších marketingových aktivit.</li>
                     </ul>

                    <p>C. Ze strany správce nedochází / dochází k automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR. S takovým zpracováním jste poskytl/a svůj výslovný souhlas.</p>
            
                    <h3>4. DOBA UCHOVÁNÍ ÚDAJŮ</h3>
                    <p>A. Správce uchovává osobní údaje</p>
                    <ul>
                        <li>po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem a uplatňování nároků z těchto smluvních vztahů (po dobu 15 let od ukončení smluvního vztahu).</li>
                        <li>po dobu, než je odvolán souhlas se zpracováním osobních údajů pro účely marketingu, nejdéle …. let, jsou-li osobní údaje zpracovávány na základě souhlasu.</li>
                    </ul>

                    <p>B. Po uplynutí doby uchovávání osobních údajů správce osobní údaje vymaže.</p>

                    <h3>5. PŘÍJEMCI OSOBNÍCH ÚDAJŮ (SUBDODAVATELÉ SPRÁVCE)</h3>
                    <p>A. Příjemci osobních údajů jsou osoby </p>
                    <ul>
                        <li>podílející se na dodání zboží / služeb / realizaci plateb na základě smlouvy,</li>
                        <li>zajišťující služby provozování e-shopu a další služby v souvislosti s provozováním e-shopu,</li>
                        <li>zajišťující marketingové služby.</li>
                    </ul>

                    <p>B. Správce nemá / má v úmyslu předat osobní údaje do třetí země (do země mimo EU) nebo mezinárodní organizaci. Příjemci osobních údajů ve třetích zemích jsou poskytovatelé mailingových služeb / cloudových služeb. </p>

                    <h3>6. VAŠE PRÁVA</h3>
                    <p>A. Za podmínek stanovených v GDPR máte</p>
                    <ul>
                        <li>právo na přístup ke svým osobním údajům dle čl. 15 GDPR,</li>
                        <li>právo opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení zpracování dle čl. 18 GDPR.</li>
                        <li>právo na výmaz osobních údajů dle čl. 17 GDPR.</li>
                        <li>právo vznést námitku proti zpracování dle čl. 21 GDPR a</li>
                        <li>právo na přenositelnost údajů dle čl. 20 GDPR.</li>
                        <li>právo odvolat souhlas se zpracováním písemně nebo elektronicky na adresu nebo email správce uvedený v čl. III těchto podmínek.</li>
                    </ul>

                    <p>B. Dále máte právo podat stížnost u Úřadu pro ochranu osobních údajů v případě, že se domníváte, že bylo porušeno Vaší právo na ochranu osobních údajů.</p>
                    
                    <h3>7. PODMÍNKY ZABEZPEČENÍ OSOBNÍCH ÚDAJŮ</h3>
                    <p>A. Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů.</p>
                    <p>B. Správce přijal technická opatření k zabezpečení datových úložišť a úložišť osobních údajů v listinné podobě, zejména …</p>
                    <p>C. Správce prohlašuje, že k osobním údajům mají přístup pouze jím pověřené osoby.</p>
                   
                    <h3>8. ZÁVĚREČNÁ USTANOVENÍ</h3>
                    <p>A. Odesláním objednávky z internetového objednávkového formuláře potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.</p>
                    <p>B. S těmito podmínkami souhlasíte zaškrtnutím souhlasu prostřednictvím internetového formuláře. Zaškrtnutím souhlasu potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.</p>
                    <p>C. Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na svých internetových stránkách a zároveň Vám zašle novou verzi těchto podmínek Vaši e-mailovou adresu, kterou jste správci poskytl/a.</p>
                    <p>Tyto podmínky nabývají účinnosti dnem 1.5.2021.</p>

                </div>
            
            </Layout>
        </div>
    )
}