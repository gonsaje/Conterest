import React from 'react';
import ConItemContainer from '../cons/con_item_container';


class BoardShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boardCons: null,
    }

  }

  componentDidMount(){
    this.props.fetchAllCons()
    this.props.fetchAllBoards()
    // this.props.fetchBoard(this.props.board.id)
    // .then( res => this.setState({boardCons: res}));
    // this.redirect_con = this.redirect_con.bind(this);
  }
  

  render(){

    const cons = Object.values(this.props.cons).map(con => {
      if (con.board_id === this.props.board.id)
      return (<ConItemContainer key={con.id} con={con} conId={con.id} /> )
    
    });

    return (
      <div className="board-show">
        <div>
        </div>
          <div className="con-index">
              <div className="con-image">
                  {cons}
              </div>
          </div>
      </div>
     
    )
  }
}

export default BoardShow;