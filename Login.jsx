import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import user_actions from './action';

const Login = React.createClass({
	getInitialState(){
		return{username:'', password:''}
	},
	change(key, event){
		// console.log(key);
		this.setState({[key]: event.target.value})
	},
	sub(event){
		event.preventDefault();
		console.log("im in sub");
		this.props.login(this.state)
	},
	render(){
		return(
			<form onSubmit={this.sub}>
				<input type="text" value={this.state.username} onChange={this.change.bind(this,"username")}/>
				<input type="text" value={this.state.password} onChange={this.change.bind(this, "password")}/>
				<input type="submit" value="login"/>
			</form>
			)
	}
})

const mapStateToProps = (state, ownprops)=>{
	// console.log(state, "STATETOPROPS");
	// console.log(ownprops, "ownpropsTOPROPS");
	return{}
}

function mapDispatchToProps(dispatch) {
	return {login: bindActionCreators(user_actions.getUserServer, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);