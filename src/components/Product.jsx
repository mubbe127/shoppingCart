import { useEffect, useState } from "react"
import "./Product.css"

export {Product}


function Product({item, addItem, setItemAdded}){

  const [value, setValue]= useState(1)

  function onChange(event) {
    setValue(event.target.value)
  }
    return (


        <div className="product">
             <div className="title"><h5>{item.title}</h5></div>
            <div className="image"><img src={item.image} alt="" /></div>
            <p>${item.price} </p>
            <input min="0" type="number" value={value} onChange={(event)=>onChange(event)}/>
            <button onClick={()=>addItem(item, value, setItemAdded)}>Add to cart</button>
            
        </div>
    )
}