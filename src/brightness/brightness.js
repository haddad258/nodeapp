 import React ,{Component}from 'react';
  import axios from 'axios';
  import Switch from '@material-ui/core/Switch';
  import Button from 'react-bootstrap/Button'
 import ResponsiveContainer from "react-responsive-widget";
 import brightnesslgo from './brightness.svg'

 const API_URL = 'http://localhost:3003/Etat_Led'


class Brightness extends Component {
   state = {
	Brightnessled: [],
	checkedA: true,
    checkedB: true,
   }
   componentDidMount() {
     const url = `${API_URL}`;
     axios.get(url).then(response => response.data)
     .then((data) => {
       this.setState({ Brightnessled: data })
      
      })
   }

   handleChange = (event) => {
    this.setState({  [event.target.name]: event.target.checked });
  };
     render() {
		const divStyle = {
			margin: '40px',
		  };
		  
       return ( 
		
	   <ResponsiveContainer>
	  
	   
				<div className="app-row">
					<div className="app-col-xs-12 app-col-md-7"> <div className="container">
		<div className="col-xs-5">
		  
		<h1>        <img  src={brightnesslgo}width="150" height="80" alt="SEQA" /> Brightness</h1>
		{this.state.Brightnessled.map((T) => (
		  <div className="card">
		   <div className="card-body">
		<h5  className="card-title"><p style={{divStyle}} >Room : {T.Room } - Floor : {T.Floor}</p>  <p  style={{divStyle}}> IP adresse : {T.ipadresse}</p></h5>

			  <h6 className="card-subtitle mb-2 text-muted">
			  <Button variant="outline-primary" >Setting</Button>    
			         
			  </h6>
			  <Switch
        checked={T.Etat}
        onChange={this.handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />


			</div>
		  </div>
		))}
		</div>
	   </div> </div>
	   <div className="app-col-xs-12 app-col-md-7">   
	   
	   
	   </div>
	 </div>
			</ResponsiveContainer>
    
                                
        );
     }
   }
   export default Brightness ;