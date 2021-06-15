import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login } from './Pages';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Provider>
  );
}

export default App;
