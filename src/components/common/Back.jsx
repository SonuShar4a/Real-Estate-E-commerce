import React from "react";

import "../About/Abouts.css"


function Back({ name, title, cover }) {
    return (
        <>
            <div className="back">
                <div className="containers">
                    <span className="pleft">{name}</span>
                    <h1 className="pleft">{title}</h1>
                </div>
                <img src={cover} alt="" />

            </div>


        </>
    )
}
export default Back;