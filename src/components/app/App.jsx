import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterContainer from '../../containers/CharacterContainer';
import CharacterDetails from '../characters/CharacterDetails';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          render={(routerProps) => <CharacterContainer {...routerProps} />}
        />
        <Route
          path="/characters/:id"
          render={(routerProps) => <CharacterDetails {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
