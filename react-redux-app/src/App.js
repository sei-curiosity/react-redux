import React, { Component } from 'react'
import CounterOne from './components/counters/counter-one/CounterOne'
import CounterTwo from "./components/counters/counter-two/CounterTwo"
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterOne />
        <CounterTwo />
      </div>
    )
  }
}

export default App
