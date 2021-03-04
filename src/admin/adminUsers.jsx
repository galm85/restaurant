import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getAllUsers} from '../redux/actions/usersActions';


const AdminUsers = (props) => {
    

    useEffect(()=>{
        async function getData(){
            await props.getAllUsers();
            
        }
        getData();

    },[]);

    if(props.users.length === 0){
        return <div>loading</div>
    }
    
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center"> Users</h1>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                        <input type="text" placeholder="search" className="form-control" />
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-11">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.users.map((user,index)=>(
                                <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td><img width="50px" src={user.image} alt={user.firstName}/></td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.phone}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}
 

const mapStateToProps = state => ({
    users:state.users.users
})
export default connect(mapStateToProps,{getAllUsers})(AdminUsers);