import React, { Component } from "react"
import "./CounterTwo.css"

class CounterTwo extends Component {
  state = {
    counter: 0
  }

  addTwo = () => {
    this.setState(({ ...copyState }) => {
      copyState.counter += 2
      return copyState
    })
  }
  render() {
    return (
        <dic className="CounterTwo">
            <h1>{this.state.counter}</h1>
            <button onClick={this.addTwo}>Add Two</button>
        </dic>
    )
  }
}

export default CounterTwo
