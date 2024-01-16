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
    const res = await axios.post(`${url}/products`,product);
    if(res.status === 200){

        alert(res.data.message);

        dispatch({
            type:"addNewProduct",
            payload:res.data.product
        })
        window.location ="/admin/products"
    }else{
        alert('something went wrong');
        console.log(res.data.message)
    }
}

export const deleteProduct = (id)=>async(dispatch)=>{
    await axios.delete(`${url}/products/${id}`);
    dispatch({
        type:"deleteProduct",
        payload:id
    });
}