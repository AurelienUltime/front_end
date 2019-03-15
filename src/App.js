import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col} from 'reactstrap';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import CompareLine from './components/CompareLine';
import Graph from './components/Graph';
import GraphPie from './components/GraphPie';
import Gallery from './components/Gallery';

import Form from './components/form/Form';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function Formulaire() {
  return <Form/>;
}

function Dashboard() {
  return (
    <Container>
    <div className="Font">
      <h1 className="App">Dashboard de la Zicmu</h1> 
      <br/>
      
  <Row>
     
        <Col>
          <Gallery/>
        </Col>

        <Col xl="6">
          <Chart2/>
        </Col>
  </Row>
  <Row>
     
        <Col sm="6">
          <Chart3/>
        </Col>

        <Col sm="6">
          <CompareLine/>
        </Col>
</Row>
<Row>
    
        <Col sm="6">
          <Graph/>
        </Col>
        <Col sm="6">
          <GraphPie/>
        </Col>
   
  </Row>
 
    </div>
    </Container>
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
      

    );
  }
}

export default App;
