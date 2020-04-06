
 import React from 'react';
 import BootstrapTable from 'react-bootstrap-table-next';
  import axios from 'axios';
  import ChartWithIndexLabel from '../charts/chatts'
  import RangeColumnChart from './chart'
  import ResponsiveContainer from "react-responsive-widget";
  import temlogo from './image2vector.svg'
  import logopar from '../assets/paramtre.svg'
  import { CSVLink } from "react-csv";
 import paginationFactory from 'react-bootstrap-table2-paginator';
 import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

 //import Addnew from './configt'
 //import Delete from './delet'
 //import Updatet from './update'
 import SettingT from './SettingT'
 const API_URL = 'http://localhost:3003/Temperature_history'
 const columns = [{
  dataField: 'Date',
  text: 'Date',
  filter: textFilter()
}, {
  dataField: 'Room',
  text: 'Room ',
  filter: textFilter()
},
{
  dataField: 'Floor',
  text: 'Floor',
  filter: textFilter()
}, {
  dataField: 'temperature_C',
  text: 'Temperature(°C)',
  filter: textFilter()
},
{
  dataField: '',
  text: 'show more detailes'
}];
 class Temperature  extends React.Component {
   state = {
    Temperature_history: []
   }
   componentDidMount() {
     const url = `${API_URL}`;
     axios.get(url).then(response => response.data)
     .then((data) => {
       this.setState({ Temperature_history: data })
      // console.log(this.state.Temperature_history)
      })
   }
     render() {
      const   options ={
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", //"light1", "dark1", "dark2"
        title:{
          text: "Floor TEMPERATUE "
        },
        data: [{
          type: "column", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
           
            { x: 1, y: 14, indexLabel: "floor1"},
            { x: 2, y: 16 ,indexLabel: "floor2"},
            { x: 3, y: 16 ,indexLabel: "floor3"},
            { x: 4, y: 15 ,indexLabel: "floor4"},				
            { x: 5, y: 16, indexLabel: "floor5"},
            { x: 6, y: 17 ,indexLabel: "floor6"},
            { x: 7, y: 14,indexLabel: "floor7" },
            { x: 8, y: 13 ,indexLabel: "floor8"},
            { x: 9, y: 15, indexLabel: "floor9" },
           
          ]
        }]
      }
       return ( 
        <ResponsiveContainer>
       <div> <h1>        <img src={temlogo} width="150" height="80" alt="Temperature" /> Temperature</h1></div>
       
                <div className="app-row">
                    <div className="app-col-xs-12 app-col-md-7"> <BootstrapTable striped bordered hover variant="dark" bootstrap4 keyField='id' data={ this.state.Temperature_history } columns={ columns } pagination={ paginationFactory() } filter={ filterFactory() } />    
                    <div> <CSVLink data={this.state.Temperature_history}>Download csv</CSVLink></div>
    </div>
    <div className="app-col-xs-12 app-col-md-5"><img src={logopar} width="150" height="80" alt="Temperature" /> <SettingT></SettingT></div> 

                    <div className="app-col-xs-12 app-col-md-6"><ChartWithIndexLabel options={options} ></ChartWithIndexLabel></div>
                    <div className="app-col-xs-12 app-col-md-6"><RangeColumnChart></RangeColumnChart></div>
                    

                </div>
            </ResponsiveContainer>
       
      
    
                                
        );
     }
   }
   export default Temperature ;