import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/usersActions';

const Logout = (props) => {
    
    props.logoutUser();
    return window.location ='/';
}
 

export default connect(null,{logoutUser})(Logout);
