import React, { Component } from 'react';
import AdminPanel from './components/AdminPanel'
import AdminLogin from './components/AdminLogin'
import NotFound from './components/NotFound'
import authorize from './components/HOC/authorize'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => authorize(AdminPanel)} />
            <Route path="/login" render={(props) => (<AdminLogin />)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
