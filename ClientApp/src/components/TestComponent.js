import React, { Component } from 'react';
import './TestComponent.css';


//kolejnoœæ definicji klas jest wa¿na
//export dynamiczny przy ka¿dej klasie osobno
export class User extends Component {
    constructor(email, name) {
        super(email, name);
               //super zawsze po constructorze, tak juz jest 
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is increased', this.score);
        return this;
    }
    render() {
        return (
            <div>
            </div>);//render ktory nic nie robi w kazdej klasie
    }
}

export class TestComponent extends Component {
    displayName = TestComponent.name
    renderUser(i, j) {
        return <User email={i} name={j} />;
    }//definicja metody, tworz¹cej obiekt zewnêtrznej klasy
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
        let renderUserOne = new User("aaa", "bbb");//utworzenei obiektu bezposrednio z klasy
        let UserTwo = this.renderUser("blabla", "bbbblabla");//utworzenie obiektu z metody renderUser, dostêp przez props
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
                <div>
                    {console.log(UserTwo.props.name)}
                    {console.log(renderUserOne.email)}
                </div>
            </div>
          );//wyœwietlenie danych z propsa
    }
}
