import {CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS,CREATE_ORDER_FAIL, ORDER_LIST_MY_FAILS, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_DETAILS_FAILS, ORDER_DETAILS_REQUEST, ORDER_DETAILS_RESET, ORDER_DETAILS_SUCCESS, CLEAR_ERRORS} from "../constants/orderConstants"

export const newOrderReducer=(state={},action)=>{
    switch(action.type){

        case CREATE_ORDER_REQUEST:
            return{
                ...state,
                loading:true,
        };
        case CREATE_ORDER_SUCCESS:
            return{
                loading:false,
                order:action.payload,
            };

        case CREATE_ORDER_FAIL:
            return{
                loading:true,
                error:action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null,
            };

        default:
            return state;
    }
}

export const orderListReducer = (state = {},action)=>{
    switch(action.type){
        case ORDER_LIST_MY_REQUEST:
            return {loading : true}
        case ORDER_LIST_MY_SUCCESS:
            return {loading: false,orders:action.payload}
        case ORDER_LIST_MY_FAILS:
            return {loading: false, error: action.payload }
        default:
            return state;
    }
};

export const orderDetailsReducer = ( state = {orderItems:[], loading:true, shippingAddress:{}}, action) => {
    switch(action.type){
        case ORDER_DETAILS_REQUEST:
            return {...state,loading:true};
        case ORDER_DETAILS_SUCCESS:
            return {loading:false, order:action.payload};
        case ORDER_DETAILS_FAILS:
            return {loading:false, error:action.payload};
        case ORDER_DETAILS_RESET:
            return {
                orderItems:[], loading:true, shippingAddress:{}
                  
            }
        default:
            return state;
    }
}