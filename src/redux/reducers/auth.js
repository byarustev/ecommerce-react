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

const initialState={
    user:{},
    isLoading:false,
    error:''
}

export const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
        case LOGIN_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
            error: action.payload
            };
        default:
            return state;                
    }
}


export const signupReducer=(state=initialState,action)=>{
    switch(action.type){
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
            
        case SIGNUP_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case SIGNUP_ERROR:
            return {
                ...state,
            error: action.payload
            };
        default:
            return state;                
    }
}