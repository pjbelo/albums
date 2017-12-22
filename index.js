
//import a library to help create component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';

//Create a component

const App = () => (
    <Header headerText={'Albums'} />
);

// Render it to the device

AppRegistry.registerComponent('albums', () => App);
