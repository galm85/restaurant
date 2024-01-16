import React,{useState} from 'react';
import {connect} from 'react-redux';
import {add_new_Category} from '../redux/actions/categoriesActions';

const AddNewCategory = (props) => {
    
    const [newCategory,setNewCategory] = useState({});

    

    const handleChange = (e)=>{
        setNewCategory({...newCategory,[e.target.name]:e.target.value});
    }

    const handleImage = (e)=>{
        const file = e.target.files[0];
        setNewCategory({...newCategory,image:file});
    }

  

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData();   
        data.append('title',newCategory.title);
        data.append('image',newCategory.image);
        
        try {
            props.add_new_Category(data);
            
        } catch (error) {
            alert(error)
        }
    }
    
    
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                        <h1 className="text-center">Add New Category</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" name="title" className="form-control" onChange={handleChange}/>
                            </div>


                            <div className="form-group">
                                <label htmlFor="image">Image:</label>
                                <input type="file" name="image" className="form-control" onChange={handleImage}/>
                            </div>

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
export default connect(mapStateToProps,{add_new_Category})(AddNewCategory);