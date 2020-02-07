import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './login';
import Next from './next'
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="header-app">
        <p className="header-button"><Link to={'/'} className="nav-link"> Home </Link></p>
          <p className="header-button"><Link to={'/next'} className="nav-link"> Next </Link></p>
        </header>
        <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/next' component={Next} />
              <Route  render={() => <div>Not Found</div>} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
