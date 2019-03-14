import React, { Component } from 'react';

import './App.css';
import { Button } from 'reactstrap';
import Graph from './components/Graph';
import TreeMap from './components/TreeMap';
import {Container, Col, Row} from 'reactstrap';
import GraphPie from './components/GraphPie';
import CompareLine from './components/CompareLine';
import Form from './components/Form/Form';

class App extends Component {
  render() {

    return (

      <Container className="Font">

        <Row>
          <Col>
        <Button color="link" href="./Components/Formulaire.js">link</Button>
        </Col>
        </Row>
         
         <Row>
           <Col sm='6'>
           <Graph/>
           </Col>
            <Col sm='6'>
            <GraphPie/>
            </Col>
          </Row>
          <Row>
          <Col sm='6'>
           <Form/>
            </Col>
            <Col sm='6'>
            <CompareLine/>
            </Col>
            </Row>
      </Container>
      
    );
  }
}

export default App;