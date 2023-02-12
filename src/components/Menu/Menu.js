import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

function Menu(props) {
    
    let countProduct = props.cartProd.length

    return(
        <nav>
            <div className="container">
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/products">Products</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/signup">SignUp</NavLink></li>
                    <li onClick={props.toogleCart}><NavLink  className={({isActive}) => isActive ? 'a' : ''}>Cart <span>{countProduct}</span></NavLink></li>
                    
                </ul>
            </div>
        </nav>
    )
   
}

export default Menu