import React from "react";
import "./Price.css"
import PriceCard from "./PriceCard";
function Price() {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <div className="heading">
            <h1>Select Your Package</h1>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
          </div>
          <PriceCard />
        </div>
      </section>
    </>
  )
}
export default Price;