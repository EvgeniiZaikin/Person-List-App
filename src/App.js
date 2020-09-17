import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducers from './store/reducers';

import './App.css';

import { AppTitle, Loader, Button } from './components/presentations';

const store = createStore(rootReducers);

const getData = () => {
    alert();
};

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppTitle />
                <Loader />
                <Button click={getData} label='получить данные' />
            </div>
        </Provider>
    );
}

export default App;
