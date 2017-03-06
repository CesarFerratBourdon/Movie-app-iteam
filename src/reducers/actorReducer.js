import {REQUEST_ACTORS, RECEIVE_ACTORS} from '../actions/index.js';

const initialState = {
  isLoadingActors: false,
  actors:[]
};

function actors(state = initialState, action) {
  switch (action.type) {
  case REQUEST_ACTORS:
    return Object.assign({}, state, {
      isLoadingActors: true
    });
  case RECEIVE_ACTORS:
    const _actors = action.actors.slice(0,9).map(actor => {
      return {profile_path: actor.profile_path, id: actor.id};
    });

    return Object.assign({}, state, {
      isLoadingActors: false,
      actors: _actors
    });
  default:
    return state;
  }
}

export default actors;
