import React, { Component } from 'react'
import "./CounterOne.css"

class CounterOne extends Component {
  state = {
    counter: 0
  }

  addOne = () => {
      this.setState( ( {...copyState} ) => {
          copyState.counter += 1
          return copyState
      })
  }
  render() {
    return (
      <dic className="CounterOne">
        <h1>{this.state.counter}</h1>
        <button onClick={this.addOne}>Add One</button>
      </dic>
    )
  }
}

export default CounterOne
