import './App.css';
import Product from './component/Product';


function App() {
  const productDetails1 = {
    productId : "1",
    productPic : "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    productName : "Tshirt",
    brand : "Adidas",
    productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price : "20k",
    rating : 5,
 }
const  productDetails2= {
  productId : "2",
    productPic : "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    productName : "Salman khan",
    brand : "bhai",
    productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price : "21k",
    rating : 4, 
}
const productDetails3 = {
  productId : "3",
  productPic : "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
  productName : "Salman khan2",
  brand : "bhai",
  productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  price : "21k",
  rating : 4, 
}
const productDetails4 = {
  productId : "4",
  productPic : "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
  productName : "Salman khan3",
  brand : "bhai",
  productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  price : "21k",
  rating : 4, 
}
const productDetails5 = {
  productId : "5",
  productPic : "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
  productName : "Salman khan4",
  brand : "bhai",
  productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  price : "21k",
  rating : 4, 
}



 

  return (
    <div className="App">
   <Product pd={productDetails1}/>
   <Product pd={productDetails2}/>
   <Product pd={productDetails3}/>
   <Product pd={productDetails4}/>
   <Product pd={productDetails5}/>
    </div>

  );
}

export default App;
