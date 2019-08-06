import { 
    DEPARTMENTS_SUCCESS, 
    DEPARTMENTS_LOADING, 
    DEPARTMENTS_FETCH_ERROR 
} from "../types/departments";

const initialState={
    departments:[],
    isLoading:false,
    error:''
}

const departmentsReducer=(state=initialState,action)=>{
    switch(action.type){
        case DEPARTMENTS_SUCCESS:
            return {
                ...state,
                departments: action.payload
            };
        case DEPARTMENTS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case DEPARTMENTS_FETCH_ERROR:
            return {
                ...state,
            error: action.payload
            };
        default:
            return state;
                                
    }
}

export default departmentsReducer;