import React from "react";
import ProductsImg from "../ProductsImg/ProductsImg";
import ProductsInfo from "../ProductsInfo/ProductsInfo";

function ProductItem(props) {
    return(
        <div  className="item">
            <ProductsImg  img = {props.img}/>
            <ProductsInfo id ={props.id}  price = {props.price} title = {props.title}/>
        </div>
    )
}

export default ProductItem