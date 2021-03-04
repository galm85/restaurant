import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getAllCategories,deleteCategory} from '../redux/actions/categoriesActions.js';
import {Link} from 'react-router-dom';

const AdminCategories = (props) => {

    useEffect(()=>{
        props.getAllCategories();
    },[])

    return ( 
       <div className="container">
           <div className="row mt-5">
               <div className="col-md-12">
                   <h1 className="text-center">Admin Panel | Categories</h1>
               </div>
           </div>

            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.categories.map((category,index)=>(
                                <tr key={category._id}>
                                    <td>{index+1}</td>
                                    <td><img width="50px" src={category.image} alt={category.title}/></td>
                                    <td>{category.title}</td>
                                    <td><Link className="btn btn-warning" to={{pathname:"/admin/categories/update-category",state:{category}}}>Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={()=>props.deleteCategory(category._id)}>Delete</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
               <div className="col-md-12">
                   <Link to="/admin/categories/add-new-category" className="btn btn-primary" >Add New Category</Link>
               </div>
           </div>

       </div>
     );
}
 
const mapStateToProps = state=>({
    categories:state.categories.categories
})
export default connect(mapStateToProps,{getAllCategories,deleteCategory})(AdminCategories);