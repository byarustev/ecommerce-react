import action from './action';
import axiosInstance from '../axiosSetup';
import types from '../types/types';
const { categories } = types;
const {
    CATEGORIES_SUCCESS,
    CATEGORIES_LOADING, 
    CATEGORIES_FETCH_ERROR
} = categories;

const fetchCategories=(dept)=>dispatch=>{
        dispatch(action(CATEGORIES_LOADING,true));
    axiosInstance.get(`categories/inDepartment/${dept}`).then((response)=>{
        dispatch(action(CATEGORIES_LOADING,false));
        console.log(response.data);
        dispatch(action(CATEGORIES_SUCCESS,response.data));
    }).catch((error)=>{
        dispatch(action(CATEGORIES_LOADING,false));
        dispatch(action(CATEGORIES_FETCH_ERROR,error.response));
    })
};

export default fetchCategories;