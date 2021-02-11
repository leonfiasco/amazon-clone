import React, { createContext, useContext, useReducer } from "react";


// Prepares the dataLayer
export const StateContext = createContext();

// This is wrapping the app and provides the date layer to the components that need it
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


// Pull information from the data layer 
export const useStateValue = () => useContext (StateContext);
