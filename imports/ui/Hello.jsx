import React, { Component } from 'react';

export default class Hello extends Component {
  state = {
    counter: 0,
    points: 0
  }

  increment() {
    this.setState({
      counter: this.state.counter + 2
    });
  }

  updatePoint() {
    this.setState({points: points + 32})
  }

  render() {
    var example = "ex variable"
    var sum = 2+ 3
    return (
      <div>
        <button onClick={() => this.increment()}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
        <p>Ax{example}</p>
        <p>{sum}</p>

      </div>
    );
  }
}
