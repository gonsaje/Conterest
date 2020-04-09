import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      age:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return e => this.setState({[type]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user)
      .then(() => this.props.history.push('/'));
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {
    return (
      <div className="signup-form-container">
        {/* <div className='login-nav'>{this.props.navLink}</div> */}
        <form onSubmit={this.handleSubmit} className="signup-form-box">
            <Link to="/" className="header-link">
              <h1 className="dimterest-header">d</h1>
            </Link>
          <div className='form-titles'>
            <h2>Welcome to Dimterest</h2>
          </div>
          <div className="signup-form">
            <br />
              <input 
                placeholder='Email'
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            <br />
              <input 
                placeholder='Password'
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            <br />
              <input 
                placeholder='Age'
                type="number"
                value={this.state.age}
                onChange={this.update('age')}
                className="signup-input"
              />
            <br />
            <input className="session-submit" type="submit" value="Continue" />
          </div>
          <div className='signup-guider'>
            Already a member?
              <p className='blue-sign'>{this.props.navLink}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
