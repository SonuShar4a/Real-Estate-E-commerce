import React from "react";
import "./Awards.css"
import { awards } from "../../Data/data";

function Awards() {
    return (
        <>
            <section className="awards padding">
                <div className="cotainer">
                    <div className="heading">
                        <h1>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</h1>
                        <p>Our Awards</p>
                    </div>
                    <div className='content grid4 mtop'>
                        {awards.map((val, index) => (
                            <div className='box' key={index}>
                                <div className='icon'>
                                    <span>{val.icon}</span>
                                </div>
                                <h1>{val.num}</h1>
                                <p>{val.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
export default Awards;