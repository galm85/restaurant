import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getUserData} from '../redux/actions/usersActions';
import '../styles/pages.css';
import { Link } from 'react-router-dom';

const Home = (props) => {

    useEffect(()=>{
        props.getUserData();
    },[])

    return ( 
        <div className="home-container">
            <div className="hero">
                <div className="hero-overlay"/>
                <img src="./images/homebanner.jpg" alt="restaurant"/>
                <div className="hero-title">
                    <h2>

                Savory Grove Bistro
                    </h2>
                <h5>
                "Indulge in an exquisite culinary journey where every bite tells a story – welcome to Savory Grove Bistro, where flavors dance and memories are made."

                </h5>
                </div>
            </div>
            <div className="menu-section home-section">
                <Link to='/menu'>Our Menu</Link>
            </div>
            <div className="home-content home-section" >
                <p>
                In the vibrant tapestry of restaurant culture, each establishment weaves a unique narrative that extends beyond mere sustenance. It is a collective experience that transcends the clinking of cutlery and the sizzle of pans; it is a celebration of culinary artistry, community, and the joy of shared moments. Restaurants serve as the canvas for chefs to express their creativity and passion, transforming raw ingredients into masterpieces that delight the senses. The ambiance, carefully curated by restaurateurs, becomes a stage where conversations bloom, friendships deepen, and celebrations find a home. Whether it's the hustle and bustle of a busy urban bistro or the cozy intimacy of a family-owned diner, restaurant culture encapsulates the essence of human connection through the universal language of food.
                </p>
                <p>
                At the heart of restaurant culture is a commitment to hospitality that goes beyond mere service – it's an invitation to be part of a gastronomic journey. The rituals of dining out, from perusing a thoughtfully crafted menu to savoring the last bite of a delectable dessert, are an integral part of the shared human experience. In these spaces, strangers become friends over a common appreciation for flavors, and chefs become storytellers, narrating tales through their culinary creations. Whether one seeks comfort in familiar dishes or craves the excitement of culinary experimentation, restaurants stand as cultural hubs, reflecting the diversity and richness of the communities they serve. In the tapestry of our lives, restaurants are the threads that bind us together, creating lasting memories one meal at a time.
                </p>
            </div>
            <div className="home-gallery home-section">

                <div className="gallery-card">
                    <img src="./images/jason-leung-poI7DelFiVA-unsplash.jpg" alt=""/>
                    <p>Stepping into Savory Grove Bistro is like entering a realm where ambiance is an art form. The warm, dimmed lighting casts a cozy glow, creating an intimate and inviting space. The soft murmur of laughter and clinking glasses blends seamlessly with a carefully curated soundtrack, setting the stage for a memorable dining experience. Each table is adorned with attention to detail, and the subtle aroma of culinary delights fills the air, creating an atmosphere that is both sophisticated and relaxed. Here, the ambiance is not just a backdrop; it's an essential ingredient that enhances every moment, making each visit a sensory journey to be savored.
                    </p>
                </div>

                 <div className="gallery-card">
                    <p>
                    Established in 1965, Savory Grove Bistro has a rich history rooted in a passion for culinary excellence. It all began when Don Peppino, driven by a love for gastronomy, decided to transform a vision into reality. From its humble beginnings as a small eatery with a handful of signature dishes, the restaurant has evolved into a beloved culinary destination, celebrated for its innovative menu and warm hospitality. Over the years, Savory Grove Bistro has become woven into the fabric of the community, hosting milestones, celebrations, and creating lasting memories for generations of patrons. Today, it stands as a testament to the enduring spirit of its founders and the dedication to providing a distinctive dining experience.
                    </p>
                 <img src="./images/louis-hansel-shotsoflouis-wVoP_Q2Bg_A-unsplash.jpg" alt=""/>
                </div>

                <div className="gallery-card">
                <img src="./images/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt=""/>
                    <p>
                    At Savory Grove Bistro, the vibes are a harmonious blend of sophistication and warmth. Step into a space where modern elegance meets timeless charm, creating an atmosphere that feels both contemporary and welcoming. The eclectic decor and thoughtful design elements reflect our commitment to providing not just a meal but an immersive experience. Whether you're seeking a relaxed brunch or a celebratory dinner, our vibes set the stage for a memorable culinary journey.
                    </p>
                </div>
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