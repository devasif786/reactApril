import './App.css';
import Product from './component/Product';


function App() {
  const productDetails1 = {
    productId : "1",
    productPic : "https://cdn.shopify.com/s/files/1/0589/3278/9413/products/2_985e04d7-a840-4029-bdab-8ad97307f951_1024x1024@2x.jpg?v=1663967225",
    productName : "Tshirt",
    brand : "Adidas",
    productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price : "50k",
    rating : 5,
 }
const  productDetails2= {
  productId : "2",
    productPic : "https://m.media-amazon.com/images/I/21cpm8o73rL.jpg",
    productName : "Tshirt",
    brand : "Puma",
    productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price : "40k",
    rating : 4, 
}
const productDetails3 = {
  productId : "3",
  productPic : "https://cdn.shopify.com/s/files/1/0430/7540/3941/products/G_76G130_023_F_a893dabf-8afd-4d6b-84e5-81b0e556c64a_1800x1800.jpg?v=1657508287",
  productName : "Tshirt",
  brand : "Nike",
  productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  price : "30k",
  rating : 4, 
}
const productDetails4 = {
  productId : "4",
  productPic : "https://imagescdn.reebok.in/img/app/product/7/789260-9229788.jpg?auto=format",
  productName : "Tshirt",
  brand : "Reebok",
  productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  price : "20k",
  rating : 4, 
}
const productDetails5 = {
  productId : "5",
  productPic : "https://cdn.shopify.com/s/files/1/0589/3278/9413/products/1_08d32176-a874-442e-a3ae-33b276d44509_1024x1024@2x.jpg?v=1648215133",
  productName : "Tshirt",
  brand : "Zara",
  productDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  price : "10k",
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
