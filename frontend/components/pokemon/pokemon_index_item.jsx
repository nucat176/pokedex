import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({poke, router}) => {
  const handleClick = url => e => router.push(url);
  return (
    <li onClick={handleClick(`/pokemon/${poke.id}`)}>
      <h1>{poke.name}</h1>
      <img src={poke.image_url}/>
    </li>
  );
};

export default withRouter(PokemonIndexItem);
