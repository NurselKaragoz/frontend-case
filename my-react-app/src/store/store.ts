import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, combineReducers } from "redux";
import charactersReducer from "./reducer/charactersReducer";

const reducer = combineReducers({
  characters: charactersReducer,
});

const store = createStore(reducer);

export default store;
