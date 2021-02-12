import React from "react";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../contextApi/StateProvider";
import { getBasketTotal } from "../contextApi/reducer";

import "../styles/Subtotal.css";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat 
               renderText={(value) => (
                 <>
                     <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                     </p>
                     <small className="subtotal_gift">
                        <input type="checkbox" />
                        This order contains a gift
                     </small>
                 </>  
               )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeparator={true}
               prefix={"£"} 
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
