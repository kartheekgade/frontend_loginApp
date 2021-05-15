import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
            email : '',
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
		axios.post("http://localhost:4000/user/register",this.state)
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
          			Register
        		</h1>
        		<form onSubmit={this.submitHandler}>
                    email : <input onChange={this.changeHandler} value={user} name="email" placeholder="email" id= "emailBox" /><br />
          			Username : <input onChange={this.changeHandler} value={user} name="username" placeholder="username" id= "usernameBox" /> <br /> 
          			Password : <input onChange={this.changeHandler} value={pass} name="password" placeholder="password" id = "passwordBox" /> <br /> <br />
          			<button type="submit">
            			Register
          			</button><br />
        		</form>
      		</div>
		);
	}
}

export default Register;