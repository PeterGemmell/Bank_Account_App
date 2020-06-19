import React, { Component } from 'react';
import history from './../history';
import { validateAll } from 'indicative/validator';

class LoginContainer extends Component {


  state = {
    fullname: '',
    email: '',
    password: '',
    // Using indicative we also need to add in a password confirmation in name input and in state.
    password_confirmation: '',
  }

  handleInputChange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit=(event)=> {
    event.preventDefault();
    this.props.history.push('/home');
    // We are validating the user using indicative package.
    // taking the input data from state.
    const data = this.state;
    const rules = {
      fullname: 'required|string',
      email: 'required|email',
      password: 'required|string|min:8|confirmed' // confirmed will check for the password confirmation.
    }

    const messages = {
      required: 'This {{ field }} is required.',
      'email.email': 'This email is invalid.',
      'password.confirmed': 'The password does not match'
    }


    validateAll(data, rules, messages)
    .then(() => {
      console.log('success')
    })
    .catch(errors => {
      console.log(errors);
      // Show errors to user.
      const formattedErrors = {}
      errors.forEach(error => formattedErrors[error.field] = error.message)
      this.setState({errors: formattedErrors})
    })
  };



  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2><b>G&A Online Bank</b></h2>
          <form onSubmit={this.handleSubmit}>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleInputChange}/>
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleInputChange}/>
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleInputChange}/>
            </div>
            <div className='password'>
              <label htmlFor="password">Password (Confirm)</label>
              <input type='password' name='password_confirmation' onChange={this.handleInputChange}/>
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='submit'>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
