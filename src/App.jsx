import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Search, Login, UserDetails } from './Pages';
import Provider from './Context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users/:name" component={UserDetails} />
      </Switch>
    </Provider>
  );
}

export default App;
