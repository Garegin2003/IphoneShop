import React from "react";
import { Link } from "react-router-dom";
import './HomeInfo.css'

function HomeInfo() {
    return(
       <main>
            <div className="container">
                <div className="main-info">
                    <h2>Card</h2>
                    <h3>Save 5% on Apple products with a new Apple Card through December 25.</h3>
                    <h6>Only at Apple. Exclusions and terms apply.</h6>
                </div>
                <div className="main-links">
                    <Link>Learn more</Link>
                    <Link>Apply now</Link>
                </div>
            </div>
       </main>
    )
}

export default HomeInfo