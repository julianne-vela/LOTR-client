import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import CharacterContainer from '../../containers/CharacterContainer';
import CharacterDetails from '../characters/CharacterDetails';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterContainer} />
        <Route exact path="/characters/:id" component={CharacterDetails} />
      </Switch>
    </Router>
  );
}
