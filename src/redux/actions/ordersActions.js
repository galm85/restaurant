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

export const addNewOrder = (order,total)=>async(dispatch)=>{
    const {_id} = jwtDecode(localStorage.getItem('res'));
    const {data} = await axios.get(`${url}/users/get-user/${_id}`);
    let fullOrder = {
        userId:data._id,
        name:data.firstName + ' ' + data.lastName,
        email:data.email,
        phone:data.phone,
        address:data.address,
        orders:order,
        total:total
    }
    await axios.post(`${url}/orders`,fullOrder);
    dispatch({
        type:"addNewOrder",
        payload:fullOrder
    })
}

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


export const removeOrder = (order)=>async(dispatch)=>{
    await axios.delete(`${url}/orders/remove-order/${order._id}`);
    dispatch({
        type:"removeOrder",
        payload:order._id
    })
}


