import React, {Component} from 'react';

//ici c le graph qu'on va utiliser
import {Doughnut} from 'react-chartjs-2';

class Chart2 extends Component {

    constructor(props){
        super(props);
        this.state = { 
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
            }
        }
    }

    render (){
        return (
            <div className="chart2">
    <Doughnut
	    data={this.state.chartData}

	    options={{
		    maintainAspectRatio: false
	            }}
    />
            </div>
        )
    }
}

export default Chart2;