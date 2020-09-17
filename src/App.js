import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import rootReducers from './store/reducers';
import thunk from 'redux-thunk';

import './App.css';

import { AppTitle, Loader, Button } from './components/presentations';
import { setPersonList } from './store/actions/action-creators';

const store = createStore(rootReducers, applyMiddleware(thunk));

const getData = dispatch => {
    console.log('method getData start');
    dispatch(setPersonList());
};

function App() {
    return (
        <Provider store={ store }>
            <div className="App">
                <AppTitle />
                <Loader />
                <Button click={ getData.bind(null, store.dispatch) } label='получить данные' />
            </div>
        </Provider>
    );
}

export default App;
