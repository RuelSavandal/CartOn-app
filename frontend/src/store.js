import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import data from './data';

const initialtState = {};
const reducer = (state, action) => {
    return { products: data.products};
};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialtState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;