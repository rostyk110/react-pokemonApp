import React, { useState, useEffect } from 'react';
import Features from './Features/Features';
import { useSelector } from 'react-redux';
import { CardViewTable } from '../card-view/CardViewTable';

const CardMin = props => {
  const [isClicked, setIsClicked] = useState(false);

  // Open current card
  const isCurrentCard =
    props.id === useSelector(state => state.card.cardViewId);

  useEffect(() => {
    if (isCurrentCard) {
      setIsClicked(isCurrentCard);
    }
  }, [isCurrentCard]);

  const allCards = useSelector(state => state.card.allCards);
  const info = allCards[props.id];

  const PoorCard = () => {
    return (
      <>
        <p className='title'>
          <b>{props.card.forms[0].name}</b>
        </p>
        <Features types={props.card.types} />
      </>
    );
  };

  return (
    <div
      className='card hidden'
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <img
        className='image'
        src={props.card.sprites.front_default}
        alt={info.forms[0].name}
      />

      {!isClicked ? (
        <PoorCard />
      ) : (
        <CardViewTable info={info} classes={'cardmin-table'} />
      )}
    </div>
  );
};

export default CardMin;
