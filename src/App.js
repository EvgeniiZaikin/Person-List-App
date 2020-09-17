import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import rootReducers from './store/reducers';
import thunk from 'redux-thunk';

import './App.css';

import { GetDataButton, PersonList } from './components/containers';
import { AppTitle, Loader, PersonInfoScreen } from './components/presentations';

const store = createStore(rootReducers, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={ store }>
            <div className="App">
                <PersonInfoScreen />
                <AppTitle />
                <Loader />
                <GetDataButton />
                <PersonList />
            </div>
        </Provider>
    );
}

export default App;
