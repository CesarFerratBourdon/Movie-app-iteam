import {REQUEST_ACTORS, RECEIVE_ACTORS} from '../actions/index.js';

const initialState = {
  isLoadingActors: false,
  actors: {}
};

const noPicture = (actor) => actor.profile_path !== null;

function actors(state = initialState, action) {
  switch (action.type) {
  case REQUEST_ACTORS:
    return Object.assign({}, state, {
      isLoadingActors: true
    });
  case RECEIVE_ACTORS:
    const _actors = action.actors.filter(noPicture).slice(0,12).map(actor => {
      return {profile_path: actor.profile_path, id: actor.id, name: actor.name};
    });
    let id = action.movieId.toString();
    let newCast = {}
    newCast[id] = _actors
    let casts = Object.assign({}, state.actors, newCast);

    return Object.assign({}, state, {
      isLoadingActors: false,
      actors: casts
    });
  default:
    return state;
  }
}

export default actors;
