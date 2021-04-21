import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Layout, Main } from './components'
import { Details, Home, MovieReleases, Popular, Search, Contact } from './screens';
import { LoadingProvider } from '../src/context'
import { SpinnerMovie } from '@components'

const App = () => {
  return (
    <div className="App">
      <LoadingProvider>
        <Router>
          <SpinnerMovie />
          <ToastContainer />
          <Layout>
            <Main>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/releases' component={MovieReleases} />
                <Route path='/popular' component={Popular} />
                <Route path='/search' component={Search} />
                <Route path='/details/:id' component={Details} />
                <Route path='/contact' component={Contact} />
              </Switch>
            </Main>
          </Layout>
        </Router>
      </LoadingProvider>
    </div>
  );
}

export default App;
