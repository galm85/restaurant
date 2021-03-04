import React,{useState} from 'react';
import {renderInput,renderButton,validateForm} from '../utils/form';
import Joi from 'joi-browser';
import {connect} from 'react-redux';
import {registerNewUser} from '../redux/actions/usersActions';

const Register = (props) => {

    const [user,setUser] = useState({});
    const [error,setError] = useState({});
    const schema = {
        firstName:Joi.string().required().min(2).label('First Name'),
        lastName:Joi.string().required().min(2).label('Last Name'),
        email:Joi.string().required().email().label('Email'),
        password:Joi.string().required().min(6).label('Password'),
        address:Joi.string().required().min(2).label('Address'),
        phone:Joi.string().required().min(9).max(12).label('Phone'),
        image:Joi.string().allow('')
    }
    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleImage = (e)=>{
       let file = e.target.files[0];
       let reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = (e)=>{
           setUser({...user,image:e.target.result});
       }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(validateForm(user,schema));
        if(!error){
            try{
                await props.registerNewUser(user);
                window.location = '/menu';
            }catch(err){
                if(err.response && err.response.data){
                    alert(err.response.data);
                }
            }
            }
        }
        
    

    return ( 
        <React.Fragment>
            <img src="./images/registerBanner.jpg" alt="register banner" className="register-banner"/>
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-12">
                    <h1 className="text-center">Register</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        {renderInput("firstName","First Name",error,"text",handleChange)}
                        {renderInput("lastName","Last Name",error,"text",handleChange)}
                        {renderInput("email","Email",error,"text",handleChange)}
                        {renderInput("password","Password",error,"password",handleChange)}
                        {renderInput("address","Address",error,"text",handleChange)}
                        {renderInput("phone","Phone",error,"text",handleChange)}
                        {renderInput("image","image",error,"file",handleImage)}
                        {renderButton("Register")}
                    </form>
                </div>
            </div>
        </div>
        </React.Fragment>
     );
}
 

export default connect(null,{registerNewUser})(Register);