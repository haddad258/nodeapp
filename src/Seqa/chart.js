import React, { Component } from 'react';
import axios from 'axios'
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const API_URL = 'http://localhost:3003/Temperature_average'
/* function max(T){
 var max = T[0];
 for(let i=0;i<T.length;i++){
	 if(T([i])>max){
		 max =T[i]
	 }
	 return max;
 }

} */
class RangeColumnChart extends Component {
	state = {
		Temperature_averge: []
	   }
	   componentDidMount() {
		 const url = `${API_URL}`;
		 axios.get(url).then(response => response.data)
		 .then((data) => {
		  for(let i=0;i<data.length;i++){
			  data[i]["Label"]=data[i]["Room"]
			  data[i]["y"]=  parseFloat(data[i]["temperature_C"])
			  data[i]["indexLabel"]=data[i]["Room"]
			  delete data[i]["Room"]
			  delete data[i]["temperature_C"]
            this.state.Temperature_averge.push(data[i])

		  }

		  })
		  
	   }
	   render() {
		   console.log(this.state.Temperature_averge)
		const options = {
			title: {
				text: "Rooms TEMPERATURE with order by Date"
			},
			exportEnabled: true,
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: this.state.Temperature_averge
			}
			]
		}
		
		return (
		<div>
			
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default RangeColumnChart;