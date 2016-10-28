import React from 'react';
import { withRouter } from 'react-router';

const PokemonDetail = ({poke, children, router}) => {
  const handleClick = url => e => router.push(url);
  const classNames = `show ${poke.poke_type}`;
  return (
    <div className={classNames}>
      <div className='background-overlay'>
        <h2 className='exit' onClick={handleClick(`/`)}>X</h2>
        <section className='not-items'>
          <img className='poke-image' src={poke.image_url} />
          <div className='attribute'>
            <h1 className='poke-name'>{poke.name}</h1>
            <div className='stats'>
              <div className='non-moves'>
                <li>Type: {poke.poke_type}</li>
                <li>Attack: {poke.attack}</li>
                <li>Defense: {poke.defense}</li>
              </div>
              <div className='moves'>
                <ul>Moves: {poke.moves.map( (move, ind) => (<li key={ind}>{move}</li>))}</ul>
              </div>
            </div>
          </div>
        </section>
        <section className='items'>
          <h2 className='item-label'>Items</h2>
          <div className='items-and-detail'>
            <div className='item-list'>
              {poke.items.map ( (item) => (
                <li key={item.id}
                onClick={handleClick(`pokemon/${poke.id}/item/${item.id}`)}
                 className='item'>
                   <img src={item.image_url}/>
                 </li>))}
            </div>
            {children}
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(PokemonDetail);
