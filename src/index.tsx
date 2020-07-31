import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateType} from './redux/state'

 let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)} />,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();



