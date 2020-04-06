import React, { Component } from 'react'
import QrReader from 'react-qr-reader'


const API_URL = 'http://localhost:3003/Humidity_network_add'


class CameraAddH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Macadresse: '',
      ipadresse: '',    
      Buillding: '',
      Floor:'',
      Room:''
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
          <label htmlFor="name">Macadresse</label>
          <input type="text" className="form-control" value={this.state.Macadresse} onChange={this.handleScan.bind(this) && this.handleScancode.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="name">ipadresse</label>
          <input type="text" className="form-control" value={this.state.ipadresse} onChange={this.onipadresseChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Buillding</label>
          <input type="text" className="form-control" aria-describedby="emailHelp" value={this.state.Buillding} onChange={this.onBuilldingChange.bind(this)} />
      </div>
      <div className="form-group">
           <label htmlFor="message">Floor</label>
          <input type="text" className="form-control" value={this.state.Floor} onChange={this.onFloorChange.bind(this)} />
      </div>
      <div className="form-group">
           <label htmlFor="message">Room</label>
          <input type="text" className="form-control" value={this.state.Room} onChange={this.onRoomChange.bind(this)} />
      </div>
     
         
      
      <button type="submit" className="btn btn-primary">Submit</button>
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
  
    onipadresseChange(event) {
    this.setState({ipadresse: event.target.value})
    }
  
    onBuilldingChange(event) {
    this.setState({Buillding: event.target.value})
    }
  
    onFloorChange(event) {
    this.setState({Floor: event.target.value})
    }
    onRoomChange(event) {
      this.setState({Room: event.target.value})
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
  
 
export default CameraAddH
  
