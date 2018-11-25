import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Result from './Result'

const  houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];

const reducer = (state, action) => {    
  switch(action.type) {
    case "CHOIXPEAU" :
      return  {selectedHouses : houses[Math.floor(Math.random()  *  4)], houses}
    default :
      return state
  }
}
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>Choixpeau !</h1>
        <Result />
      </div>
      </Provider>
    );
  }
}
export default App;
