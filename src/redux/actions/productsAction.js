import axios from 'axios';
import {url} from '../../config.json';


export const getAllProducts = ()=>async(dispatch)=>{
    const res = await axios.get(`${url}/products`);
    dispatch({
        type:"getAllProducts",
        payload:res.data
    })
}


export const getProductsByCategory = (category)=>async(dispatch)=>{
    const res = await axios.get(`${url}/products/${category}`)
    dispatch({
        type:'getProductsByCategory',
        payload:res.data
    })
}

export const add_New_Product = (product)=>async(dispatch)=>{
    await axios.post(`${url}/products`,product);
    dispatch({
        type:"addNewProduct",
        payload:product
    })
}

export const deleteProduct = (id)=>async(dispatch)=>{
    await axios.delete(`${url}/products/${id}`);
    dispatch({
        type:"deleteProduct",
        payload:id
    });
}