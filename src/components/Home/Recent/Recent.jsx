import React from "react";

import "./Recent.css"
import RecentCard from "./RecentCard";
function Recent() {
    return (
        <>
            <section className="recent padding">
                <div className="container">
                    <div className="heading">
                        <h1>recent Property Listed</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt non accusamus eum rerum sit esse quibusdam excepturi, blanditiis modi sapiente optio nam, error ab consequatur voluptatem velit officiis, incidunt adipisci!.</p>
                    </div>

                    <RecentCard />
                </div>
            </section>

        </>
    )
}
export default Recent;