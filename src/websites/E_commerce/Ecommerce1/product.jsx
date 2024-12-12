import React from 'react'
import product from './assets/product.png'
export default function Product() {

  return (
    <div className='Ecommerce1-product'>
        <div className='Ecommerce1-ProductImageContainer'>
        <img src={product}/>

        </div>
        <p>Product name</p>
        <span>$60 <div className='Ecommerce1-AddtoFav' title='Add to Favourite'>+</div></span>
    </div>
  )
}
