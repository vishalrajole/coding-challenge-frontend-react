import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from './state/store/configure-store';

import IncidentDetails from './views/routes/incident-details/incidentDetails.index';
import IncidentList from './views/routes/incident-list/incidentList.index';
import Header from './views/components/header/header';
import { Container } from './views/styles/layout';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
        <BrowserRouter>
          <Container>
            <Switch>
              <Route path="/incident/:incidentId" component={IncidentDetails} />
              <Route path="/" component={IncidentList} />
            </Switch>
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
