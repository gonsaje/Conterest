import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.filterBoards = this.filterBoards.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllBoards();
    this.props.fetchAllCons();
  }

  filterBoards() {

    let userId = this.props.currentUser.id;
    debugger
    let boards = Object.values(this.props.boards);
    debugger
    return boards.filter(board => board.user_id === userId); 

  }


  render(){
    
    if (!this.props.boards) {
      return null;
    }
    let userBoards = this.filterBoards();
    const boardIndexItems = userBoards.map(board => {
      return <BoardIndexItem key={board.id} board={ board } boardId={board.id}/>
    });

    return (
      <div className="boards-index">
       
        <div className="sub-nav">
          <button className="board-button">Boards</button>
        </div>

        <div className="boards-container">
          <ul className = "board-tab">
            { boardIndexItems }
          </ul>
        </div>
      </div>
    )
  }
}

export default BoardIndex;