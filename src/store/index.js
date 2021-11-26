import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import productReducer from "./reducers/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    product: productReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))