import { combineReducers } from "redux";
import userReducer from './components/reducer';
import messageReducer from './components/Message/reducer';

const rootReducer = combineReducers({
    users: userReducer,
    messages: messageReducer,
})

export default rootReducer;