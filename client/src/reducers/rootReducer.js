import { combineReducers } from "@reduxjs/toolkit";

import messageReducer from "./messageSlice";
import userReducer from "./userSlice";
import streamReducer from "./streamSlice";
import formReducer from "./formSlice";
const rootReducer = combineReducers({
    message: messageReducer,
    user: userReducer,
    stream: streamReducer,
    form: formReducer,
});

export default rootReducer;
