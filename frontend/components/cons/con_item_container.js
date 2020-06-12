import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ConIndexItem from "../cons/con_item";


const mapStateToProps = (state, ownProps) => {
  const con = state.entities.cons[ownProps.match.params.id];
  
}
const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(null, mapDispatchToProps)(ConIndexItem));