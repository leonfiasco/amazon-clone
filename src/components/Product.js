import React from 'react'

import "../styles/Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The Mamba Mentality: How I Play</p>
                <p className="product_price">
                    <small>£</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/81qy7sYwR6L._AC_UY218_.jpg" alt="" srcset=""/>
            <button>Add to Basket</button>       
        </div>
    )
}

export default Product
