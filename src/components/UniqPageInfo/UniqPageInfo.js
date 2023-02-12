import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function UniqPageInfo(props) {
    const params  = useParams()
    const [currentProduct, setCurrentProduct] = useState(null)

    useEffect(() => {
        setCurrentProduct({
            ...props.prod.find(e=>e.id === params.id)
        })
    },[])

  const buy = () => {
    if (props.cartProd.some(e=>e.id === params.id)) {
        props.setCartProd([
            ...props.cartProd.map(e=>{ 
                if (e.id !== params.id) return e
                return {
                    ...e,
                    count:e.count + 1,
                    price:e.price + e.price/e.count
                }
            })
        ])
    }
    else{
        props.setCartProd([
        ...props.cartProd,
        {
            id:currentProduct.id,
            title:currentProduct.title,
            price:currentProduct.price,
            img:currentProduct.img,
            count:1
        }
    ]) 
    }
    
  }

    return(
        <div className="info">
            <h2>{currentProduct?.title}</h2>
            <p>{currentProduct?.description}</p>
            <h3>${currentProduct?.price}</h3>
            <button onClick={buy}><span>Buy</span></button>
        </div>
    )
}

export default UniqPageInfo