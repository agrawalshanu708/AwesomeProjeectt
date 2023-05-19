import { combineReducers } from "redux";
import list from "./list";

export default combineReducers({
    list,
    //ex: signin
    //login
    //etc...
})

//it combine all the reducers files and can pass to store