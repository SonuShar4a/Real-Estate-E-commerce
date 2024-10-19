import React from "react";
import './header.css';
import { Link } from "react-router-dom/cjs/react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg " id="nav">
        <div class="container-fluid">
          <img src="./public/images/OIP-removebg-preview.png " id="logo" alt="" />
          <button class="navbar-toggler" id="toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent"  >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" id="hover"><Link to="/">Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="hover"><Link to="/about">About</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="hover" ><Link to="/services">Services</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="hover"  ><Link to="/blog">Blog</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="hover" ><Link to="/pricing">Pricing</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="hover" ><Link to="/contact">Contact</Link></a>
              </li>
            </ul>
            <div className="SingIn">
              <button class="btn btn-outline-success" type="submit"><Link to="/blog">My List</Link></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;