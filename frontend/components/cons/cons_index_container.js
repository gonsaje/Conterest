import { connect } from "react-redux";
import ConIndex from "./cons_index";
import { fetchAllCons } from "../../actions/cons_actions";

const mapStateToProps = state => {
  let cons = state.entities.cons;
  return { cons };
};

const mapDispatchToProps = dispatch => ({
  fetchAllCons: () => dispatch(fetchAllCons())
});

export default connect(mapStateToProps,mapDispatchToProps)(ConIndex);