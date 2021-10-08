import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { fetchSmurfs } from './actions';

class App extends Component {
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        fetchSmurfs();
        console.log('component mounted', res)
      })
      .catch(err => {
        console.log('axios error', err)
      })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.