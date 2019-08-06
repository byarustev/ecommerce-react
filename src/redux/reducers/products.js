import types from '../types/types';
const { products } = types;
const {
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_SUCCESS,
    PRODUCTS_LOADING
} = products;

const initialState={
    products:[],
    isLoading:false,
    error:''
}

const productsReducer=(state=initialState,action)=>{
    switch(action.type){
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            };
        case PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case PRODUCTS_FETCH_ERROR:
            return {
                ...state,
            error: action.payload
            };
        default:
            return state;
                                
    }
}

export default productsReducer;