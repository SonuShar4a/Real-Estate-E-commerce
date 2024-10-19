import React from "react";
import img from "../Images/pricing.jpg";
import Back from "../common/Back";
import './contact.css';
import Footer from "../common/Footer/Footer";
function Contact() {
    return (
        <>
            <section className="contact">
                <Back name="Contact Us" title="Get Helps & Friendly Support" cover={img} />
                <div className="formContainer">
                    <form className="shadow">
                        <h4>Fillup The Form</h4>

                        <div id="ip">
                            <input type="text" placeholder="Name" />
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <input type="text" placeholder="Subject" />
                        <textarea name="message" placeholder="Message" ></textarea>
                        <button>SubmitRequest</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Contact;