import { combineReducers } from "redux";
import listReducer from "./listReducer";
import listReducer2 from "./listReducer2";

const rootReducer = combineReducers({
  newList: listReducer2,
  listReducer,
  
});

export default rootReducer;
