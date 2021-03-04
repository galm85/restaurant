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


export const removeOrder = (order)=>async(dispatch)=>{
    await axios.delete(`${url}/orders/remove-order/${order._id}`);
    dispatch({
        type:"removeOrder",
        payload:order._id
    })
}


