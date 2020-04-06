

import React from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { CSVLink } from "react-csv";
import paginationFactory from 'react-bootstrap-table2-paginator';
const API_URL = 'http://localhost:3003/Temperature_Show_Sensors'


const columns = [{
    dataField: 'Macadresse',
    text: '@Mac',
    filter: textFilter()
  }, {
    dataField: 'ipadresse',
    text: '@ip',
    filter: textFilter()
  },
  {
      dataField: 'Room',
      text: 'Room',
      filter: textFilter()
    },
    {
      dataField: 'Floor',
      text: 'Floor',
      filter: textFilter()
    },
  
     
  ];

class ShowtableTs extends React.Component {
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
          return(
            <div>
<BootstrapTable striped bordered hover variant="dark" bootstrap4 keyField='id' data={ this.state.seqa } columns={ columns } pagination={ paginationFactory() } filter={ filterFactory() } />    
  
   <div><CSVLink data={this.state.seqa}>Download csv</CSVLink></div>
  </div>
          );
        }
      }
export default ShowtableTs