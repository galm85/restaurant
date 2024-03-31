import React from 'react';

const About = () => {
    return ( 
       <div className="about-container">
           
           <div className="image">
                <img src="./images/aboutBanner.jpg" alt="about banner"/>
                <h1 style={{fontFamily:'Dancing Script, cursive',fontSize:"5rem"}}>Who are we</h1>
           </div>
           
           <div className="about-info">
               
               <div className="event">
                    <div className="event-info">
                        <h1>Bar</h1>
                        <p>
                        At Savory Grove Bistro, we redefine the art of socializing. Our bar is not just a place to enjoy crafted cocktails and exquisite brews; it's a vibrant hub where stories unfold, laughter echoes, and friendships are forged. Experience an inviting ambiance, innovative drinks, and exceptional service – making every visit to Savory Grove Bistro an unforgettable journey into the heart of conviviality
                        </p>
                    </div>
                    <img src="./images/bar.jpg" alt="bar"/>      
               </div>

               <div className="event">
               <img src="./images/resu.jpg" alt="bar"/>  
                    <div className="event-info">
                        <h1>Restaurant</h1>
                        <p>
                        At Savory Grove Bistro, culinary artistry meets warm hospitality. Nestled in the heart of Tel Aviv, our bistro is a haven for gastronomes seeking a symphony of flavors. Immerse yourself in an enchanting ambiance as our chefs curate a menu that marries innovation with timeless classics. At Savory Grove Bistro, every dish is a celebration of fresh, locally-sourced ingredients and a testament to our commitment to delivering a remarkable dining experience
                        </p>
                    </div>
                        
               </div>

               
               <div className="event">
                
                    <div className="event-info">
                        <h1>Events</h1>
                        <p>
                        Join us at Savory Grove Bistro for a calendar filled with lively events that elevate your dining experience. From live music nights and themed culinary celebrations to exclusive tasting events, our restaurant is more than a dining destination; it's a vibrant hub of entertainment and community. Explore the synergy of delectable cuisine and captivating events, making each visit to Savory Grove Bistro a delightful journey of flavors and festivities.
                        </p>
                    </div>
                    <img src="./images/events.jpg" alt="bar"/>      
               </div>


           </div>
           <div className="contact-info">

                <h5>34 Pirews St. Tel-aviv</h5>
                <h5>Tel: 03-9858748</h5>
           </div>
       </div>
     );
}
 
export default About;