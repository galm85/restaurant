import React,{useEffect} from 'react';
import '../styles/components.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCart} from '../redux/actions/ordersActions';
import {getUserData} from '../redux/actions/usersActions';


const ProductCard = (props) => {
    
   

    useEffect(()=>{
        props.getUserData();
    },[])

    const product = props.product;

    return ( 
       <div className="product-card">
           <div className="product-image">
                <img src={product.image} alt={product.title}/>  
           </div>
           <div className="product-card-body">
                <div className="product-info">
                    <h3>{product.title}</h3>
                    <h6>Price: ${product.price}</h6>
                </div>
                <div className="product-card-actions">
                    <Link class="btn btn-primary mb-1" to={{pathname:`/menu/${product.category}/${product.title}`,state:{product}}}>More info</Link>
                    <button disabled={props.user?"":"disabled"} className="btn btn-success" onClick={()=>props.updateCart(props.user,product)}>{props.user?"Add to cart":"please sign in"}</button>
                </div>
           </div>
       </div>
     );
}
 
const ms = state=>({
    user:state.users.user,
})
export default connect(ms,{updateCart,getUserData})(ProductCard);