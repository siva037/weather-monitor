import React from 'react';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

import './App.css';

import Weather from './components/weather/Weather';
import rootReducer from "./state/rootReducer";
import rootSaga from "./state/rootSaga";

function App() {

    const sagaMiddleware = createSagaMiddleware();

    // Apply reducer and saga to store
    const store = createStore(
        rootReducer,
        applyMiddleware(
          sagaMiddleware
        )
    );

    // Initate the root saga
    sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store}>
            <Weather/>
        </Provider>
    );
}

export default App;
