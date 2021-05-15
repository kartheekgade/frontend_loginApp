import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username : '',
			password : ''
		};
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value});
	}

	submitHandler = e => {
		e.preventDefault();
		console.log(this.state);
		axios.post("http://localhost:4000/user/signin",this.state)
		.then(response =>{
			console.log(response);
		}).catch(error => {
			console.log(error)
		})
	}

	render() {
		const {user,pass} = this.state
		return(
			<div>
        		<h1>
          			Login
        		</h1>
        		<form onSubmit={this.submitHandler}>
          			Username : <input onChange={this.changeHandler} value={user} name="username" placeholder= "username" id= "usernameBox" /> <br /> 
          			Password : <input onChange={this.changeHandler} value={pass} name="password" placeholder = "password" id = "passwordBox" /> <br /> <br />
          			<button type="submit">
            			Login
          			</button><br />
          		<a href='/register'> Not registered? Click here to signup</a>
        		</form>
      		</div>
		);
	}
}

export default Login;