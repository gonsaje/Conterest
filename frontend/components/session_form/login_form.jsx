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
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillUpdate() {
  //   location.reload();
  // }

  componentWillUnmount() {
    this.props.clearErrors();

  }

  update(type) {
    return e => this.setState({
      [type]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    this.props.login(this.state)
      .then(() => this.props.history.push('/feed'));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.login({ email: 'demo@email.com', password: 'password' })
      .then(() => this.props.history.push('/feed'));
  }

 

  renderErrors() {
    return (
      <ul className='error-ul'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className='error-li'>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container"  >
        {/* <div className='login-nav'>{this.props.navLink}</div> */}
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <Link to="/" className="header-link">
            <img className='conterest-logo' id="logo" src={window.logoURL} />
            </Link>
            <div className='form-titles'>
            <h2>Welcome to Conterest</h2>
            </div>
            {this.renderErrors()}
            <div className="login-form">
            <br />
            <input type="email"
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
            <input className="session-submit" type="submit" value="Log In" />
            </div>
            <button className='demo-user' onClick={this.handleClick}>Demo User</button>
            <div className='signup-guider'>
              Not on Conterest yet? 
              <p className='blue-sign'>{this.props.navLink}</p>
            </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
