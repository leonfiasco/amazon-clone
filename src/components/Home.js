import React from 'react';

import Product from "./Product";

import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZmRiOTNjOTMt/ZmRiOTNjOTMt-NDY4MTYwMmUt-w1500._CB411324257_.jpg" alt=""/>

                <div className="home_row">
                    <Product /> 
                </div>  
                
                <div className="home_row">

                </div>

                <div className="home_row">

                </div>
                
            </div>
        </div>
    )
}

export default Home
