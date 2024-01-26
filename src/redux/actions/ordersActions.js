import axios from 'axios';
import {url} from '../../config.json';
import jwtDecode from 'jwt-decode';

// Orders
export const getAllOrders = ()=>async(dispatch)=>{
    try{
        const res = await axios.get(`${url}/orders`);
        dispatch({
            type:"getAllOrders",
            payload:res.data
        })
    }catch(error){
        console.log(error.message);
    }

}

export const addNewOrder = (userId)=>async(dispatch)=>{
    
    const res = await axios.put(`${url}/orders/checkout/${userId}`);
    if(res.status === 200){
        dispatch({
            type:"addNewOrder",
        })
        alert(res.data.message);
        window.location = '/';
    }
    else{
        console.log(res.data.message);
    }
}

export const removeOrder = (orderId)=>async(dispatch)=>{
    try{
        const res = await axios.delete(`${url}/orders/remove-order/${orderId}`);
       if(res.status === 200){
           dispatch({
               type:"removeOrder",
               payload:orderId
            })
        }
    }catch(error){
        console.log(error.message);
    }
}

// Cart
export const updateCart = (user,product)=>async(dispatch)=>{
 
    try{
        let order = {user,product}
        const res = await axios.post(`${url}/orders`,order);
        if(res.status === 200){
            alert(res.data.message);
            dispatch({
                type:"addToCart",
                payload:res.data.order
            })
        }else{
            console.log(res.data);
        }
    }catch(error){
        console.log(error);
    }
}


export const getCart = ()=>async(dispatch)=>{
    let user = jwtDecode(localStorage.getItem('res'));

    const res = await axios.get(`${url}/orders/current/${user._id}`);
    if(res.status === 200){
      
        dispatch({
            type:'getCart',
            payload:res.data.cart? res.data.cart : []
        })
    }
}


export const getOrdersHistory = ()=>async(dispatch)=>{
    let user = jwtDecode(localStorage.getItem('res'));
    if(user){
        const res = await axios.get(`${url}/orders/order-history/${user._id}`);
        if(res.status === 200){
            dispatch({
                type:'getHistory',
                payload:res.data ? res.data : []
            })
        }
    }

}


export const removeItemFromCart = (userId,productId)=>async(dispatch)=>{
    try{

        const res = await axios.put(`${url}/orders/remove-item-from-cart/${userId}/${productId}`);
        if(res.status === 200){
            dispatch({
                type:'removeItemFromCart',
                payload:productId
            })
        }
    }catch(error){
        console.log(error.message)
    }
        
}


export const updateItemAmount = (userId,productId,op)=>async(dispatch)=>{
    try {
        const res = await axios.patch(`${url}/orders/update-item-quantity/${userId}/${productId}/${op}`);
        if(res.status === 500){
            alert(res.data.message);
            return;
        }
        if(res.status === 200){
            dispatch({
                type:'updateItemAmount',
                payload:res.data.cart
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}

