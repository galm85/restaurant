import axios from 'axios';
import {url} from '../../config.json';
import jwtDecode from 'jwt-decode';

export const getAllOrders = ()=>async(dispatch)=>{
    const res = await axios.get(`${url}/orders`);
    console.log(res.data);
    dispatch({
        type:"getAllOrders",
        payload:res.data
    })

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




export const removeOrder = (order)=>async(dispatch)=>{
    await axios.delete(`${url}/orders/remove-order/${order._id}`);
    dispatch({
        type:"removeOrder",
        payload:order._id
    })
}

// new
export const updateCart = (product,op)=>async(dispatch)=>{
    let user = jwtDecode(localStorage.getItem('res'));
    const res = await axios.get(`${url}/users/get-user/${user._id}`);
    user = res.data;
    console.log(user);

    let order = {
        userId:user._id,
        name:user.firstName + " " + user.lastName,
        email:user.email,
        phone:user.phone,
        address:user.address,
        product:product,
        op:op
    }

    const response = await axios.post(`${url}/orders`,order)
    if(response.status === 200){
        alert(response.data.message);
    }else{
        console.log(response.data);
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

