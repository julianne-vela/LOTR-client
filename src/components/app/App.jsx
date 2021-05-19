import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterContainer from '../../containers/CharacterContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={(routerProps) => <CharacterContainer {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
