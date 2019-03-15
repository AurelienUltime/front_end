import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Container, Row, Col} from 'reactstrap';

import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';

import CompareLine from './components/CompareLine';
import Graph from './components/Graph';
import GraphPie from './components/GraphPie';

import Form from './components/form/Form';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function Formulaire() {
  return <Form/>;
}

function Dashboard() {
  return (
    <div className="Font">
      <h1 className="App">Dashboard de la Zicmu</h1> <br></br>
  <Row>
  <dl/>
        <br></br>
        <Col xl="6">
          <Chart/>
        </Col>

        <dl/>
        <br></br>

        <Col xl="6">
          <Chart2/>
        </Col>

        <dl/>
        <br></br>

        <Col xl="6">
          <Chart3/>
        </Col>

        <dl/>
        <br></br>

        <Col xl="6">
          <CompareLine/>
        </Col>

        <dl/>
        <br></br>

        <Col xl="6">
          <Graph/>
        </Col>

        <dl/>
        <br></br>

        <Col xl="6">
          <GraphPie/>
        </Col>

        <dl/>
        <br></br>
  </Row>
    </div>
  );
}

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/formulaire",
    component: Formulaire
  },
  {
    path: "/dashboard",
    component: Dashboard,
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


class App extends Component {
  render() {
    return (
      <div>
        <header className="Font">
  <Router>
  <div>
      <ul>
      
      <h4>
        <br/>
            <Link to="/dashboard"> <div className="Select">Dashboard</div></Link>
      </h4>


      <h4>
            <Link to="/formulaire"><div className="Select">Ajout Musical</div></Link>
      </h4>
  
      </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
  </div>
  </Router>
        </header>
      </div>

    );
  }
}

export default App;
