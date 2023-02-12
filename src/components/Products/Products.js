import React, { useState }  from "react";
import ProductItem from "../ProductsItem/ProductsItem";
import './Products.css'

function Products({prod}) {

    return(
        <section className="prod">
            {prod.map(e=><ProductItem key = {e.id} id = {e.id} price = {e.price} title = {e.title} img = {e.img}/>)}
        </section>   
    )
}

export default Products