import { connect } from "react-redux";
import ConIndex from "./cons_index";
import { fetchAllCons } from "../../actions/cons_actions";
import { fetchAllBoards } from "../../util/board_api_util";

const mapStateToProps = state => {
  let cons = state.entities.cons;
  return { cons };
};

const mapDispatchToProps = dispatch => ({
  fetchAllCons: () => dispatch(fetchAllCons()),
  fetchAllBoards: () => dispatch(fetchAllBoards())
});

export default connect(mapStateToProps,mapDispatchToProps)(ConIndex);