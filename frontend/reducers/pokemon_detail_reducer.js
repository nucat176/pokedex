import {REQUEST_POKEMON, RECEIVE_POKEMON} from '../actions/pokemon_actions';

const PokemonDetailReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POKEMON:
      return action.poke;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
