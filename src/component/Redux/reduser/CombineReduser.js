import { combineReducers } from "redux";
import MainNumberReduser from "./MainNumberReduser";

const combReduser = combineReducers({
    main:MainNumberReduser
})

export default  combReduser