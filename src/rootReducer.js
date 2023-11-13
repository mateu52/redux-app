import { combineReducers } from "redux";
import userReducer from './components/reducer';
import messageReducer from './components/Message/reducer';

const rootReducer = combineReducers({
    users: userReducer,
    message: messageReducer,
})

export default rootReducer;