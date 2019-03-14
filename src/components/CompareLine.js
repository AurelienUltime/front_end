import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '1979', Madonna: 0, MJ: 19, amt: 2400,
  },
  {
    name: '1882', Madonna: 0, MJ: 65, amt: 2210,
  },
  {
    name: '1983', Madonna: 10, MJ: 0, amt: 2290,
  },
  {
    name: '1984', Madonna: 21, MJ: 0, amt: 2000,
  },
  {
    name: '1986', Madonna: 25, MJ: 0, amt: 2181,
  },
  {
    name: '1987', Madonna: 25, MJ: 34, amt: 2500,
  },
  {
    name: '1989', Madonna: 15, MJ: 0, amt: 2100,
  },
];

export default class CompareLine extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="MJ" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Madonna" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
