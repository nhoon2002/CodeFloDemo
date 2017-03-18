import React, { Component } from 'react';
import connect from 'react-redux';

//Importing all actions inside the userAction file. That way I can have multiple exports in userAction
//file and use specific ones with dot notation kind of like an object. E.g: if userAction file had
//a function called getUsers, I can invoke/call that function by doing user.getUsers(); 
//To import just one action from the file just do: import { getUser } from '../actions/usersAction'
//then call the function directly without the dot notation like so getUser();
// import * as user from '../actions/usersAction'
import { createUser } from '../actions/usersAction';

import axios from 'axios';

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			username: "",
			password: "",
			password2: "",
			email: "",
			errors: false,
			errArr: []
		}

		this.checkName = this.checkName.bind(this);
		this.checkUsername = this.checkUsername.bind(this);
		this.checkPassOne = this.checkPassOne.bind(this);
		this.checkPassTwo = this.checkPassTwo.bind(this);
		this.checkEmail = this.checkEmail.bind(this);
		this.handleForm = this.handleForm.bind(this);
	}

	checkName(event) {
		this.setState({
			name: event.target.value
		});
	}

	checkUsername(event) {
		this.setState({
			username: event.target.value
		});
	}

	checkPassOne(event) {
		this.setState({
			password: event.target.value
		});
	}

	checkPassTwo(event) {
		this.setState({
			password2: event.target.value
		});
	}

	checkEmail(event) {
		this.setState({
			email: event.target.value
		});
	}

	handleForm(event) {

		var formInput = {
			name: this.state.name,
			username: this.state.username,
			password: this.state.password,
			password2: this.state.password2,
			email: this.state.email
		}

		axios.post('/register', formInput).then((data) => {
			console.log("RETURN DATA FROM AXIOS REGISTER POST", data);
			console.log('\n\n');
			console.log("RETURNed DATA ERRORS", data.data[0]);
			console.log('\n\n');
			if(data.data.length > 0){
				this.setState({
					errors: true,
					errArr: data.data
				});
			}
			console.log("THIS STATE ERRORS BOOLEAN", this.state.errors);
			console.log("THIS STATE ERROR ARRAY", this.state.errArr);
		});
	}

		// {{#if errors}}
		// 	{{#each errors}}
		// 		<div class="alert alert-warning">{{msg}}</div>
		// 	{{/each}}
		// {{/if}}

	render() {
			
				const errs = this.state.errors;

				let success = null;
				let msg = null;
				console.log("errrs", errs)
				if(errs){
					//if putting curly brackets after the arrow function, remember to return the dom elements, in this
					//case the div messages. If no curly brakcets are used, the items return directly. Either way is 
					//okay, it is preference.
					msg = this.state.errArr.map((item, index) => 
					 <div key={index} className="alert alert-warning">{item.msg}</div>	
					);
				}
				console.log('msg', msg)

					// can also directly put the messages inline the return below instead of mapping and assigning it 
					// to an variable (msg);

					// {errs ? this.state.errArr.map((item, index) => 
					//  <div key={index} className="alert alert-warning">{item.msg}</div>	
					// ) : success} 

			
		return ( <div>
			{/*errs ? msg : success*/}
			<form className="form-signin">
				{errs ? msg[0] : success}
				<div className="form-group">
				    <label htmlFor="inputName" className="sr-only">Name</label>
				    <input type="text" name="name" id="inputName" className="form-control" placeholder="Name" value={this.state.name}
				    onChange={this.checkName} />
				</div>
				{errs ? msg[1] : success}
				<div className="form-group">
				    <label htmlFor="inputUsername" className="sr-only">Username</label>
				    <input type="text" name="username" id="inputUsername" className="form-control" placeholder="Username" value={this.state.username}
				    onChange={this.checkUsername}/>
				</div>
				{errs ? msg[4] : success}
				<div className="form-group">
				    <label htmlFor="inputPassword" className="sr-only">Password</label>
				    <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password}
				    onChange={this.checkPassOne}/>
				 </div>
				 
				 <div className="form-group">
				    <label htmlFor="inputPassword2" className="sr-only">Password</label>
				    <input type="password" name="password2" id="inputPassword2" className="form-control" placeholder="Password" value={this.state.password2}
				    onChange={this.checkPassTwo}/>
				 </div>
				 {errs ? msg[2] : success}
				 {errs ? msg[3] : success}
				 <div className="form-group">
				    <label htmlFor="inputEmail" className="sr-only">Email</label>
				    <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email" value={this.state.email}
				    onChange={this.checkEmail}/>
				 </div>
				<button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleForm}>Register</button>
			</form>
		</div>
		);
	}
}

export default Register;
