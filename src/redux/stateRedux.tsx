import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});
// export type RootState = ReturnType<typeof reducers> ????????????

export let store = createStore(reducers);

// @ts-ignore
window.store = store