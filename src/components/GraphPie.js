import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

import './Chart.css';


class GraphPie extends Component{
  

  render() {
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    return (
      <div>
        <h3 className="Titre">Pie Example</h3>
        <Pie data={data} />
      </div>
    );
  }
}export default GraphPie;