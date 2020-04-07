import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      age:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
          <div className='login-nav'>{this.props.navLink}</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>welcome to dimterest</h2>
          <h4>issa vibe</h4>
          <br />
          <br/>
          <p className='login-formNav'>{this.props.formType}</p>
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
              <input type="number"
                value={this.state.age}
                onChange={this.update('age')}
                className="login-input"
                placeholder='Age'
              />
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
