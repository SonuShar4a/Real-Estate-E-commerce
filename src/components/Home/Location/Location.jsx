import React from "react";
import "./Location.css"
import { location } from "../../Data/data";

function Location() {
    return (
        <>
            <section className="location padding">
                <div className="container">
                    <div className="heading">
                        <h1>Explore By Location</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className='content grid3 mtop'>
                        {location.map((val, index) => (
                            <div className='box' key={index}>
                                <img src={val.cover} alt="" />
                                <div className="overlay">
                                    <h5>{val.name}</h5>
                                    <p>
                                        <label>{val.Villas}</label>
                                        <label>{val.Apartments}</label>
                                        <label>{val.Offices}</label>
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
export default Location;