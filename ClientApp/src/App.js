import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { TestComponent } from './components/TestComponent';
import { User } from './components/TestComponent';
import { Board } from './components/mineJS';
import { Game } from './components/mineJS';
import { Square } from './components/mineJS';
//importowanie obiekt�w z pliku, po nazwie i adresie, tyle import�w ile komponent�w
export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/testcomponent' render={(props) => <TestComponent {...props} something="yes" />} /> {/* route with props via render function */}
            <Route path='/testcomponent' component={User} />
            <Route path='/mineJS' component={Game} />
            <Route path='/mineJS' component={Board} />
            <Route path='/mineJS' component={Square} />
      </Layout>
    );
  }
}
 //routing component�w z danych �cie�ek plik�w, tyle route ile kompoennt�w