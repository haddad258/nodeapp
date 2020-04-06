import React ,{Component}from 'react';
import Switch from '@material-ui/core/Switch';

/* const PurpleSwitch = withStyles({
	switchBase: {
	  color: purple[300],
	  '&$checked': {
		color: purple[500],
	  },
	  '&$checked + $track': {
		backgroundColor: purple[500],
	  },
	},
	checked: {},
	track: {},
  })(Switch);
  
 const IOSSwitch = withStyles((theme) => ({
	root: {
	  width: 42,
	  height: 26,
	  padding: 0,
	  margin: theme.spacing(1),
	},
	switchBase: {
	  padding: 1,
	  '&$checked': {
		transform: 'translateX(16px)',
		color: theme.palette.common.white,
		'& + $track': {
		  backgroundColor: '#52d869',
		  opacity: 1,
		  border: 'none',
		},
	  },
	  '&$focusVisible $thumb': {
		color: '#52d869',
		border: '6px solid #fff',
	  },
	},
	thumb: {
	  width: 24,
	  height: 24,
	},
	track: {
	  borderRadius: 26 / 2,
	  border: `1px solid ${theme.palette.grey[400]}`,
	  backgroundColor: theme.palette.grey[50],
	  opacity: 1,
	  transition: theme.transitions.create(['background-color', 'border']),
	},
	checked: {},
	focusVisible: {},
  }))(({ classes, ...props }) => {
	return (
	  <Switch
		focusVisibleClassName={classes.focusVisible}
		disableRipple
		classes={{
		  root: classes.root,
		  switchBase: classes.switchBase,
		  thumb: classes.thumb,
		  track: classes.track,
		  checked: classes.checked,
		}}
		{...props}
	  />
	);
  });
    c */
    class Switches extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.state = {
        checkedA: true,
        checkedB: true,
    }
  }
   handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

 render(){
    return (
        <div>
          <Switch
            checked={this.state.checkedA}
            onChange={this.handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Switch
            checked={this.state.checkedB}
            onChange={this.handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
          <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
          <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
          <Switch
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
        </div>
      );
 }
}
export default Switches;