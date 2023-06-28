import combReduser from "./reduser/CombineReduser";
import {createStore} from "redux"

const store = createStore(
    combReduser
)

export default store