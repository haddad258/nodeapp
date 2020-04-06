

import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

const API_URL = 'http://localhost:3003/Temperature_network_delete'


class CameraDeleteT extends Component {

    constructor(props) {
    super(props);
    this.state = {
      Macadresse: '',
      ipadresse: '',
     
    }
    }
  
  render() {
   return(
     <div className="App">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
     <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
     <div className="form-group">
          <label htmlFor="name">@Mac</label>
          <input type="text" className="form-control" value={this.state.Macadresse} onChange={this.handleScan.bind(this) && this.handleScancode.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="name">@ip</label>
          <input type="text" className="form-control" value={this.state.ipadresse} onChange={this.onipChange.bind(this)} />
      </div>
     
      
     
         
      
      <button type="submit" className="btn btn-danger">Delete</button>
      </form>
      </div>
   );
  }
 
  handleScan = data => {
    if (data) {
      this.setState({Macadresse: data })
    }
  }
  handleError = err => {
    console.error(err)
  }


  handleScancode(event) {
    this.setState({Macadresse: event.target.value})
    }
  
    onipChange(event) {
    this.setState({ipadresse: event.target.value})
    }
  
   
  
    handleSubmit(e) {
      e.preventDefault();
  
      fetch(API_URL,{
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(
        (response) => (response.json())
         ).then((response)=>{
        if (response.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }
  }
  
 
export default CameraDeleteT;
