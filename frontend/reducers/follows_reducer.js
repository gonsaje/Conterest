import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { merge } from 'lodash';

const followsReducers = (state = {}, action) => {
   Object.freeze(state);
   let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FOLLOWS:
            // debugger
            return action.follows;
        case RECEIVE_FOLLOW:
            return Object.assign({}, state, {[action.follow.id]: action.follow})
        case REMOVE_FOLLOW:
            return merge({}, state, action.followId);
        default:
            return state;
    }
}

export default followsReducers;