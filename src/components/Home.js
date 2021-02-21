import React from 'react';
import Product from "./Product";

import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZmRiOTNjOTMt/ZmRiOTNjOTMt-NDY4MTYwMmUt-w1500._CB411324257_.jpg" alt=""/>

                <div className="home_row">
                    <Product 
                        id="12321341"
                        title="The Mamba Mentality: How I Play" 
                        price={19.99} 
                        image="https://m.media-amazon.com/images/I/81qy7sYwR6L._AC_UY218_.jpg" 
                        rating={5}
                    /> 
                    <Product
                        id="3254354345" 
                        title="All-new Echo Dot (4th generation) | Smart speaker with Alexa | Charcoal" 
                        price={69.99} 
                        image="https://m.media-amazon.com/images/I/71UGFF-EzFL._AC_UY218_.jpg" 
                        rating={4}  
                    /> 
                </div>  
                
                <div className="home_row">
                    <Product
                        id="49538094" 
                        title="Panda Luxury Memory Foam Bamboo Pillow" 
                        price={38.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81MhsQTerAL._AC_SX679_.jpg" 
                        rating={5}    
                    /> 
                    <Product
                        id="4903850" 
                        title="Kindle Paperwhite | Waterproof, High-Resolution Display 8GB—with Ads—Black" 
                        price={99.99} 
                        image="https://m.media-amazon.com/images/I/51DVu7YNt7L._AC_UY218_.jpg" 
                        rating={3}  
                    /> 
                    <Product
                        id="23445930" 
                        title="Red Dead Redemption 2 (PS4)" 
                        price={21.00} 
                        image="https://m.media-amazon.com/images/I/91C8piUiI0L._AC_UY218_.jpg" 
                        rating={4}  
                    /> 
                </div>

                <div className="home_row">
                    <Product
                        id="90829332" 
                        title="Wilson Evolution EMEA Basketball" 
                        price={39.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71t4eIPns4L._AC_SX679_.jpg" 
                        rating={5}  
                    /> 
                </div>
                
            </div>
        </div>
    )
}

export default Home
