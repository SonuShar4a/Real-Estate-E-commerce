import React from "react";
import imgs from "../Images/about.jpg";
import Back from "../common/Back";
import Footer from "../common/Footer/Footer";

function About() {
  return (
    <>
      <section className="about">
        <Back name="Anout Us" title="About Us-Who We Are" cover={imgs} />
        <div  >
          <div className="container flex mtop">
            <div className="left row">
              <h1>Our Agency Story</h1>
              <p>Check out our company story and work process</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              <button id="aboutbtn">More About Us</button>
            </div>
            <div className="right row">
              <img src="./public/immio.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />


    </>
  )
}
export default About;