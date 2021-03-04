import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getProductsByCategory} from '../redux/actions/productsAction';
import ProductCard from '../components/productCard';
 
const Products = (props) => {


    useEffect(()=>{
        const category = props.match.params.category.toLowerCase();
        props.getProductsByCategory(category);
        
    },[])

    if(!props.products){
        return <div>Loading...</div>
    }
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="products-header">Our {props.match.params.category}</h1>
                </div>
            </div>

            <div className="row d-flex justify-content-between">
                {props.products.map(product=>(
                    <div key={product._id} className="col-md-4">
                        <ProductCard key={product._id} product={product}/>
                    </div>
                ))}     
            </div>
        
        </div>
     );
}
 

const mapStateToProps = state=>({
    products:state.products.products
})

export default connect(mapStateToProps,{getProductsByCategory})(Products);