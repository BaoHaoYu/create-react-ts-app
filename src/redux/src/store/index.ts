import { combineReducers, createStore } from "redux";
import compose from "./compose";

let storeObj = {};

const store = createStore({}, compose);

function addReducers(obj: any) {
  storeObj = { ...storeObj, ...obj };
  store.replaceReducer(combineReducers({ ...storeObj, ...obj }));
}

export { addReducers };

export default store;
