import React, { Component } from 'react';
import './TestComponent.css';

export class TestComponent extends Component {
    displayName = TestComponent.name

    state = {
      name: 'Bartek',
      age: 25
      //handleClick: this.handleClick.bind(this)
    }

    handleClick = () => { //arrow function to make binding to state
      console.log('button clicked!');
      console.log(this.state,'state');
      this.setState({
        age: this.state.age + 1
      });
    }

    handleChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log('form submit!');
    }

    render() {
        return (
            <div>
              <div className="center">
                <p>Dynamic values to display:</p>
                <span className="random">{ this.state.name }, age is: { this.state.age } </span>
              </div>
              <button onClick={this.handleClick}>add age</button>
              <form id="form1" onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange} />
                <button>submit</button>
              </form>
            </div>
          );
    }
}

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  updateScore() {
    this.score++;
    console.log(this.email, 'score is increased', this.score);
    return this;
  }
}

let userOne = new User('test@gmail.com', 'Testowy name');
let userTwo = new User('testowy_dwa@gamil.com', 'Testowy dwa');

console.log(userOne);
console.log(userTwo);

userOne.updateScore();
userOne.updateScore();