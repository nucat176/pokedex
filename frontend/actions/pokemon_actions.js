export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const REQUEST_POKEMON = 'REQUEST_POKEMON';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const RECEIVE_NEW_POKEMON = 'RECEIVE_NEW_POKEMON';

export const receiveAllPokemon = (pokemon) => (
  {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  }
);

export const requestAllPokemon = () => (
  {
    type: REQUEST_ALL_POKEMON
  }
);

export const receivePokemon = (poke) => (
  {
    type: RECEIVE_POKEMON,
    poke
  }
);

export const requestPokemon = (id) => (
  {
    type: REQUEST_POKEMON,
    id
  }
);

export const createPokemon = (pokeParams) => ({
  type: CREATE_POKEMON,
  pokeParams
});

export const receiveNewPokemon = (newPoke) => ({
  type: RECEIVE_NEW_POKEMON,
  newPoke
});
