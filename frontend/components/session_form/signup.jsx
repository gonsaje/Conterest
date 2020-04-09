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


  render() {
    return (
      <div className="signup-form-container">


        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <header>
            <Link to="/" className="header-link">
              <h1 className="dimterest-header">dimterest</h1>
            </Link>
            {/* <GreetingContainer /> */}
          </header>
          <h2>welcome to dimterest</h2>
          <h4>issa vibe</h4>
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
            <input className="session-submit" type="submit" value="continue" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
