import React from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:3003/Temperature_network_delete'
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'yye'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) { console.log(event.target.value) ;  this.setState({value: event.target.value});  }
    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.value
        };
    
        axios.post(API_URL, user )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
  
    render() {
      return (
       /*  <form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />  
            <input type="text" value2={this.state.value} onChange={this.handleChange} />       </label>
          <input type="submit" value="Envoyer" />
        </form> */
        <button type="submit"  className="btn btn-danger">Delete</button>
      );
    }
  }
  export default NameForm;