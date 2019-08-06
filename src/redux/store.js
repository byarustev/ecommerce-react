import { createStore, combineReducers, applyMiddleware } from 'redux';
import departmentsReducer from './reducers/departments';
import categoriesReducer from './reducers/categories';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    departments: departmentsReducer,
    categories: categoriesReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
