import React, { Component } from "react";
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ChartWithIndexLabel extends Component {
  render() {
	
	return (
		<div className="ChartWithIndexLabel">
			
			<CanvasJSChart options = {this.props.options} 
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

		
	);
  }
}
 
export default ChartWithIndexLabel;