import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './Cart.css'

function Cart(props) {

  let total = 0
  

  const deleteProduct = (id) => {
    props.setCartProd([
      ...props.cartProd.filter(e => e.id !== id)
    ])
  }

  const clearCart = () => {
    props.setCartProd([])
  }

  const plus = () => {
    props.setCartProd([
      ...props.cartProd.map(e=>{ 
          return {
              ...e,
              count:e.count + 1,
              price:e.price + e.price/e.count
          }
      }),
  ])
  }

  const minus = () => {

    props.setCartProd([
      ...props.cartProd.map(e=>{ 
          if (e.count <= 1)  return e
          return {
              ...e,
              count:e.count - 1,
              price:e.price - e.price/e.count,
          }
      })
  ])
  }
    total = props.cartProd.reduce((acc,e) => acc + e.price , 0); 

    return(
        <div className="cartItems">
          <div>
            <h1>Total ${total}</h1>
            <h4 onClick={clearCart}>Clear Cart</h4>
          </div>
          {props.cartProd.map(e => (
            <div className="cart-item">
              <img src={e.img} />
              <h1>{e.title}</h1>
              <h3>${e.price}</h3>
              <p onClick={() => deleteProduct(e.id)}>X</p>
              <span onClick={plus} className="plus">+</span>
              <span>{e.count}</span>
              <span onClick={minus} className="minus">-</span>
            </div>
          ))}
        </div>
    )
}

export default Cart