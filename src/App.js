import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
//import { Switch, Router, Route } from 'react-router-dom';
import Kostky from './Components/Kostky/Kostky';
import configureStore from './store/configureStore';
 
const initialState = {};
 
const store = configureStore(initialState);
 
class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Kostky />
    </Provider>
    );
  }
}
 
export default App;
