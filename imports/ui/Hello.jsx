import React, { Component } from 'react';
import List from './List.jsx';

export default class Hello extends Component {
  state = {
    counter: 0,
    points: 0,
    test: 0,
    best: false,
    places: [23,4,3,4,3434]
  }

  increment() {
    this.setState({
      counter: this.state.counter + 2
    });
  }

  updatePoint() {
    this.setState({points: this.state.points + 32})
  }

  showMessage() {
    console.log("Show a Message")
    this.setState({test: this.state.test + 90,best: true})
  }

  render() {
    var example = "ex variable"
    let place = null;
    place = (
      <div>
        <p>in loop</p>
        {this.state.places.map(p => {
          
          return <List name={p} />
        })}
      </div>
    );
    
    return (
      <div>
        {place}
        <button onClick={() => this.increment()}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
        <p>Ax{example}</p>
        <button onClick={() => this.showMessage()}> Show Message</button>
        <p>{this.state.test}</p>
        <a onClick={() => this.updatePoint()}>asd</a>
        <p>{this.state.points}</p>
        { this.state.best ? <p>terafa </p> : <p>toast </p>}
      </div>
    );
  }
}