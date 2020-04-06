/* import React, { Component } from 'react';

import axios from 'axios';
const API_URL = 'http://localhost:8081/listUsers';
class App extends Component {
  state = {
    temperature: []
  }
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ temperature: data })
      console.log(this.state.temperature)
     })
  }
  render() {

    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>React Axios Example</h1>
        {this.state.temperature.map((T) => (
          <div className="card">
           <div className="card-body">
               <h5 className="card-title">{T.rooms}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              {T.etage}             
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;
 */
import React from "react";
import Home from "./Home/Home"
import Temperature from './Temperature/Temperature'
import Seqa from "./Seqa/Seqa"
import Humidity from "./Humidity/Humidity"
import Brightness from './brightness/brightness'
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


 
import './App.css';
 
class App extends React.Component {
 
  render()  {
    return  ( 
     
      <BrowserRouter>
      
      <Navbar class="navbar navbar-expand-lg navbar-light bg-light" bg="primary" variant="dark">
    <Navbar.Brand href="/">Smart Light</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/Brightness"> Brightness</Nav.Link>
      <Nav.Link href="/Temperature">Temperature</Nav.Link>
      <Nav.Link href="/Humidity">Humidity</Nav.Link>
      
      <Nav.Link href="/Seqa">SEQA</Nav.Link>
      
    </Nav>
  {/*   <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
  </Navbar>
  
        <div>
         {/*  <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Temperature">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul> */}
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/Brightness" component={Brightness} />
            <Route path="/Temperature" component={Temperature} />
            <Route path="/Seqa" component={Seqa} />            
            <Route path="/Humidity" component={Humidity} />
          </div>
        </div>
      </BrowserRouter>
     
    );
  }
 
}
 

 


 
export default App;