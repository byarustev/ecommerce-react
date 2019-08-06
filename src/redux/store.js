import { createStore, combineReducers, applyMiddleware } from 'redux';
import departmentsReducer from './reducers/departments';
import categoriesReducer from './reducers/categories';
import productsReducer from './reducers/products';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    departments: departmentsReducer,
    categories: categoriesReducer,
    products: productsReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
