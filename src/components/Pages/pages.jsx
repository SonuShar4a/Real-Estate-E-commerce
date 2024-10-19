import React from "react";
import Header from "../common/Header/header";
// import {createBrowsweRouter, Router, RouterProvider} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../common/Footer/Footer";
import Services from "../Services/Services";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contacts/Contact";

const Pages = () => {

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/services' component={Services} />
                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/pricing' component={Pricing} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Router>
        </>
    )
}
export default Pages;