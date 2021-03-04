import React,{useState,useEffect} from 'react';
import {renderInput,renderButton,validateForm} from '../utils/form';
import {connect} from 'react-redux';
import {getAllCategories} from '../redux/actions/categoriesActions';
import axios from 'axios';
import {url} from '../config.json';

const AdminEditProduct = (props) => {
    
   const [product,setProduct] = useState({...props.location.state.product});

    useEffect(()=>{
        props.getAllCategories();
    },[])


   const handleSubmit = async(e)=>{
        e.preventDefault();
        let res = await axios.patch(`${url}/products/update-product/${product._id}`,product); 
        alert(res.data);
        props.history.goBack(); 
   }

   const handleChange = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
   }

   const handleImage = (e)=>{
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e)=>{
        setProduct({...product,image:e.target.result});
    }
}

    return (
            <div className="container">
                
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Update {product.title}</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            {renderInput('title','Title',null,'text',handleChange,product.title)}

                            <label className="mt-4" htmlFor="category">Category:</label>
                            <select name="category" id="category" className="form-control" onChange={handleChange}>
                                <option value="">{product.category}</option>
                                {props.categories && props.categories.map(category=>(
                                        <option value={category.title.toLowerCase()}>{category.title}</option>
                                        ))}
                            </select>

                            {renderInput('price','Price',null,'text',handleChange,product.price)}
                            
                            {renderInput('image','Image',null,'file',handleImage,'')}
                            
                            <div className="mt-4 text-center">
                                <img src={product.image} width="200px" height="100px" alt=""/>
                            </div>
                            
                             <textarea name="description" cols="30" rows="10" className="form-control mt-4" onChange={handleChange}>{product.description}</textarea>
                        
                                {renderButton('Update')}

                        </form>
                    </div>
                </div>

            </div>
          );
}
 
const mapState = state=>({
    categories:state.categories.categories
})
export default connect(mapState,{getAllCategories})(AdminEditProduct);