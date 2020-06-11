import React from 'react';

class BoardForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    this.props.createBoard(board).then(() => {
      this.props.closeModal();
      this.props.history.push('/profile');
    });
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {
    return (
      <>
      <div className="edit-form">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        {/* <span className="error-msg">{this.renderErrors()}</span> */}

        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2 className="welcome">Create board</h2>

            <div className="board-form">
              <br />
              {/* Name */}
              <label>Name</label>
              <br/>
              <input
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
                className="board-input"
                placeholder='Like "Places to Go" or "Recipes to Make"'
              />

              <br />
              {/* Description */}
              <label>Description</label>
              <br/>
              <input
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="board-input"
                placeholder="What's your board about?"
              />
              <br/>
              <input onClick={this.closeModal} className="red-button" type="submit" value="Create" />
              <br></br>

            </div>
          </form>

         
        </div>
      </div>
    </>
  );
}
}

export default BoardForm;
