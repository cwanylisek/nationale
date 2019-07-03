import React, { Component } from 'react';
import { AddUser } from './AddUser';
import './TestComponent.css';


//kolejno�� definicji klas jest wa�na
//export dynamiczny przy ka�dej klasie osobno
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
    }//definicja metody, tworz�cej obiekt zewn�trznej klasy
    state = {
      users: [
        { name: 'Bartek', age: 25, email:"test@gmail.com" },
        { name: 'Krzyś', age: 30, email:"krzyszK@gmail.com"}
      ]
      
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
      let fruitArray = ['apple', 'banana', 'strawberry'];
      let vegetablesArray = ['carrot', 'tomato', 'pickle'];
      let spreadOperatorExample = [vegetablesArray, ...fruitArray]; //spread operator '...' (kopiuje i rozdziela elementy z tablicy)
      console.log(spreadOperatorExample);
    }

    componentDidMount() {
      console.log('didMount')
    }

    componentDidUpdate() {
      console.log('didUpdate');
    }

    render() {
        let renderUserOne = new User("aaa", "bbb");//utworzenei obiektu bezposrednio z klasy
        let UserTwo = this.renderUser("blabla", "bbbblabla");//utworzenie obiektu z metody renderUser, dost�p przez props
        return (
            <div>
              <div className="center">
                <p>Dynamic values to display:</p>
                <div className="center">
                  <span className="random">{ this.state.users.name }, age is: { this.state.users.age } </span>
                </div>
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
              <AddUser />
              <p style={{marginTop:100+'px'}}>{this.props.testProp}</p> {/* React inline styling */}
            </div>
          );//wy�wietlenie danych z propsa
    }
}
