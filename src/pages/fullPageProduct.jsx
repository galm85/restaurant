import React from 'react';
import '../styles/pages.css';

const FullPageProduct = (props) => {
    
    const product = props.location.state.product;
    
    
    
    return ( 
       <div className="full-page-product-container" >
           <div className="full-page-product-image">
               <img src={product.image} alt={product.title}/>
           </div>
           <div className="full-page-product-info">
               <h1>{product.title}</h1>
               <p>{product.description}</p>
               <h4>Price: ${product.price}</h4>
               <button className="btn btn-success mt-4">Add To Cart</button>
           </div>
       </div>
     );
}
 
export default FullPageProduct;