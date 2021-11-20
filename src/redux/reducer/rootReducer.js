import { combineReducers } from "redux";
import counterReducer from './counterReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    student: studentReducer,
})

export default rootReducer;
