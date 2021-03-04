import React,{useState} from 'react';
import {renderButton,renderInput} from '../utils/form';
import axios from 'axios';
import {url} from '../config.json';

const AdminEditCategory = (props) => {

    const [category,setCategory] = useState({...props.location.state.category})
    const title = props.location.state.category.title;
    
    const handleImage = (e)=>{
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (e)=>{
            setCategory({...category,image:e.target.result});
        }
    }

    const handleChange = (e)=>{
        setCategory({...category,[e.target.name]:e.target.value})

    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await axios.patch(`${url}/categories/update-category/${category._id}`,category);
        alert(res.data);
        props.history.goBack();
    }

    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h1 className="text-center">Edit {title}'s Category</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        {renderInput('title','Title',null,'text',handleChange,category.title)}
                        {renderInput('image','Image',null,'file',handleImage,'')}
                        <div className="text-center mt-4">
                            <img width="200px" height="100px" src={category.image} alt=""/>
                        </div>
                        {renderButton('Update')}
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AdminEditCategory;