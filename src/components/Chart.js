import React, {Component} from 'react';


//graph de type bar
import {Bar} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props){
        super(props);
        this.state = { 
            chartData:{
                labels:['Thriller','Dark Side of the Moon', 'The Bodyguard B.O.', 'Bat Out of Hell'],
                datasets:[
                {
                    label:'nombre de ventes en millions',
                    data:[
                        65,
                        44,
                        45,
                        43,
                        0,
                    ],
                    backgroundColor:[
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'green'
                    ]
                }]
            }
        }
    }

    render (){
        return (
            <div className="Chart">
    <Bar
	    data={this.state.chartData}

	    options={{
		    maintainAspectRatio: false
	            }}
    />
            </div>
        )
    }
}

export default Chart;