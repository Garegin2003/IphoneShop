import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import Menu from "../../components/Menu/Menu";

function HomeWrapper(props) {
    const [cart , setCart] = useState(false)

    const toogleCart = () => {

        setCart(cart ? false : true) 

    }

    return(
        <>
            <Menu cartProd = {props.cartProd} toogleCart = {toogleCart} cart = {cart}/>
            {cart ? <Cart setCartProd = {props.setCartProd} cartProd  = {props.cartProd}/> : ''}
            <Outlet />
        </>
    )
}

export default HomeWrapper