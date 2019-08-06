import action from './action';
import axiosInstance from '../axiosSetup';
import types from '../types/types';
const { departments } = types;
const {
    DEPARTMENTS_SUCCESS, 
    DEPARTMENTS_LOADING, 
    DEPARTMENTS_FETCH_ERROR 
} = departments;

const fetchDepartments=()=>dispatch=>{
        dispatch(action(DEPARTMENTS_LOADING,true));
    axiosInstance.get('departments').then((response)=>{
        dispatch(action(DEPARTMENTS_LOADING,false));
        dispatch(action(DEPARTMENTS_SUCCESS,response.data));
    }).catch((error)=>{
        dispatch(action(DEPARTMENTS_LOADING,false));
        dispatch(action(DEPARTMENTS_FETCH_ERROR,error.response));
    })
};

export default fetchDepartments;