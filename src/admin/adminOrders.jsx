import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getAllOrders,removeOrder} from '../redux/actions/ordersActions';
import moment from 'moment';

const AdminOrders = (props) => {


    const [orders,setOrders] = useState([]);

    useEffect(()=>{
         props.getAllOrders();
    },[])
    

    if(props.orders.length === 0){
        return <div>loading</div>
    }

    return ( 
        <div className="container">
            <div class="row mt-5">
                <div className="col-md-12">
                    <h1 className="text-center">
                        Orders ({props.orders.length})
                    </h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-10">
                        {props.orders && props.orders.map(order=>(
                            <div key={order._id} className="border mt-3 p-2">
                                <div>
                                    <p><b>User Id:</b>{order.userId}</p>
                                    <p><b>User Name:</b>{order.name}</p>
                                    <p><b>Email:</b> {order.email}</p>
                                    <p><b>Phone:</b> {order.phone}</p>
                                    <p><b>Address:</b> {order.address}</p>
                                    <p><b>Date:</b> {moment(order.createdAt).fromNow()}</p>
                                </div>
                                <hr/>
                                <div>
                                    <table className="m-2 table"  >
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Sub Total</th>
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.cart.map((product,index)=>(
                                                <tr key={product.itemId}>
                                                    <td>{index+1}</td>
                                                    <td>{product.title}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>${product.price}</td>
                                                    <td>${product.amount * product.price}</td>
                                                    <td>{product.category}</td>        
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-around">
                                    <h5>Total: ${order.total.toFixed(2)}</h5>
                                    <div className="d-flex">
                                    <button className="btn btn-primary mx-5" onClick={()=>props.removeOrder(order._id)}>Done</button>
                                    <button className="btn btn-danger" onClick={()=>props.removeOrder(order._id)}>Cancel</button>

                                    </div>
                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </div>

     );
}
 const stateMap = state=>({
     orders:state.orders.orders
 })
export default connect(stateMap,{getAllOrders,removeOrder})(AdminOrders);
