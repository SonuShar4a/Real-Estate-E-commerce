import React from "react";
import "./Price.css"
import { price } from "../../Data/data";


function PriceCard() {
    return (
        <>
            <div className="content flex mtop">
                {price.map((items, index) => {
                    return (
                        <div className="box shadow" key={index}>
                            <div className="topbtn">
                                <button className="btn3">{items.best}</button>
                            </div>
                            <h3>{items.plan}</h3>
                            <h1>
                                <span>$</span>{items.price}
                            </h1>
                            <p>{items.ptext}</p>

                            <ul>
                                {items.list.map((val) => {
                                    const { icon, text, change } = val
                                    return (
                                        <li>
                                            <label
                                                style={{
                                                    background: change === "color" ? "#dc35451f" : "#27ae601f",
                                                    color: change === "color" ? "#dc3848" : "#27ae60",
                                                }}
                                            >
                                                {icon}
                                            </label>
                                            <p>{text}</p>
                                        </li>
                                    )
                                })}
                            </ul>

                            <button
                                className='btn5'
                                style={{
                                    background: items.plan === "Standard" ? "#27ae60" : "#fff",
                                    color: items.plan === "Standard" ? "#fff" : "#27ae60",
                                }}
                            >
                                Start {items.plan}
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default PriceCard;