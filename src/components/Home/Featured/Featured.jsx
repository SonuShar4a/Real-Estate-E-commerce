import React from "react";
import FeaturedCard from "./FeaturedCard";
import "./Featured.css"
function Featured() {
    return (
        <>
            <section className="featured background">
                <div className="container">
                    <div className="heading">
                        <h1>Featured Property Types</h1>
                        <p>Find All Type of Property.</p>
                    </div>
                    <FeaturedCard />
                </div>
            </section>

        </>
    )
}
export default Featured;