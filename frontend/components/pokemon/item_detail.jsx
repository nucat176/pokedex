import React from 'react';

const itemDetail = ({item = {}}) => {
  return(
  <div className='item-detail'>
    <h3 className='item-name'>{item.name}</h3>
    <section className='item-attr' >
      <li>Price: {item.price}</li>
      <li>Happiness: {item.happiness}</li>
    </section>
  </div>
);
};

export default itemDetail;
