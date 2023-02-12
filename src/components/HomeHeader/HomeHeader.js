import React from "react";
import { Link } from "react-router-dom";
import './HomeHeader.css'

function HomeHeader() {
    return(
        <header>
            <div className="container">
                <h2 className="headline">iPhone 14</h2>
                <h3 className="subhead">Big and bigger.</h3>
                <div className="cta-links">
                    <Link>Learn more</Link>
                    <Link>Buy</Link>
                </div>
                <div className="img"></div>
            </div>
            
        </header>
    )
    
}
export default HomeHeader