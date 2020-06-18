import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import history from './../history';

class LoginContainer extends Component {




  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2><b>G&A Online Bank</b></h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='submit'>
              <button onClick={() => history.push('/home')}>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
