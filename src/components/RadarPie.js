import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import Axios from 'axios';

export default class RadarPie2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  state = {
    likesOfTracks: []
  }

  componentDidMount(){
    Axios.get('http://localhost:3000/tracks/likes')
    .then(res => {
      const likesOfTracks = res.data;
      this.setState({likesOfTracks});
      console.log(likesOfTracks);
      
    })
  }

  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={this.state.likesOfTracks}>
        <PolarGrid />
        <PolarAngleAxis dataKey="title"/>
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="likes" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
