import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import rootReducers from './store/reducers';
import thunk from 'redux-thunk';

import './App.css';

import { GetDataButton, PersonList } from './components/containers';
import { AppTitle, CountPeopleInput, Loader, PersonInfoScreen } from './components/presentations';

const store = createStore(rootReducers, applyMiddleware(thunk));

function App() {
    const [count, setPeopleCount] = useState(5);

    return (
        <Provider store={ store }>
            <div className="App">
                <PersonInfoScreen />
                <AppTitle />
                <CountPeopleInput change={ setPeopleCount } defaultValue={ count } />
                <Loader />
                <GetDataButton countPeople={ count } />
                <PersonList />
            </div>
        </Provider>
    );
}

export default App;
