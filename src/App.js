import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col} from 'reactstrap';

import Chart3 from './components/Chart3';
import CompareLine from './components/CompareLine';
import Graph from './components/Graph';
import GraphPie from './components/GraphPie';
import Gallery from './components/Gallery2';
import BarChart2 from './components/BarChart';
import RadarPie2 from './components/RadarPie';

import Form from './components/form/Form';
import PieChartNouv from './components/PieChartNouv';


import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function Formulaire() {
  return <Form/>;
}

function Dashboard() {
  return (
    <Container className="Font">
    
      <h1 className="App">Dashboard de la Zicmu</h1> 
      <br/>
      
  <Row>
     
        <Col>
          <Gallery/>
        </Col>

  </Row>
  <br/><br/><br/><br/><br/>
  <Row>
     
        <Col sm="6" md="6">
        <h2><center>Nos 5 sons référencés les plus écoutés du moment</center></h2>
          <PieChartNouv/>
        </Col>

        <Col sm="6" md ="6">
        <h2><center>Ventes des albums de style Pop au fils des années</center></h2>
          <CompareLine/>
        </Col>
    </Row>
    <Row>
        <Col sm="6" md ="6">
        <h3><center>Nombre de followers Insta par artiste</center></h3>
          <BarChart2/>
        </Col>
        
        <Col sm="6" md ="6">
        <h3><center>Nombre de likes 5 plus gros succés</center></h3>
        <RadarPie2/>
        </Col>
    </Row>
 
 
    
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
