import React from 'react';

const PokemonDetail = ({poke}) => (
  <div className='show'>
    <img src={poke.image_url} />
    <h1>{poke.name}</h1>
    <ul className='attribute'>
      <li>Type: {poke.poke_type}</li>
      <li>Attack: {poke.attack}</li>
      <li>Defense: {poke.defense}</li>
      <li>Moves: {poke.moves}</li>
    </ul>
  </div>
);

export default PokemonDetail;
