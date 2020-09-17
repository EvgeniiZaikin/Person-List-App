import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducers from './store/reducers';

import './App.css';

import { AppTitle, Loader } from './components/presentations';

const store = createStore(rootReducers);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppTitle />
                <Loader />
            </div>
        </Provider>
    );
}

export default App;
