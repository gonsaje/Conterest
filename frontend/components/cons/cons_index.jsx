import React from 'react';
import ConItemContainer from './con_item_container';

class ConIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCons();
  }
  render() {
    if (!this.props.cons) {
      return null;
    }
    const cons = Object.values(this.props.cons).map(con => {
      return <ConItemContainer key={con.id} con={con} conId={con.id} />
    });
    return (
    
      <div className="con-index">
        <div className="con-image">
          {cons}
        </div>
      </div>
    )
  }
}

export default ConIndex;


