import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productDetailsReducer, productListReducer} from "./reducers/productReducer"
import { userDetailsreducer, userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { newOrderReducer, orderDetailsReducer, orderListReducer } from "./reducers/orderReducer";
const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    userLogin : userLoginReducer,
    cart: cartReducer,
    userRegister: userRegisterReducer,
    userDetails : userDetailsreducer,
    createOrder : newOrderReducer,
    orderList : orderListReducer,
    orderDetail : orderDetailsReducer
})
const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const shippingAddressfromLocalStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};

const initialState = {
    cart : {cartItems : cartItemsFromLocalStorage, shippingAddress: shippingAddressfromLocalStorage},
    userLogin : {userInfo: userInfoFromLocalStorage}
};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;