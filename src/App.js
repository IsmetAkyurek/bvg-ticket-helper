import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import routes from 'plugins/routes';
import { Background } from 'components';

const App = () => (
  <div className="App">
    <Router>
      <Background />
      <div className="container">
        <Switch>
          {routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              exact
            >
              <route.component />
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;