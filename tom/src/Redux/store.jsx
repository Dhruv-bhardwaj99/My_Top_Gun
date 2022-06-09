import { dataReducer } from "./reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

const root = combineReducers({
  finalData: dataReducer,
});

export const store = createStore(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("inital state", store.getState());
