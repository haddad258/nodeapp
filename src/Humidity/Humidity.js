
 import React from 'react';
 import BootstrapTable from 'react-bootstrap-table-next';
  import axios from 'axios';
  import ChartWithIndexLabel from '../charts/chatts'
  import ResponsiveContainer from "react-responsive-widget";
  import humlogo from './humidity.svg'
  import logopar from '../assets/paramtre.svg'
  import { CSVLink } from "react-csv";
 import paginationFactory from 'react-bootstrap-table2-paginator';
 import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import SettingH from './SettingH';
 const API_URL = 'http://localhost:3003/Humidity_history'
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
},{
  dataField: 'Humidity_pr',
  text: 'Himudity(%)',
  filter: textFilter()
},
{
  dataField: '',
  text: 'show more detailes'
}];
 class Humidity  extends React.Component {
   state = {
    himudity: [],
    
   
   }
   componentDidMount() {
     const url = `${API_URL}`;
     axios.get(url).then(response => response.data)
     .then((data) => {
       this.setState({ himudity: data })
       console.log(this.state.himudity)
      })
   }
     render() {
   const   options ={
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", //"light1", "dark1", "dark2"
        title:{
          text: "humidityy "
        },
        data: [{
          type: "column", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
           
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
<div> <h1> <img src={humlogo} width="150" height="80" alt="Humidity"/> Humidity</h1></div>

         <div className="app-row">
             <div className="app-col-xs-12 app-col-md-7"> <BootstrapTable striped bordered hover variant="dark" bootstrap4 keyField='id' data={ this.state.himudity } columns={ columns } pagination={ paginationFactory() } filter={ filterFactory() } />    
             <div> <CSVLink data={this.state.himudity}>Download csv</CSVLink></div>
</div>

<div className="app-col-xs-12 app-col-md-5"><img src={logopar} width="150" height="80" alt="Temperature" /> <SettingH></SettingH></div> 
             <div className="app-col-xs-12 app-col-md-6"><ChartWithIndexLabel options={options}></ChartWithIndexLabel></div>
             
         </div>
     </ResponsiveContainer>

        );
     }
   }
   export default Humidity ;