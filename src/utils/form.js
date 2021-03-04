import React from 'react';
import Joi from 'joi-browser';


/**
 * render a form input
 * @param {string} name the name of the input
 * @param {string} label the label of the input
 * @param {object} error the object of all errors 
 * @param {string} type  type of the input
 * @param {function} fn  onChange function
 * @returns form input field with span for errors 
 */
export const renderInput = (name,label,error,type="text",fn,value=null) =>( 
       <div className="mt-4">
           <label>{label}</label>
           <input name={name} id={name} type={type} className="form-control" onChange={fn} autoComplete="off" value={value}/>
           <span className="text-danger">{error && error[name]}</span>  
       </div>
)



/**
 * 
 * @param {string} label | the value of the button
 */
export const renderButton = (label)=>(
    <div className="text-center mt-4">
        <button className="btn btn-primary">{label}</button>
    </div>
)

/**
 * Validate an object by a schema
 * @param {object} user the data object to validate 
 * @param {object} schema the schema for validate the object
 * @returns an object of all the error
 */
export const validateForm = (user,schema)=>{
    const {error} = Joi.validate(user,schema,{abortEarly:false})
    if(!error){
        return null;
    }
    
    const errors = {};
    for( let item of error.details){
        errors[item.path[0]] = item.message;
    }

    return errors;

}
