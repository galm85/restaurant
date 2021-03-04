import React,{useState} from 'react';
import {renderButton,renderInput} from '../utils/form';
import axios from 'axios';
import {url} from '../config.json';

const Jobs = () => {

    const [user,setUser] = useState({});

    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await axios.post(`${url}/jobs`,user);
        alert(res.data);
        window.location='/';
        }
    


    return ( 
        <React.Fragment>
            <img className="hire-banner" src="./images/hireBanner.jpg" alt="hire banner"/>

        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h1 className="text-center">
                        Come Work With Us 
                    </h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        {renderInput('name','Full Name',null,'text',handleChange)}
                        {renderInput('email','Email',null,'text',handleChange)}
                        {renderInput('address','Address',null,'text',handleChange)}
                        {renderInput('phone','Phone',null,'text',handleChange)}
                        <select name="title" id="title" className="form-control mt-5" onChange={handleChange}>
                            <option value="">Select a Job Title</option>
                            <option value="waiter">Waiter</option>
                            <option value="host">Host</option>
                            <option value="delivery person">Delivery person</option>
                        </select>

                        {renderButton('Send')}
                    </form>
                </div>
            </div>
        </div>

        
        </React.Fragment>
     );
}
 
export default Jobs;