import action from './action';
import axiosInstance from '../axiosSetup';
import types from '../types/types';
import {toast}  from 'react-toastify';

const { signup, login } = types;
const {
    SIGNUP_ERROR,
    SIGNUP_SUCCESS, 
    SIGNUP_LOADING
} = signup;

const {
    LOGIN_ERROR,
    LOGIN_SUCCESS, 
    LOGIN_LOADING
} = login;

export const signupAction=(data)=>dispatch=>{
    dispatch(action(SIGNUP_LOADING,true));
    axiosInstance.post(`customers`,data).then((response)=>{
        dispatch(action(SIGNUP_LOADING,false));
        dispatch(action(SIGNUP_SUCCESS,response.data));
        const {customer, accessToken} = response.data;
        localStorage.setItem('customer',JSON.stringify(customer));
        localStorage.setItem('accessToken',accessToken);
        toast.success("Welcome to Shopmate enjoy :)", {
            position: toast.POSITION.TOP_CENTER
        });
    }).catch((error)=>{
        dispatch(action(SIGNUP_LOADING,false));
        dispatch(action(SIGNUP_ERROR,error.response));
        toast.error(`${error.response.data.error.message}`, {
            position: toast.POSITION.TOP_CENTER
        });
    })
};

export const loginAction=(data)=>dispatch=>{
    dispatch(action(LOGIN_LOADING,true));
    axiosInstance.post(`customers/login`,data).then((response)=>{
        dispatch(action(LOGIN_LOADING,false));
        dispatch(action(LOGIN_SUCCESS,response.data));
        const {customer, accessToken} = response.data;
        localStorage.setItem('customer',JSON.stringify(customer));
        localStorage.setItem('accessToken',accessToken);
        toast.success("Welcome to Shopmate enjoy :)", {
            position: toast.POSITION.TOP_CENTER
        });
    }).catch((error)=>{
        dispatch(action(LOGIN_LOADING,false));
        dispatch(action(LOGIN_ERROR,error.response));
        console.log(error.response);
        toast.error(`${error.response.data.error.message}`, {
            position: toast.POSITION.TOP_CENTER
        });
    })
};

