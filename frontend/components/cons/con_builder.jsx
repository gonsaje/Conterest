import React from 'react';

import { Link, Redirect } from 'react-router-dom';

class ConBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      creator_id: this.props.currentUser.id,
      board_id: '',
      imageFile: null,
      imageUrl: null,
      errors: this.props.errors,
    }
    
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.removeImagePreview = this.removeImagePreview.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('con[title]', this.state.title);
    formData.append('con[description]', this.state.description);
    formData.append('con[board_id]', this.state.board_id);
    formData.append('con[errors]', this.state.errors);
    if (this.state.imageFile) {
      formData.append('con[image]', this.state.imageFile)
    }
    this.props.createcon(formData)
    .then((action) => {
      this.props.history.push(`/cons/${action.con.id}`)}, (err) => {
      this.setState({ errors: this.renderErrors() })
    })
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  boardFromTitle(boardTitle) {
    let currentUserBoards = this.props.currentUser.boards
    let board = currentUserBoards.filter(board => {
      return Object.values(board)[0].title === boardTitle
    })
    return Object.values(board[0])[0];
  }

  handleSelect(e) {
    e.preventDefault();
    let selected = document.getElementsByClassName("show-con-select")[0];
    let boardTitle = e.currentTarget;
    selected.innerText = boardTitle.innerText;
    let boardId = this.boardFromTitle(boardTitle.innerText).id
    this.setState({board_id: boardId})
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value, errors: [] })
  }

  

  removeImagePreview() {
    this.setState({imageUrl: null, imageFile: null, errors: []});
  }

  renderErrors() {
    let error = []
    
    if (this.props.errors[0].includes("Image An image is required to create a con.")) {
      error.push("An image is required to create a con.");
      return error
    } 
    
    if (this.props.errors[0].includes("Title can't be blank")) {
      error.push("Title can't be blank.");
      return error
    } 

    if (this.props.errors[0].includes("Board must exist")) {
      error.push("Please select a board.");
      return error
    } 
  }

  imageErrors() {
    if (this.state.errors[0] === "An image is required to create a Pin.") {
      return this.state.errors;
    }
  }
  
  titleErrors() {
    if (this.state.errors[0] === "Title can't be blank.") {
      return this.state.errors;
    }
  }

  boardErrors() {
    if (this.state.errors[0] === "Please select a board.") {
      return this.state.errors;
    }
  }
  
  render() {
    const imageOutline = this.imageErrors() ? 'image-error-outline' : '';
    const imagePreview = this.state.imageUrl ? <img src={this.state.imageUrl} alt='pin image preview'/> : null;
    const imagePreviewClass = this.state.imageUrl ? 'show' : '';

    if (!this.props.user) return <div></div>

    const { user } = this.props
    const boardTitles = user.boards.map((board, idx) => {
      return <div className="show-pin-select-board-title" onClick={this.handleSelect} key={Object.values(board)[0].id}>{Object.values(board)[0].title}</div>;
    })
    return (
      <div className='create-pin-container'>
        <div className='create-pin-form-box'>

          <header className="create-pin-header">
            <div className="show-pin-board-dropdown">
              <button className='show-pin-select'>Select</button>
              <i className="fas fa-chevron-down select-arrow"></i>
              <div className='show-pin-select-content'>
                {boardTitles}
              </div>
              <div className='board-error'>{this.boardErrors()}</div>
            </div>
              <button className="create-pin-save" onClick={this.handleSubmit}>Save</button>
          </header>

          <form className='create-pin-form'>

            <div className="create-pin-form-image-container">
              <input type="file" onChange={this.handleFile} className='create-pin-form-input'/>
              <div className={`create-pin-form-image-preview ${imagePreviewClass}`}>{imagePreview}</div>
              <div className={`${imageOutline}`}></div>
              <i className="fas fa-arrow-circle-up"></i>
              <div className="click-upload">Click to upload</div>
              <span onClick={this.removeImagePreview} className={`trash trash-${imagePreviewClass}`}><i className='fas fa-trash'></i></span>
              <div id='image-error'>{this.imageErrors()}</div>
            </div>

            <div className='create-pin-form-text-container'>
              <textarea className="create-pin-form-title" type="text" value={this.state.title} placeholder="Add your title" onChange={this.update('title')}/>
              <div className='title-error'>{this.titleErrors()}</div>
              <textarea className="create-pin-form-description" type="text" value={this.state.description} placeholder="Tell everyone what your Pin is about" onChange={this.update('description')}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ConBuilder;