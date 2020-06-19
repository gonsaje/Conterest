# Conterest

![conterestlogo](./app/assets/images/readmelogo.png)

## WELCOME TO CONTEREST
Conterest is an imaged-based site, based off Pinterest, where users can upload and share high-contrast images with other people who enjoy a similar vibe.

[Live Link](https://conterest.herokuapp.com)

## Technologies
- Ruby on Rails
- React
- Javascript
- Redux
- PostgresQL
- AWS (S3)
- HTML
- CSS

## Cons

Cons require an author_id, board_id, and title. A con can be saved to a board. 

```JavaScript
class ConIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.con.title,
      id: this.props.con.id,
      selected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const con = this.props.con;
    this.setState.selected = true;
  }

  render() {
    const photo = this.props.con.photo_url ? <img src={this.props.con.photo_url} /> : "No photo";


    return (
      <Link to={`/cons/${this.state.id}`} >
        <div className="con-photo">
          <div className="overlay">{photo}</div>
          

        </div>
      </Link>
    )
  }
}
```

## Boards

Boards are a collection of Cons. Images are saved to a board via the board's id. A user can access their boards easily by navigating to their profile page, which will display an index of all boards directly linked to the current user.

```JavaScript
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
```
![](./app/assets/images/profile.gif)
## Follows

The Follows feature is created by a joins table linking two unique users by the follower's id and followed user's id. A follow is a one-way street. If two users were to follow each other, that would instantiated two instances of the follow feature. 

```Ruby
class Follow < ApplicationRecord
    
    belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

    belongs_to :followed_user, 
    foreign_key: :followed_user_id, 
    class_name: :User
    
end
```
By selecting the following feed button, a user has quick access to the content created by the users they follow.

![](./app/assets/images/following-feed.gif)

## Future Implmentations
* Re-Pins (Save to multiple boards)
* Topics (Similar to hashtags)





