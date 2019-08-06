import { 
    CATEGORIES_LOADING, 
    CATEGORIES_SUCCESS, 
    CATEGORIES_FETCH_ERROR 
} from "../types/categories";

const initialState={
    categories:[],
    isLoading:false,
    error:''
}

const categoriesReducer=(state=initialState,action)=>{
    switch(action.type){
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            };
        case CATEGORIES_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case CATEGORIES_FETCH_ERROR:
            return {
                ...state,
            error: action.payload
            };
        default:
            return state;                
    }
}

export default categoriesReducer;