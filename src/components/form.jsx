import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component {
   
    renderInput(name,label,errors,type="text",...rest){
        return(
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input {...rest} type={type} name={name} id={name} className="form-control" onChange={this.handleChange}  value={this.state.data[name]} />
                {errors && <p className="text-danger">{errors[name]}</p>}
            </div>
        )
    }


    renderButton = (label)=>(
        <div className="text-center mt-4">
            <button className="btn btn-primary">{label}</button>
        </div>
    )

    handleChange = (e)=>{
        const data = {...this.state.data};
        data[e.target.name] = e.target.value;
        this.setState({data});
    };
    
    validateForm = ()=>{
        const {error} = Joi.validate(this.state.data,this.schema,{abortEarly:false});
        if(!error) return null;

        const errors = {};
        for (let item of error.details){
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const errors = this.validateForm();
        this.setState({errors:errors || {} });
        if (errors) return;

        this.doSubmit();
    }
}
 
export default Form;