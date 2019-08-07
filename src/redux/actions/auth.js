import action from './action';
import axiosInstance from '../axiosSetup';
import types from '../types/types';
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
    axiosInstance.get(``).then((response)=>{
        dispatch(action(SIGNUP_LOADING,false));
        console.log(response.data);
        dispatch(action(SIGNUP_SUCCESS,response.data));
    }).catch((error)=>{
        dispatch(action(SIGNUP_LOADING,false));
        dispatch(action(SIGNUP_ERROR,error.response));
    })
};

export const loginAction=(data)=>dispatch=>{
    dispatch(action(LOGIN_LOADING,true));
    axiosInstance.get(``).then((response)=>{
        dispatch(action(LOGIN_LOADING,false));
        console.log(response.data);
        dispatch(action(LOGIN_SUCCESS,response.data));
    }).catch((error)=>{
        dispatch(action(LOGIN_LOADING,false));
        dispatch(action(LOGIN_ERROR,error.response));
    })
};

