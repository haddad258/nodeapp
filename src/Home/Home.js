
 import React, { Component } from 'react';
 import logo from './image2vector.svg'; 
 import humidlogo from './humidity.svg';
 import airq from './airq.svg';
 import logocounter from './counter.svg'
 import brightness from './brightness.svg'
 import './Home.css';
 import axios from 'axios';
 import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
 const API_URL = 'http://localhost:3003/inforealtime';
 class Home extends Component {
   state = {
     inforealtime: []
   }
   componentDidMount() {
     const url = `${API_URL}`;
     axios.get(url).then(response => response.data)
     .then((data) => {
       this.setState({ inforealtime: data })
       console.log(data)
      })
   }
   render() {
 
     return (
<Container>

     <Row> <Col xs={4}> </Col>
     <Col xs={4}>  <h2>Global information</h2> </Col>
     </Row>
     
  <Row>
    <Col xs={6}>  <div className="container">
         <div className="col-xs-8">
           
         <h1>        <img src={logo} width="150" height="80" alt="Temperature" /> Temperature</h1>
         {this.state.inforealtime.map((T) => (
           <div className="card">
            <div className="card-body">
                <h5 className="card-title">{T.temperature_now} °C</h5>
               <h6 className="card-subtitle mb-2 text-muted">
               <Button variant="outline-primary" href="/Temperature">Show more details</Button>         
               </h6>
             </div>
           </div>
         ))}
         </div>
        </div> </Col>
    <Col xs={6}>  <div className="container">
         <div className="col-xs-8">
           
         <h1>        <img src={humidlogo} width="150" height="80" alt="Humidity"/> Humidity</h1>
         {this.state.inforealtime.map((T) => (
           <div className="card">
            <div className="card-body">
                <h5 className="card-title">{T.humidity_now}%</h5>
               <h6 className="card-subtitle mb-2 text-muted">
               <Button variant="outline-primary" href="/Humidity">Show more details</Button>           
               </h6>
             </div>
           </div>
         ))}
         </div>
        </div></Col>
        
    <Col xs={6}>  
    <div className="container">
         <div className="col-xs-8">
           
         <h1>        <img src={airq} width="150" height="80" alt="SEQA" /> SEQA(%CO2)</h1>
         {this.state.inforealtime.map((T) => (
           <div className="card">
            <div className="card-body">
                <h5 className="card-title">{T.Seqa_now}%</h5>
               <h6 className="card-subtitle mb-2 text-muted">
               <Button variant="outline-primary" href="/Seqa">Show more details</Button>           
               </h6>
             </div>
           </div>
         ))}
         </div>
        </div>
     </Col>
     <Col xs={6}>  
     <div className="container">
         <div className="col-xs-8">
           
         <h1>        <img src={brightness} width="150" height="80" alt="brightness" /> brightness</h1>
         {this.state.inforealtime.map((T) => (
           <div className="card">
            <div className="card-body">
                <h5 className="card-title">{T.percentage_lighting_now}%</h5>
               <h6 className="card-subtitle mb-2 text-muted">
               <Button variant="outline-primary" href="/Brightness">Show more details</Button>          
               </h6>
             </div>
           </div>
         ))}
         </div>
        </div>
     
     </Col>
     <Col xs={6}>  
     <div className="container">
         <div className="col-xs-8">
           
         <h1>        <img src={logocounter} width="150" height="80" alt="counter" /> Smart metering</h1>
         {this.state.inforealtime.map((T) => (
           <div className="card">
            <div className="card-body">
                <h5 className="card-title">{T.percentage_lighting_now}</h5>
               <h6 className="card-subtitle mb-2 text-muted">
               <Button variant="outline-primary" href="/Brightness">Show more details</Button>          
               </h6>
             </div>
           </div>
         ))}
         </div>
        </div>
     
     </Col>
  </Row>
 

      
        </Container>
     );
   }
 }
 export default Home