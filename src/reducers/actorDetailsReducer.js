import {REQUEST_ACTOR_DETAILS, RECEIVE_ACTOR_DETAILS, REMOVE_ACTOR_DETAILS} from '../actions/index.js';

const initialState = {
  isLoadingActorDetails: false,
  details: []
};


function actorDetails(state = initialState, action) {
  switch (action.type) {
  case REQUEST_ACTOR_DETAILS:
    return Object.assign({}, state, {
      isLoadingActorDetails: true
    });
  case RECEIVE_ACTOR_DETAILS:
    const _details = action.details
    return Object.assign({}, state, {
      isLoadingActorDetails: false,
      details: _details
    });
  case REMOVE_ACTOR_DETAILS:
    return Object.assign({}, state, initialState);
  default:
    return state;
  }
}

export default actorDetails;
