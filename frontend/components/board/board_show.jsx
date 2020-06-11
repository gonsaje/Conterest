import React from 'react';
import ConIndexItemContainer from '../con/con_index_item_container';


class BoardShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false,
      boardCons: null,
    }
    this.showMenu = this.showMenu.bind(this);
    this.isEquivalent = this.isEquivalent.bind(this);
  }

  componentDidMount(){
    
    this.props.fetchBoard(this.props.match.params.id).then( res => this.setState({boardCons: res}));
    this.redirect_edit = this.redirect_edit.bind(this);
    this.redirect_pin = this.redirect_pin.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState){
    // debugger
    if (!this.isEquivalent(prevProps.pins, this.props.pins)) {
      // debugger
      this.props.fetchBoard(this.props.match.params.id).then(res => this.setState({ boardPins: res }));
    }
  }


  isEquivalent(a, b){
    // debugger
    var aProps = Object.getOwnPropertyNames(a);
    
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }
  
  showMenu(e) {
    e.persist();
    e.stopPropagation();
    if (e.target.className === 'profile-button' && this.state.showMenu) {
      return this.closeMenu(e);
    }
    this.setState({ showMenu: true })
  }

  closeMenu(e) {
    if (!e.relatedTarget || e.currentTarget.className === 'profile-button') {
      return this.setState({ showMenu: false });
    }
  }  

  redirect_edit() {
    this.props.history.push('/edit')
  }

  redirect_pin() {
    this.props.history.push('/pin-builder')
  }

  render(){
    // debugger
    // if (!this.props.board || !this.props.board.pins) {
    //   debugger
    //   return <div className="loader"></div>
    // }

    // debugger
    let boardPins;
      if (this.state.boardPins) {
         boardPins = Object.values(this.state.boardPins.pins).map(pin => {
          return <PinIndexItemContainer key={pin.id} pin={pin} pinId={pin.id} />
        });
      }
   
    // debugger
    return (
    <>
    <div className="profile-container">
      <div className="profile-buttons-container">
            <div className="sub-menu-container">
            <button className="profile-buttons" onClick={this.showMenu} onBlur={this.closeMenu} tabIndex="0"> 
              <img src={window.plusURL}></img>
            </button>
            {this.state.showMenu ? (
              
              <div className="sub-menu">
                <button className="sub-menu-buttons" onClick={this.redirect_pin}>Create Pin</button>
              </div>
            )
            : (null)
          }
          </div>
            <div>
              <button className="profile-buttons" onClick={() => this.props.openModal('editBoard', { id: this.props.board.id })}><img src={window.pencilURL} /></button>
          <button className="profile-buttons"><img src={window.uploadURL}></img></button>
          </div>
      </div>
    </div>
    <br/>
      
      
      
      {boardPins && <div className="board-info">
        <h2>{this.state.boardPins.board.name} </h2>
          <h5>{this.state.boardPins.board.description}</h5>
      </div>}

      <div className="pins">
        <div className="masonry">
            { boardPins }
        </div>
      </div>
    </>
    )
  }
}

export default BoardShow;