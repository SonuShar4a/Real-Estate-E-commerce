import React from "react";
import "./Featured.css"
import { featured } from "../../Data/data";
function FeaturedCard() {
    return (
        <>
            <div className="contents grid5 mtop">
                {featured.map((items, index) =>
                (
                    <div className="box" key={index}>
                        <img src={items.cover} alt="" />
                        <h4>{items.name}</h4>
                        <label>{items.total}</label>
                    </div>
                )
                )}
            </div>

        </>
    )
}
export default FeaturedCard;