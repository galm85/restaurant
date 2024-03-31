import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getAllCategories} from '../redux/actions/categoriesActions'
import CategoryCard from '../components/categoryCard';

const Menu = (props) => {

    useEffect(()=>{
        props.getAllCategories();
    },[]);

    if(!props.categories){
        return <div>Loading...</div>
    }

    return ( 
        <React.Fragment>
            <div className="menu-banner">
                   <img  src="./images/menuBanner.jpg" alt="menu Banner"/>
                    <h1 style={{fontFamily:'Dancing Script, cursive'}}> Our Menu</h1>
            </div>
       <div className="menu-container">
           <div className="row d-flex mt-5 m-auto">
                    {props.categories.map(category=>(
                        <div className="col-md-4 my-5">
                        <CategoryCard key={category._id} category={category}/>
                </div>
                   ))}
               
           </div>
       </div>
    
    </React.Fragment>
     );
}
 

const mapStateToProps = state=>({
    categories:state.categories.categories,
})

export default connect(mapStateToProps,{getAllCategories})(Menu);