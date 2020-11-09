import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducer} from  './store/reducers/reducer'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById("root")
    );
