import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import rootReducers from './store/reducers';
import thunk from 'redux-thunk';

import './App.css';

import { PersonList } from './components/containers';
import { AppTitle, Loader, Button } from './components/presentations';
import { setPersonList, toggleLoader } from './store/actions/action-creators';

const store = createStore(rootReducers, applyMiddleware(thunk));

const getData = dispatch => {
    console.log('method getData start');
    dispatch(toggleLoader(true));
    dispatch(setPersonList());
};

function App() {
    return (
        <Provider store={ store }>
            <div className="App">
                <AppTitle />
                <Loader />
                <Button click={ getData.bind(null, store.dispatch) } label='получить данные' />
                <PersonList />
                {/*{*/}
                {/*    store.getState().personList.list.map(item => <p>!</p>)*/}
                {/*}*/}
            </div>
        </Provider>
    );
}

export default App;
