
/*import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
*/
import _ from 'lodash';
import Axios from 'axios';


import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';


  

/////////////////////DEUXIEME EXEMPLE UN PEU MIEUX ADAPTE
// ligne qui ne sert a rien apparement
// <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
//
//
/*const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];
*/
export default class PieChartNouv extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  state = {
    tracksListenings: []
}

  componentDidMount() {
    Axios.get('http://localhost:3000/tracks/listenings')
    .then(res => {
        const tracksListenings = res.data;
        this.setState({tracksListenings});
    })
}
  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie dataKey="listenings" nameKey="title" isAnimationActive={false} data={this.state.tracksListenings} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        
        <Tooltip />
      </PieChart>
    );
  }
}
