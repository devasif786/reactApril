import React from 'react'

export default function Product({pd}) 
{
 const{ productId,productPic,productName ,brand , productDescription , price , rating}=pd
 const handleAddToCart=()=>{
  alert(`Product of ID ${productId}, which is ${productName} of brand ${brand} has price of ${price} is added in the cart, please proceed to pay!`);
 }
    
  return (
    <div>
    <img src={productPic} alt={productName} />
      <div>
        <h2>{productName}</h2>
        <h3>{brand}</h3>
        <p>{productDescription}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}/5</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  )
}
