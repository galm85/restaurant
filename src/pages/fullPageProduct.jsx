import React,{useEffect} from 'react';
import '../styles/pages.css';
import { connect } from 'react-redux';
import {updateCart} from '../redux/actions/ordersActions';
import {getUserData} from '../redux/actions/usersActions';

const FullPageProduct = (props) => {
    
    const product = props.location.state.product;
    
    useEffect(()=>{
        props.getUserData();
    },[])
    
    return ( 
       <div className="full-page-product-container" >
           <div className="full-page-product-image">
               <img src={product.image} alt={product.title}/>
           </div>
           <div className="full-page-product-info">
               <h1>{product.title}</h1>
               <p>{product.description}</p>
               <h4>Price: ${product.price}</h4>
               <button disabled={props.user ? false: true} onClick={()=>props.updateCart(props.user,product)} className="btn btn-success mt-4">Add To Cart</button>
           </div>
       </div>
     );
}
 

const ms = state=>({
    user:state.users.user,
})
export default connect(ms,{updateCart,getUserData})(FullPageProduct);