import React from 'react';
import { Layout, Main } from './components'
import { Footer } from './components/Layout/components';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>

    </div>
  );
}

export default App;
