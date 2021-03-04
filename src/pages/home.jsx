import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getUserData} from '../redux/actions/usersActions';
import '../styles/pages.css';

const Home = (props) => {

    useEffect(()=>{
        props.getUserData();
    },[])

    return ( 
        <div className="home-container">
            <div className="header">
                <img src="./images/homebanner.jpg" alt="restaurant"/>
            </div>
            <div className="home-content">
                <h1 style={{fontFamily:'Dancing Script, cursive'}}>Welcome</h1>
                <p style={{fontFamily:'Dancing Script, cursive',fontSize:"1.2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam repellendus possimus, laudantium aut magni? Laborum ratione atque cumque consequuntur.</p>
            </div>
            <div className="home-gallery">
                <img src="./images/jason-leung-poI7DelFiVA-unsplash.jpg" alt=""/>
                <img src="./images/louis-hansel-shotsoflouis-wVoP_Q2Bg_A-unsplash.jpg" alt=""/>
                <img src="./images/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt=""/>
            </div>

            <div className="home-action">
                
            </div>
        </div>
     );
}
 
const mapStateToProps = state => ({
    user:state.users.user
})
export default connect(mapStateToProps,{getUserData})(Home) ;