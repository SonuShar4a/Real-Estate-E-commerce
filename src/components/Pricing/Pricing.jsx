import React from "react";
import img from "../Images/pricing.jpg";
import Back from "../common/Back";
import PriceCard from "../Home/Price/PriceCard";
import './Pricing.css'
import Footer from "../common/Footer/Footer";

function Pricing() {
    return (
        <>
            <section className="pricing">
                <Back name="30 days money back guarantee" title="No Extra Fees. Friendly Support" cover={img} />
                <PriceCard />
            </section>
            <Footer />
        </>
    )
}
export default Pricing;