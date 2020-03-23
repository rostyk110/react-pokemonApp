import React from 'react';
import Features from './Features/Features';
import { useDispatch } from 'react-redux';
import { getCardId } from '../../store/actions/card';

const Card = props => {
  const dispatch = useDispatch();

  return (
    <div className='card' onClick={() => dispatch(getCardId(props.id))}>
      <img
        className='image'
        src={props.card.sprites.front_default}
        alt={props.card.forms[0].name}
      />

      <p className='title'>
        <b>{props.card.forms[0].name}</b>
      </p>
      <Features types={props.card.types} />
    </div>
  );
};

export default Card;
