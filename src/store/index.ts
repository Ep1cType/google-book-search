import {applyMiddleware, combineReducers, createStore } from "redux";
import {exportedReducers} from "./reducers";
import thunk from "redux-thunk";


const rootReducer = combineReducers(exportedReducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
