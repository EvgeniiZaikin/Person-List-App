import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from '@reducers';
import thunk from 'redux-thunk';

import './App.css';

import Containers from '@containers';
import Presentations from '@presentations';
const { GetDataButton, PersonList, Loader, PersonInfo } = Containers;
const { AppTitle, CountPeopleInput } = Presentations;

const store = createStore(rootReducers, applyMiddleware(thunk));

function App() {
    const [count, setPeopleCount] = useState(5);

    return (
        <Provider store={ store }>
            <div className='App'>
                <PersonInfo />
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
