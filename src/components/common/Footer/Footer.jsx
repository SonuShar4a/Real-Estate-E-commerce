import React from "react"

import "./Footer.css"
import { footer } from "../../Data/data";

function Footer() {
  return (
    <>
      <section className="footerContact">
        <div className="containers">
          <div className="send flexs">
            <h1>Do You Have Questions ?</h1>
            <p>We'll help you to grow your career and growth.</p>
          </div>
          <button className="btn5">Contact Us Today</button>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src='./public/images/OIP-removebg-preview.png' alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className="input flex">
                <input type="text" placeholder="Enter Email" />
                <button className="subbtn">Subscribe</button>
              </div>
            </div>
          </div>
          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 RentUP. Designd By Sonu.</span>
      </div>
    </>
  )
}
export default Footer;