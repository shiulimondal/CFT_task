/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import Store from './Src/Redux/store';
import App from './App';

const Main = () => {
    return (
        <Provider store={Store} >
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
