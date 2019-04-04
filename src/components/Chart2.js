import React, {Component} from 'react';
import _ from 'lodash';

//ici c le graph qu'on va utiliser
import {Doughnut} from 'react-chartjs-2';

import './Chart.css';
import Axios from 'axios';

class Chart2 extends Component {

  /*  constructor(props){
        super(props);
        this.state = { 
            
        }
    }
*/

    state={
        trackTable: [],
        chartData:{
            labels:['60s','70s', '80s', '90s'],
            datasets:[
            {
                label:'Decades',
                data:[
                    301,
                    601,
                    250,
                    580
                ],
                backgroundColor:[
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                'green',
      
                ]
            }]
        }    }

    componentDidMount(){
        Axios.get('http://localhost:3000/tracks/listenings')
        .then(res => {
            const trackTable = res.data;
            this.setState({trackTable});
        
        })
        const labelTitle= _.pick(this.state.trackTable, ['title']);
        const datasetsListenings= _.pick(this.state.trackTable, ['listenings']);

        let chartData = Object.assign({}, this.state.chartData);    //creating copy of object
        chartData.labels = labelTitle;
        chartData.datasets.data=datasetsListenings;   
        console.log("chartData", chartData);                     //updating value
        this.setState({chartData});
    }
    render (){
        return (

            <div>

                <h3 className="Titre">Evolution des couleurs de cover</h3>

    <Doughnut data={this.state.chartData}/>
    <br/> <br/> </div> 
        );
    }
}

export default Chart2;