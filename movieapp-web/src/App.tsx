import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Layout, Main } from './components'
import { Details, Home, MovieReleases, Popular, Search } from './screens';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/releases' component={MovieReleases} />
              <Route path='/popular' component={Popular} />
              <Route path='/search' component={Search} />
              <Route path='/details/:id' component={Details} />
            </Switch>
          </Main>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
