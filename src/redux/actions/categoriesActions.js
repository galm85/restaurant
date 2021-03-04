import axios from 'axios';
import {url} from '../../config.json';

export const getAllCategories = ()=> async(dispatch)=>{
    const res= await axios.get(`${url}/categories`);
    dispatch({
        type:"getAllCategories",
        payload:res.data
    })
}

export const deleteCategory = (id)=>async(dispatch)=>{
    await axios.delete(`${url}/categories/${id}`);
    dispatch({
        type:"deleteCategory",
        payload:id
    })
}

export const add_new_Category = (category)=>async(dispatch)=>{
    await axios.post(`${url}/categories`,category);
    dispatch({
        type:'addNewCategory',
        payload:category
    })
}