import React from 'react';
import { CardViewTable } from './CardViewTable';

const CardView = ({ info }) => {
  const imgUrl = info.sprites.front_default;

  return (
    <div className='card-view'>
      <img className='image' src={imgUrl} alt={info.forms[0].name} />
      <CardViewTable info={info} />
    </div>
  );
};

export default CardView;
