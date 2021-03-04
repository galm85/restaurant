import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import '../styles/admin.css';

import AdminProducts from './adminProducts';
import AddNewProduct from './addNewProduct';
import AdminCategories from './adminCategories';
import addNewCategory from './addNewCategory';
import adminUsers from './adminUsers';
import adminOrders from './adminOrders';
import AdminEditProduct from './adminEditProduct';
import AdminEditCategory from './adminEditCategory';
import AdminJobs from './adminJobs';

const Dashboard = () => {

    const validateUser = async ()=>{
        let user = await localStorage.getItem('res');
        if(!user){
            window.location ='/sign-in';
        }
    }
    validateUser()
    return (
        
        
        <div className="container-dashboard" style={{width:"100%"}}>
            <div className="row">
                <div className="col-md-2">
                    <div className="side-nav">
                        <ul>
                            <li><Link to="/admin/users">Users</Link></li>
                            <li><Link to="/admin/categories">Categories</Link></li>
                            <li><Link to="/admin/products">Products</Link></li>
                            <li><Link to="/admin/orders">Orders</Link></li>
                            <li><Link to="/admin/jobs">Jobs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-10">
                    <Switch>
                        <Route exact path="/admin/products" component={AdminProducts}/>
                        <Route exact path="/admin/products/add-new-Product" component={AddNewProduct}/>
                        <Route exact path="/admin/products/update-product" component={AdminEditProduct}/>
                        <Route exact path="/admin/categories" component={AdminCategories} />
                        <Route exact path="/admin/categories/add-new-category" component={addNewCategory}/>
                        <Route exact path="/admin/categories/update-category" component={AdminEditCategory}/>
                        <Route exact path="/admin/users" component={adminUsers}/>
                        <Route exact path="/admin/orders" component={adminOrders}/>
                        <Route exact path="/admin/jobs" component={AdminJobs}/>
                    </Switch>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;