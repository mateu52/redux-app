import { combineReducers } from "redux";
import userReducer from './components/reducer';

const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer;