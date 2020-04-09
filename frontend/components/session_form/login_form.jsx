import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  update(type) {
    return e => this.setState({
      [type]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then(() => this.props.history.push('/'));
  }

  handleClick(e) {
    e.preventDefault();
    const user = Object.assign({}, {email:'demo@email.com', password:'password'});
    this.props.login(user)
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
      <div className="login-form-container">
        {/* <div className='login-nav'>{this.props.navLink}</div> */}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <header>
            <Link to="/" className="header-link">
              <h1 className="dimterest-header">dimterest</h1>
            </Link>
          </header>
          <h2>welcome to dimterest</h2>
          <h4>issa vibe</h4>
          {/* <p className='login-formNav'>{this.props.formType}</p> */}
          {/* {this.renderErrors()} */}
          <div className="login-form">
            <br />
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder='Email'
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder='Password'
            />
            <br />
            <input className="session-submit" type="submit" value="continue" />
          </div>
            <button className='session-submit' onClick={this.handleClick}>demo user</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
