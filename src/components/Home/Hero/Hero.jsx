import React from "react";
import "./Hero.css"
function Hero() {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="heading">
                        <h1>Search Your Next Home</h1>
                        <p>Find new & featured property located in your local city.</p>
                    </div>
                    <form className="flex">
                        <div className="box">
                            <span>City/Street</span>
                            <input type="text" placeholder="Location" />
                        </div>
                        <div className="box" >
                            <span>Property Type</span>
                            <input type="text" placeholder="Property Type" />
                        </div>
                        <div className="box">
                            <span>Price Range</span>
                            <input type="text" placeholder="Price Range" />
                        </div>
                        <div className="box">
                            <span className="af">Advance Filter</span>
                        </div>
                        <button id="button" type="submit">Search</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Hero;