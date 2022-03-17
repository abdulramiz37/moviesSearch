import {createStore,combineReducers, applyMiddleware} from "redux";
import nameReducer from "./Reducder/NameReducer";
import logger from "redux-logger";

const combineReducers = combineReducers({
    nameReducer:nameReducer,
});

const mystore =createStore(combineReducers,applyMiddleware());

export default mystore;