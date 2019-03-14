import React, {Component} from 'react';

//ici c le graph qu'on va utiliser
import {Radar} from 'react-chartjs-2';

class Chart3 extends Component {

    constructor(props){
        super(props);
        this.state = { 
            chartData:{
                labels:['60s','70s', '80s', '90s'],
                datasets:[
                {
                    label:'Affluence de ventes 70s',
                    data:[
                        301,
                        601,
                        250,
                        580
                    ],
                    backgroundColor:[
                        "#8884d8"
                    ]
                }]
            }
        }
    }

    render (){
        return (
            <div className="chart3">
    <Radar
	    data={this.state.chartData}

	    options={{
		    maintainAspectRatio: false
	            }}
    />
            </div>
        )
    }
}

export default Chart3;