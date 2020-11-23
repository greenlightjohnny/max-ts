import { combineReducers } from "redux"
import postReducer from "./post/PostReducer"

const RootReducer = combineReducers({
  mine: postReducer,
})

export default RootReducer
