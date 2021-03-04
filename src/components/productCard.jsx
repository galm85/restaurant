import React,{useEffect,useState} from 'react';
import '../styles/components.css';
import {Link} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {connect} from 'react-redux';
import {addNewOrderItem} from '../redux/actions/usersActions';

const ProductCard = (props) => {
    
    const [isUser,setIsUser] = useState(true);
    
    const addOrder = async(product)=>{
        
        await props.addNewOrderItem(product);
        window.location='';
        alert('added to my orders');
    }


    useEffect(()=>{
        let user = localStorage.getItem('res');
        if(!user){
           setIsUser(false);
        }

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
                    
                    <button disabled={isUser?"":"disabled"} className="btn btn-success" onClick={()=>addOrder(product)}>{isUser?"Add to cart":"please sign in"}</button>
                </div>
           </div>
       </div>
     );
}
 

export default connect(null,{addNewOrderItem})(ProductCard);