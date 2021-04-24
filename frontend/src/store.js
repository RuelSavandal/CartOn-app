import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const initialtState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialtState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;