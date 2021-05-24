import React from 'react'


export default function NextServicesSection({children}) {
    return (
        <section className="bg-gradient-gray pt-7 pb-4">

                <div className="grid wrap">

                    <h2 className="cell l-12 m-12 s-12">Další služby</h2>

                    <div className="cell l-6 m-12 s-12">{children[0]}</div>

                    <div className="cell l-6 m-12 s-12">{children[1]}</div>

                </div>
    </section>
    )
}
