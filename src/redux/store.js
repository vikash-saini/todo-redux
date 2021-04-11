import { createStore } from "redux";
import rootReducer from "./reducers";
// import listReducer from "./reducers/listReducer";

const configureStore = (initalState) => {
  let store = createStore(rootReducer, initalState);
  return { store };
};
export default configureStore;
