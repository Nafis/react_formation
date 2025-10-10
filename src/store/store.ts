import { combineReducers,configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";
import ressourcesReducer from "./ressources";

const store=configureStore({
    reducer: combineReducers( {reducer: currentReducer, resources:ressourcesReducer }),
});

export default store;

console.log(store.getState())