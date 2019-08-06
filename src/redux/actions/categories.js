import action from './action';
import axiosInstance from '../axiosSetup';
import {
    CATEGORIES_FETCH_ERROR, 
    CATEGORIES_LOADING, 
    CATEGORIES_SUCCESS
} from '../types/categories';

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