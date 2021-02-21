export const initialState = {
    basket: [],
    user: null

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
        
        case "REMOVE_FROM_BASKET":
            // finds first instance of value
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            // if the index is greater than 0 then that mean it has found an item
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket`
                );
            }

            return {
                ...state,
                basket: newBasket
            }
          case "SET_USER":
              return {
                  ...state,
                  user: action.user
              }

        default: 
            return state;
    }
};

export default reducer;