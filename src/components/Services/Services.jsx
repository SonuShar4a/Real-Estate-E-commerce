import React from "react";
import img from "../Images/services.jpg";
import Back from "../common/Back";
import FeaturedCard from "../Home/Featured/FeaturedCard";
import '../Home/Featured/Featured.css';
import './Services.css';
import Footer from "../common/Footer/Footer";

function Services() {
    return (
        <>
            <section className="services">
                <Back name="Services" title="Services -All Services" cover={img} />
                <FeaturedCard />
            </section>
            <Footer />
        </>
    )
}
export default Services;