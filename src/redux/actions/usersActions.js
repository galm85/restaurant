import axios from 'axios';
import {url} from '../../config.json';
import jwtDecode from 'jwt-decode';

export const getAllUsers = ()=>async(dispatch)=>{
    const res = await axios.get(`${url}/users`);
    dispatch({
        type:"getAllUsers",
        payload:res.data
    })

}

export const registerNewUser = (user)=>async(dispatch)=>{
    await axios.post(`${url}/users`,user);
    dispatch({
        type:"registerNewUser",
        payload:user
    })
}

export const signInUser = (user)=>async(dispatch)=>{
    let {data} = await axios.post(`${url}/users/sign-in`,user);
    localStorage.setItem('res',data.token);
}


export const getUserData = ()=>async(dispatch)=>{
    try{
        const token = await localStorage.getItem('res');
        const userDecode = await jwtDecode(token);
        const user = await axios.get(`${url}/users/get-user/${userDecode._id}`);
        dispatch({
            type:"getUserData",
            payload:user.data
        })
    }catch(error){
        dispatch({
            type:"getUserData",
            payload:null
        })
    }
    

}

export const logoutUser = ()=>{
    localStorage.removeItem('res');
    return {
        type:"logoutUser"
    }
}


export const addNewOrderItem = (product)=>async(dispatch)=>{
    const {_id} = jwtDecode(localStorage.getItem('res'));
    let itemId = Math.round(Math.random()*999999);
    let order = {...product,quantity:1,userId:_id,itemId:itemId}
    await axios.patch('http://localhost:4000/users/add-order/'+_id,order);
    dispatch({
        type:'addNewOrderItem',
        payload:order
    })
}

export const removeItemFromOrder = (id)=>async(dispatch)=>{
    const {_id} = jwtDecode(localStorage.getItem('res'));
    await axios.patch(`${url}/users/remove-item/${_id}`,{id:id});
    dispatch({
        type:'removeItemFromOrder',
        payload:id,
    })
}

export const updateQuantity = (op,itemId)=>async(dispatch)=>{
    const {_id} = jwtDecode(localStorage.getItem('res'));
    await axios.patch(`${url}/users/updateQuantity/${_id}`,{op:op,itemId:itemId});
    dispatch({
        type:"updateQuantity",
        payload:{op:op,itemId:itemId}
    })

}

export const getTotal = ()=>async(dispatch)=>{
    let total = 0
    const {_id} = jwtDecode(localStorage.getItem('res'));
    let {data} = await axios.get(`${url}/users/get-user/${_id}`);

    let orders = data.orders;
    
        for(let i =0;i<orders.length;i++){
            total += orders[i].price * orders[i].quantity;
        }
    
    dispatch({
        type:"getTotal",
        payload:total
    })
}


