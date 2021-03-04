import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components.css';

const CategoryCard = ({category}) => {
    return ( 
        
        <div className="category-card">
            <Link to={`/menu/${category.title}`}>
                <img src={category.image} alt={category.title}/>
            </Link>
            <h3>{category.title}</h3>
        </div>
     );
}
 
export default CategoryCard;