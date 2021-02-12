export const initialState = {
    basket: [],

};

// Selector 
export const getBasketTotal = (basket) => {
   return basket?.reduce((amount, item) => item.price + amount, 0)
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                //[...state.bakset] returns whatever was in basket previously
                // action.item returns the action performed 
                //on the basket such as adding or removing item
                basket: [...state.basket, action.item],
            };

        default: 
            return state;
    }
};

export default reducer;