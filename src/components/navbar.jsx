import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserData} from '../redux/actions/usersActions';
import {getCart} from '../redux/actions/ordersActions';
const Navbar = (props) => {

    useEffect(()=>{
        props.getCart();
        async function getData(){
            await props.getUserData();
            
        }
        getData();
    },[])

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Resturant</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link ml-auto" aria-current="page" to="/about-us">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu">Menu</Link>
                    </li>
                      
                    {props.user && props.user.orders && (
                       <li className="nav-item">
                       <Link className="nav-link" to="/orders">Cart <span className="cart-badge">{props.cart.length && props.cart.length }</span></Link>
                   </li>  
                    )}
                </ul>

                <ul className="navbar-nav">
                    {props.user && (
                        <React.Fragment>

                       <li className="nav-item">
                            <img width="40px" height="40px" style={{borderRadius:"50%"}} src={props.user.image}/>
                        </li> 
                       <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/edit-user">{props.user.firstName}</Link>
                        </li> 
                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/logout">Logout</Link>
                        </li> 
                        </React.Fragment>
                    )}

                    {props.user && props.user.isAdmin && (
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/admin">Admin Panel</Link>
                    </li>
                    )}
                    {!props.user && (
                        <React.Fragment>

                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/sign-in">Sign in</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                        </React.Fragment>
                        )}
                    
                </ul>

                </div>
            </div>
</nav>
     );
}

const mapStateToProps = state=>({
    user:state.users.user,
    cart:state.orders.cart
})
export default connect(mapStateToProps,{getUserData,getCart})(Navbar);