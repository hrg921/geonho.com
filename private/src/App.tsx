import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MoneyFlowRoutes, { basePath as moneyFlowBasePath } from './routes/MoneyFlowRoutes';

const moneyFlowRoute = <Route path={moneyFlowBasePath} exact component={MoneyFlowRoutes} />;

const routes = [
  moneyFlowRoute
]

class App extends React.Component {
  render() {

    return (
      <Router>
        <Switch>
          {routes}
          <Route path='/' component={MoneyFlowRoutes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
