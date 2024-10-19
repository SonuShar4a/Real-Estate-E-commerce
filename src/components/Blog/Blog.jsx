import React from "react";
import img from "../Images/about.jpg";
import Back from "../common/Back";
import RecentCard from "../Home/Recent/RecentCard";
import '../Home/Recent/Recent.css';
import './Blog.css';
import Footer from "../common/Footer/Footer";

function Blog() {
    return (
        <>
            <section className="blog">
                <Back name="Blog" title="Blog Grid - Our Blogs" cover={img} />
                <RecentCard />
            </section>
            <Footer />
        </>
    )
}
export default Blog;