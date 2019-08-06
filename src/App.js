import React from 'react';
import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';
import LangingPage from './containers/LangingPage';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import './main.css';

function App() {
  return (
    <Router>
      <TopMenu />
      <main className="main">
        <SideMenu/>
        <Switch>
          <Route path="/" component={LangingPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
