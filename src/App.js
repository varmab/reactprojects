import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Todos from './Todos'
import Users from './Users'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const HomePage=()=>{
  return <h1>Home Page</h1>
}

const CounterPage=()=>{
  return <Counter/>
}

const TodosPage=()=>{
  return <Todos/>
}

const UsersPage=()=>{
  return <Users/>
}


class App extends Component {
  render() {
    return (
      <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/counter">Counter</a></li>
                    <li><a href="/todos">Todos</a></li>
                    <li><a href="/users">Users</a></li>
                </ul>
            
              <Router>
                  <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route  path="/counter" component={CounterPage}/>
                    <Route  path="/todos" component={TodosPage}/>
                    <Route  path="/users" component={UsersPage}/>
                  </Switch>
              </Router>
      </div>
    );
  }
}

export default App;
