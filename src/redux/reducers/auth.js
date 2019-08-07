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

const loginInitialState={
    loginSuccess:false,
    loggingIn:false,
    loginError:''
}

const signupInitialState={
    signupSucess:false,
    signingUp:false,
    signupError:''
}

export const loginReducer=(state=loginInitialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: true
            };
        case LOGIN_LOADING:
            return {
                ...state,
                loggingIn: action.payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload
            };
        default:
            return state;                
    }
}


export const signupReducer=(state=signupInitialState,action)=>{
    switch(action.type){
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupSucess: true
            };
            
        case SIGNUP_LOADING:
            return {
                ...state,
                signingUp: action.payload
            };

        case SIGNUP_ERROR:
            return {
                ...state,
                signupError: action.payload
            };
        default:
            return state;                
    }
}