import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getAllOrders,removeOrder} from '../redux/actions/ordersActions';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import moment from 'moment';

const AdminOrders = (props) => {


    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        //  props.getAllOrders();
        async function getData(){
            let orders = await axios.get('http://localhost:4000/orders');
            orders=orders.data;
            setOrders(orders);
            console.dir(orders);
        }
        getData();
    },[])

    const removeOrder = (remove_order)=>{
        let newOrders = orders.filter(order=>order._id !== remove_order._id);
        setOrders(newOrders);
        props.removeOrder(remove_order);
    }

    

    if(orders.length === 0){
        return <div>loading</div>
    }

    return ( 
        <div className="container">
            <div class="row mt-5">
                <div className="col-md-12">
                    <h1 className="text-center">
                        Orders ({orders.length})
                    </h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-10">
                        {orders.map(order=>(
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
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.orders.map((product,index)=>(
                                                <tr key={product.itemId}>
                                                    <td>{index+1}</td>
                                                    <td>{product.title}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.category}</td>        
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-around">
                                    <h5>Total: ${order.total}</h5>
                                    <div className="d-flex">
                                    <button className="btn btn-primary mx-5" onClick={()=>removeOrder(order)}>Done</button>
                                    <button className="btn btn-danger" onClick={()=>removeOrder(order)}>Cancel</button>

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
