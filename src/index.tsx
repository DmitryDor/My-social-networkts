import {store} from "./redux/stateRedux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/store";
import {Provider} from "react-redux";


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

