import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeReducerForm from './employeeFormReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm: employeeReducerForm,
    employess: employeeReducer
});
