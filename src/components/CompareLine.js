import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis,Cell, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import _ from 'lodash';
import Axios from 'axios';

export default class CompareLine extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/';

  state ={
    ventesParDates :[]
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/albums/vente')
    .then(res => {
        const ventesParDates = res.data;
        this.setState({ventesParDates});
    })
}

  render() {
    return (
     
      <LineChart width={500} height={300} data={this.state.ventesParDates}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="release" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="vente" stroke="#8884d8" activeDot={{ r: 8}} />
        <Line type="monotone" dataKey="title" stroke="#82ca9d" />
       
      </LineChart>
    );
  }
}