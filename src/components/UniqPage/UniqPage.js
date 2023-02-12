import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UniqPageImg from "../UniqPageImg/UniqPageImg";
import UniqPageInfo from "../UniqPageInfo/UniqPageInfo";
import './UniqPage.css'

function UniqPage({prod , cartProd , setCartProd}) {

    const params = useParams()
    return(
        <div className="uniq">
            <UniqPageImg   img = {prod.find(e=> e.id === params.id).img}/>
            <UniqPageInfo setCartProd = {setCartProd}  cartProd = {cartProd} prod ={prod}  title = {prod.find(e=> e.id === params.id).title} price = {prod.find(e=> e.id === params.id).price} description = {prod.find(e=> e.id === params.id).description}/>
        </div> 
    )
}

export default UniqPage