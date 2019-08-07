import { createStore, combineReducers, applyMiddleware } from 'redux';
import departmentsReducer from './reducers/departments';
import categoriesReducer from './reducers/categories';
import productsReducer from './reducers/products';
import {loginReducer, signupReducer} from './reducers/auth';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    departments: departmentsReducer,
    categories: categoriesReducer,
    products: productsReducer,
    login: loginReducer,
    signup: signupReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
