
 import React from 'react';
 import BootstrapTable from 'react-bootstrap-table-next';
  import axios from 'axios';
  import ChartWithIndexLabel from '../charts/chatts'
  import ResponsiveContainer from "react-responsive-widget";
  import airq from './airq.svg'
  import { CSVLink } from "react-csv";
 import paginationFactory from 'react-bootstrap-table2-paginator';
 import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
 import logopar from '../assets/paramtre.svg'
import SettingQ from  './SettingQ'
 const API_URL = 'http://localhost:3003/Seqa_history'
 const columns = [{
  dataField: 'Date',
  text: 'Date',
  filter: textFilter()
}, {
  dataField: 'Room',
  text: 'Room',
  filter: textFilter()
},
{
  dataField: 'Floor',
  text: 'Floor',
  filter: textFilter()
}, {
  dataField: 'Seqa_pr',
  text: 'Seqa(%Co2)',
  filter: textFilter()
},
{
  dataField: '',
  text: 'show more detailes'
}];
 class Seqa  extends React.Component {
   state = {
    seqa: []
   }
   componentDidMount() {
     const url = `${API_URL}`;
     axios.get(url).then(response => response.data)
     .then((data) => {
       this.setState({ seqa: data })
       console.log(this.state.seqa)
      
    
      })
   }
     render() {
      const   options ={
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", //"light1", "dark1", "dark2"
        title:{
          text: "SQEA "
        },
        data: [{
          type: "column", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { x: 1, y: 60 },
            { x: 10, y: 21 },
            { x: 20, y: 49 },
            { x: 30, y: 36 },				
            { x: 40, y: 65 },
            { x: 50, y: 71 },
            { x: 60, y: 68 },
            { x: 100, y: 60 },
            { x: 110, y: 21 },
            { x: 120, y: 49 },
            { x: 130, y: 36 },				
            { x: 140, y: 65 },
            { x: 150, y: 71 },
            { x: 160, y: 68 },
            { x: 170, y: 38 },
            { x: 180, y: 170, indexLabel: "Highest" },
           
          ]
        }]
      }
       return (
<ResponsiveContainer>
<div>          <h1>        <img src={airq} width="150" height="80" alt="SEQA" /> SEQA(%CO2)</h1>
</div>

         <div className="app-row">
             <div className="app-col-xs-12 app-col-md-7">        <BootstrapTable striped bordered hover variant="dark" bootstrap4 keyField='id' data={ this.state.seqa } columns={ columns } pagination={ paginationFactory() } filter={ filterFactory() } />    
  
             <div> <CSVLink data={this.state.seqa}>Download csv</CSVLink></div>
</div>
<div className="app-col-xs-12 app-col-md-5"><img src={logopar} width="150" height="80" alt="Temperature" /> <SettingQ></SettingQ></div> 


             <div className="app-col-xs-12 app-col-md-6"><ChartWithIndexLabel options={options}></ChartWithIndexLabel></div>
             
         </div>
     </ResponsiveContainer>
        );
     }
   }
   export default Seqa ;