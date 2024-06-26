import React from "react";
import "./Navbar.css";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <div className="menu-wrapper sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand logo" href="#"> Organic Food</a>
                <div className="collapse navbar-collapse justify-content-end" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/">Freshly Made</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Contact</Link>
                        </li>
                    </ul>
                    <Search></Search>
                </div>
            </nav>
        </div>
        </div>
    )
}