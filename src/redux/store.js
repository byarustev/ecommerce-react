import { createStore, combineReducers, applyMiddleware } from 'redux';
import departmentsReducer from './reducers/departments';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    departments: departmentsReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
