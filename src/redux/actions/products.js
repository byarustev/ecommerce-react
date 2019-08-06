import action from './action';
import axiosInstance from '../axiosSetup';
import types from '../types/types';
const { products } = types;
const {
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_SUCCESS,
    PRODUCTS_LOADING
} = products;

const fetchProducts=({ 
     page,
     limit,
     description_length
})=>dispatch=>{
        dispatch(action(PRODUCTS_LOADING,true));
    axiosInstance.get(`products?page=${page}&limit=${limit}&description_length=${description_length}`).then((response)=>{
        dispatch(action(PRODUCTS_LOADING,false));
        dispatch(action(PRODUCTS_SUCCESS,response.data));
    }).catch((error)=>{
        dispatch(action(PRODUCTS_LOADING,false));
        dispatch(action(PRODUCTS_FETCH_ERROR,error.response));
    })
};

export default fetchProducts;