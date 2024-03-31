import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getUserData} from '../redux/actions/usersActions';
import {addNewOrder,getCart,getOrdersHistory,removeItemFromCart,updateItemAmount} from '../redux/actions/ordersActions';
import moment from 'moment';

const MyOrders = (props) => {
    

    useEffect(()=>{
            props.getUserData();
            props.getCart();
            props.getOrdersHistory();
    },[]);

    const [total,setTotal] = useState(0);
    const [showHistory,setShowHistory] = useState(false);

    const checkout =()=>{
      props.addNewOrder(props.user._id);
    }

    const updateQuantity = (userId,productId,op)=>{
        props.updateItemAmount(userId,productId,op);
    }

    useEffect(()=>{
        if(props.cart){
            let tempTotal = 0;
            props.cart.forEach(item => {
                tempTotal += item.price * item.amount;
            });
            setTotal(tempTotal.toFixed(2))
        }
    },[updateQuantity,removeItemFromCart])


    if(!props.cart){
        return (<div>loading</div>);
    }

    return ( 
       
        <div className=" my-order-container">
            <img className="orders-main-image" src="./images/orderBanner.jpg" alt=""/>
            
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 className="text-center">{props.user.firstName}'s Orders</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>      
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>price</th>
                                    <th>total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.cart && props.cart.map((product,index)=>(
                                    <tr key={index} className="order-list-item">
                                        <td>{index+1}</td>
                                        <td><img width="50px" src={product?.image} alt={product?.title}/></td>
                                        <td>{product?.title}</td>
                                        <td>
                                            <button className="btn btn-success me-3" onClick={()=>updateQuantity(props.user._id,product._id,'increase')}>+</button>
                                            {product.amount}
                                            <button className="btn btn-danger ms-3" onClick={()=>updateQuantity(props.user._id,product._id,'decrease')}>-</button>
                                        </td>
                                        <td>${product.price}</td>
                                        <td>${product.price * product.amount}</td>
                                        <td><button onClick={()=>{props.removeItemFromCart(props.user._id,product._id)}} className="btn btn-danger">Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <hr className="mt-5"/>

                <div className="row mt-1">
                    <div className="col-md-12 d-flex justify-content-between">
                        
                        <h2>Total: ${total}</h2>
                        <button className="btn btn-primary" onClick={()=>checkout(props.user.orders,props.total)}>Checkout</button>
                    </div>
                </div>
            </div>

           

            <hr className="my-5"/>
            <div className="container">
                <div className="ms-auto w-25" style={{textAlign:'end'}}>
                <button className="btn ms-auto" onClick={()=>setShowHistory(!showHistory)}>Show History</button>

                </div>
            </div>
            {props.history && props.history.length && showHistory &&
                <div className="container order-history my-5">
                    <h4 className="display-6 mb-5">Orders History</h4>
                    {props.history.map(order=>(
                        <div key={order._id} className="history-card my-5">
                            <p>Order Number: {order._id}</p>
                            <p>Date: {moment(order.createdAt).format('MMMM DD, YYYY')}</p>
                            <div className="order-details">
                                {order.cart.map(item=>(
                                    <div key={item._id} className="order-history-item">
                                        <img src={item.image} alt={item.title} style={{width:"50px"}}/>
                                        <span> - {item.title}</span>
                                        <span> - ${item.price}</span>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <h4>Total: ${order.total.toFixed(2)}</h4>
                        </div>
                    ))}
                </div>
            }


        </div>
     );
}
 
const ms = state=>({
    user:state.users.user,
    total:state.users.total,
    cart:state.orders.cart,
    history:state.orders.orders
})
export default connect(ms,{
    getUserData,
    addNewOrder,
    getCart,
    getOrdersHistory,
    removeItemFromCart,
    updateItemAmount
})(MyOrders);