import React,{useState} from 'react';
import {renderInput,renderButton,validateForm} from '../utils/form';
import Joi from 'joi-browser';
import {connect} from 'react-redux';
import {signInUser} from '../redux/actions/usersActions';

const Signin = (props) => {


    const [user,setUser] = useState({});
    const [error,setError] = useState({});
    
    const schema = {
        email:Joi.string().required().email().label('Email'),
        password:Joi.string().required().min(6).label('Password')
    }

    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError(validateForm(user,schema));
        if(!error){
            try{
                await props.signInUser(user)
                alert(`Welcome back`);
                window.location='./menu';
            }catch(err){
                if(err.response && err.response.data){
                    alert(err.response.data);
                }
            }
        }

    }

    return ( 
        <React.Fragment>
        <img className="signin-banner" src="./images/signinBanner.jpg" alt=""/>

       <div className="container">
           <div className="row mt-5">
               <div className="col-md-12">
                   <h1 className="text-center">Sign In</h1>
               </div>
           </div>

           <div className="row justify-content-center">
               <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        {renderInput('email','Email',error,'text',handleChange)}
                        {renderInput('password','Password',error,'password',handleChange)}
                        {renderButton('Sign in')}
                    </form>
               </div>
           </div>
       </div>
        </React.Fragment>
     );
}
 
export default connect(null,{signInUser})(Signin);