import React,{useEffect} from 'react';
import {getAllProducts,deleteProduct} from '../redux/actions/productsAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const AdminProducts = (props) => {

    useEffect(()=>{
        props.getAllProducts();
    },[]);

    
    

    if(!props.products){
        return <div>Loading...</div>
    }

    return ( 
       <div className="container">
           <div className="row mt-5">
               <div className="col-md-12">
                   <h1 className="text-center">Admin Panel | Products</h1>
               </div>
           </div>

           <div className="row">
               <div className="col-md-12">
                   <table className="table">
                       <thead>
                           <tr>
                               <th>#</th>
                               <th>Title</th>
                               <th>Price</th>
                               <th>Image</th>
                               <th>Category</th>
                               <th>Edit</th>
                               <th>Delete</th>
                           </tr>
                       </thead>
                       <tbody>
                           {props.products.map((product,index)=>(
                               <tr key={product._id}>
                                    <td>{index+1}</td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td><img width="50px" src={product.image} alt={product.title}/></td>
                                    <td>{product.category}</td>
                                    <td><Link to={{pathname:"/admin/products/update-product",state:{product}}}className="btn btn-warning">Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={()=>props.deleteProduct(product._id)}>Delete</button></td>
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
           </div>
           <div className="row">
               <div className="col-md-12">
                   <Link to="/admin/products/add-new-product" className="btn btn-primary" >Add New Product</Link>
               </div>
           </div>
       </div>
     );
}


const mapStateToProps = state =>({
    products:state.products.products
})
export default connect(mapStateToProps,{getAllProducts,deleteProduct})(AdminProducts);