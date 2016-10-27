import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon, children}) => (
  <div>
    <ul className='poke-list'>
      {pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} poke={poke}/>
      ))}
    </ul>
    {children}
</div>
);

export default PokemonIndex;
