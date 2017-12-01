import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers';

import NotificationsContainer from './containers/NotificationsContainer';

import logo from '../images/logo.svg';
import '../styles/App.css';

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <header className="header">
                        <img src={logo} className="header-logo" alt="logo" />
                    </header>
                    <NotificationsContainer />
                </div>
            </Provider>
        );
    }
}

export default App;
