import React, { Component } from 'react';

export class TestComponent extends Component {
    displayName = TestComponent.name

    render() {
        return (
            <div>
              <p>This is test to display</p>
            </div>
          );
    }
}

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

let userOne = new User('test@gmail.com', 'Testowy name');
let userTwo = new User('testowy_dwa@gamil.com', 'Testowy dwa');

console.log(userOne);
console.log(userTwo);