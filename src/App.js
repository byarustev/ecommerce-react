import React from 'react';
import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';
import LangingPage from './containers/LangingPage';
import {Container, Row} from 'react-bootstrap';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.css';

toast.configure();

function App() {
  return (
    <Router>
      <TopMenu />
      <Container fluid className="main">
      <Row>
        <SideMenu/>
        <Switch>
          <Route path="/" component={LangingPage} />
        </Switch>
      </Row>
      </Container>
    </Router>
  );
}

export default App;
