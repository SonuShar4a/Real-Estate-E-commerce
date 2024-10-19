import React from "react";
import "./Recent.css"
import { list } from "../../Data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
function RecentCard() {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((items, index) =>
        (
          <div className="box shadow" key={index}>
            <div className="img">
              <img src={items.cover} alt="" />
            </div>
            <div className="text">
              <div className="category flex">
                <span style={{ background: items.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: items.category === "For Sale" ? "#25b579" : "#ff9800" }}>{items.category}</span>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h4 className="title">{items.name}</h4>
              <p><FontAwesomeIcon icon={faLocationDot} />{items.location}</p>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">{items.price}</button>
                <label htmlFor="">/sqft</label>
              </div>
              <span>{items.type}</span>
            </div>
          </div>
        )
        )}
      </div>

    </>
  )
}
export default RecentCard;