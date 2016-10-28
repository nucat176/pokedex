import {values} from 'lodash';

export const selectAllPokemon = ({pokemon}) => (
  values(pokemon)
);

export const selectPokemonItem = ( {pokemonDetail}, itemId) => {
  let selectedItem;
  pokemonDetail.items.forEach ( item => {
    if(item.id === parseInt(itemId)) {
      selectedItem = item;
    }
  });
  return selectedItem;
};
