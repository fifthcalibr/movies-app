import React from "react";
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img className="header_icon" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="imdb"/>
                </Link>
                <Link to="/movies/popular"><span>Popular</span></Link>
                <Link to="/movies/top_rated"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"><span>Upcoming</span></Link>
            </div>
        </div>
    );
}

export default Header;
