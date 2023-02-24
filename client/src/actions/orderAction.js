import {CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS,CREATE_ORDER_FAIL,  ORDER_LIST_MY_FAILS, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS,ORDER_DETAILS_FAILS, ORDER_DETAILS_REQUEST, ORDER_DETAILS_RESET, ORDER_DETAILS_SUCCESS, CLEAR_ERRORS} from "../constants/orderConstants"
import axios from "axios"

export const createOrder = (order) => async(dispatch,getState) =>{
    try {
        dispatch({type: CREATE_ORDER_REQUEST});
        const {userLogin:{userInfo}} = getState();
        const config={
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${userInfo.token}`
            },
        };
        const {data} = await axios.post("/api/v1/order/new",order,config);
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatch(
            {
                type:CREATE_ORDER_FAIL,
                payload:error.response.data.message,
            }
        );
    }
}

export const listOrder = (email) => async(dispatch,getState) =>{
    try {
        dispatch({
            type:ORDER_LIST_MY_REQUEST
        });
        const {userLogin:{userInfo}} = getState()
        const config = {headers: { 
            "Content-type":"application/json",
            Authorization:`Bearer ${userInfo.token}`
        }};
        const {data} = await axios.post(`/api/v1/order/list`,email,config)
        dispatch({type:ORDER_LIST_MY_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: ORDER_LIST_MY_FAILS,
            payload : error.response && error.response.data.message ? error.response.data.message: error.message
        })
    }
}

export const getOrderDetails = (id) => async(dispatch,getState) => {
    try {
        dispatch({
            type:ORDER_DETAILS_REQUEST
        })
        const {userLogin:{userInfo}} = getState()
        const config = {headers: { Authorization:`Bearer ${userInfo.token}`}};
        const {data} = await axios.get(`/api/v1/order/${id}`,config)
        dispatch({type:ORDER_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAILS,
            payload : error.response && error.response.data.message ? error.response.data.message: error.message
        })
    }
}

export const clearErrors =()=>async (dispatch)=> {
    dispatch({type:CLEAR_ERRORS})
}