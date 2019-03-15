import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data01 = [
  { x: 15, y: 40.3}, { x: 40, y: 3.4},
  { x: 20, y:24.8}, { x: 60, y: 0.3},
  { x: 25, y: 4.6}, 
];
const data02 = [
  { x: 15, y: 3.9}, { x: 40, y: 2.6},
  { x: 20, y: 11.6}, { x: 60, y: 0.1},
  { x: 25, y: 9.3},
];

export default class Chart3 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';

  render() {
    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="âge moyen" unit="ans" />
        <YAxis type="number" dataKey="y" name="%" unit="%" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Pop music" data={data01} fill='#FF6384' shape="star" />
        <Scatter name="Jazz" data={data02} fill="#82ca9d" shape="triangle" />
      </ScatterChart>
    );
  }
}
