import React from 'react'
import './Product.css'
export default function Product({pd}) 
{
 const{ productId,productPic,productName ,brand , productDescription , price , rating}=pd
 const handleAddToCart=()=>{
  alert(`Product of ID ${productId}, which is ${productName} of brand ${brand} has price of ${price} is added in the cart, please proceed to pay!`);
 }
    
  return (
    <div>
    <div id="pdiv">
    <img id="img"src={productPic} alt={productName} />
      <div>
        <h2><span id="pnam">{productName}</span></h2>
        <h3><span id="brand"> {brand}</span></h3>
        <p id="des">{productDescription}</p>
        <p><span id="price">Price: {price}</span></p>
        <p id ="rating">Rating: {rating}/5</p>
        <div id ="btn1"><button id="btn"onClick={handleAddToCart}>Add to Cart</button></div>
        
      </div>
    </div>
    </div>
  )
}
