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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est suscipit, magni vel assumenda quae dolorum quasi obcaecati a. Ex sed, ratione at est, dolor consectetur magnam quod nihil ducimus cumque provident blanditiis incidunt? Similique quaerat facilis incidunt sed expedita recusandae veritatis dolores, quae accusantium doloribus, beatae maiores sint quas tenetur eligendi labore excepturi ipsum, atque consequatur officiis voluptate vitae aperiam nobis? Vero veritatis deserunt veniam consequuntur perspiciatis eveniet repellendus.</p>
                    </div>
                    <img src="./images/bar.jpg" alt="bar"/>      
               </div>

               <div className="event">
               <img src="./images/resu.jpg" alt="bar"/>  
                    <div className="event-info">
                        <h1>Restaurant</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est suscipit, magni vel assumenda quae dolorum quasi obcaecati a. Ex sed, ratione at est, dolor consectetur magnam quod nihil ducimus cumque provident blanditiis incidunt? Similique quaerat facilis incidunt sed expedita recusandae veritatis dolores, quae accusantium doloribus, beatae maiores sint quas tenetur eligendi labore excepturi ipsum, atque consequatur officiis voluptate vitae aperiam nobis? Vero veritatis deserunt veniam consequuntur perspiciatis eveniet repellendus.</p>
                    </div>
                        
               </div>

               
               <div className="event">
                
                    <div className="event-info">
                        <h1>Events</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est suscipit, magni vel assumenda quae dolorum quasi obcaecati a. Ex sed, ratione at est, dolor consectetur magnam quod nihil ducimus cumque provident blanditiis incidunt? Similique quaerat facilis incidunt sed expedita recusandae veritatis dolores, quae accusantium doloribus, beatae maiores sint quas tenetur eligendi labore excepturi ipsum, atque consequatur officiis voluptate vitae aperiam nobis? Vero veritatis deserunt veniam consequuntur perspiciatis eveniet repellendus.</p>
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