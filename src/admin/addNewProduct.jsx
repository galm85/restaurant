import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getAllCategories} from '../redux/actions/categoriesActions';
import {add_New_Product} from '../redux/actions/productsAction';

const AddNewProduct = (props) => {
    
    const [newProduct,setNewProduct] = useState({});

    useEffect(()=>{
          props.getAllCategories();
    },[])

    const handleChange = (e)=>{

        setNewProduct({...newProduct,[e.target.name]:e.target.value});
    }

    const handleImage = (e)=>{
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (e)=>{
            
            setNewProduct({...newProduct,image:e.target.result});
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await props.add_New_Product(newProduct);
            window.location ="/admin/products";
            
        } catch (error) {
            alert(error)
        }
    }
    
    
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                        <h1 className="text-center">Add New Product</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" name="title" className="form-control" onChange={handleChange}/>
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="category">Category:</label>
                                <select name="category" id="category" class="form-control" onChange={handleChange}>
                                    <option value="">Select a Category</option>
                                    {props.categories.map(category=>(
                                        <option value={category.title.toLowerCase()}>{category.title}</option>
                                    ))}
                                </select>
                            </div>


                            <div className="form-group">
                                <label htmlFor="price">Price:</label>
                                <input type="text" name="price" className="form-control" onChange={handleChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Image:</label>
                                <input type="file" name="image" className="form-control" onChange={handleImage}/>
                            </div>

                            
                                <label htmlFor="description">Description</label>
                                <textarea id="description" name="description"  rows="10" className="form-control" onChange={handleChange}></textarea>
                           
                                <div className="text-center mt-5">
                                    <button type="submit" className="btn btn-primary">Add</button>
                                </div>
                        </form>
                </div>
            </div>
        </div>
     );
}
 
const mapStateToProps = state=>({
    categories:state.categories.categories
})
export default connect(mapStateToProps,{getAllCategories,add_New_Product})(AddNewProduct);