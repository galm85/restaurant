import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUserData} from '../redux/actions/usersActions';
import {renderButton,renderInput,validateForm} from '../utils/form';
import axios from 'axios';
import {url} from '../config.json';
import {Link} from 'react-router-dom';

class EditUser extends Component {
    
    constructor(props){
        super(props);
        props.getUserData()
         
    }

    state = { 
        user:{...this.props.user}
     }

     handleChange = (e)=>{
         let user = {...this.state.user};
         user[e.target.name] = e.target.value;
         this.setState({user:{...user,[e.target.name]:e.target.value}});
     }

    handleImage = (e)=>{
        let user = {...this.state.user};
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e)=>{
            this.setState({user:{...user,image:e.target.result}});
        }
     }

     handleSubmit = async (e)=>{
         e.preventDefault();
         const {user} = this.state;
         const res = await axios.patch(`${url}/users/update-user-data/${user._id}`,user);
         alert(res.data);
         window.location = '/menu';
     }


    render() { 

        return (
            <div className="container">
                
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 className="text-center">Update your account</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">    
                        <form onSubmit={this.handleSubmit}>
                            {renderInput("firstName","First Name",null,"text",this.handleChange,this.state.user.firstName)}
                            {renderInput("lastName","Last Name",null,"text",this.handleChange,this.state.user.lastName)}
                            {renderInput("phone","Phone",null,"text",this.handleChange,this.state.user.phone)}
                            {renderInput("address","Address",null,"text",this.handleChange,this.state.user.address)}
                            {renderInput("image","Image",null,"file",this.handleImage,'')}
                            <img width="50px" height="50px" src={this.state.user.image} alt=""/>
                            {renderButton('Update')}
                        </form>
                        <div className="text-center mt-5">
                            <button className="btn btn-danger" type="button" onClick={this.props.history.goBack}> Back</button>
                        </div>

                    </div>
                </div>
            
            
            </div>
         );
    }
}
 
const mapState = state=>({
    user:state.users.user
})
export default connect(mapState,{getUserData})(EditUser);