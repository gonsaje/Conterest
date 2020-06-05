import { connect } from 'react-redux';
import ConShow from './con_show';
import { fetchCon} from '../../actions/cons_actions';
import { withRouter } from "react-router-dom";


const msp = (state, ownProps) => {
  const con = state.entities.cons[ownProps.match.params.id];
  return {con};
}

const mdp = dispatch => ({
  fetchCon: id => dispatch(fetchCon(id)),

})

export default (connect(msp, mdp)(ConShow));