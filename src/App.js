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

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function Formulaire() {
  return <h2>Formulaire</h2>;
}

function Dashboard({ routes }) {
  return (
    <div>
      <h2>Dashboard</h2>
    //faut le rendre plus responsive
  <Row className="Font">
        <Col xl="6">
          <Chart/>
        </Col>

        <dl/>

        <Col xl="6">
          <Chart2/>
        </Col>

        <dl/>

        <Col xl="6">
          <Chart3/>
        </Col>

        <dl/>

        <Col xl="6">
          <CompareLine/>
        </Col>

        <dl/>

        <Col xl="6">
          <Graph/>
        </Col>

        <dl/>

        <Col xl="6">
          <GraphPie/>
        </Col>

        <dl/>
  </Row>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
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
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
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
      <div className="App">
        <header className="App-header">
  <Router>
  <div>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/formulaire">Ajout musical</Link>
          </li>
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
