import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards, getAllTypes } from '../../store/actions/card';
import { URL, ALL_TYPES_URL } from '../../utils/index';
import Card from '../card/Card';
import CardMin from '../card/CardMin';
import CardView from '../card-view/CardView';
import Spinner from '../layout/Spinner';

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards(URL));
    dispatch(getAllTypes(ALL_TYPES_URL));
  }, [dispatch]);

  const allCards = useSelector(state => state.card.allCards);
  const currentCardId = useSelector(state => state.card.cardViewId);
  const currentType = useSelector(type => type.card.currentType);
  const nextUrl = useSelector(state => state.card.nextUrl);

  const loading = useSelector(state => state.card.loading);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <div className='cards'>
        {allCards.map((card, idx) => {
          return (
            <Fragment key={idx}>
              <Card key={idx} card={card} id={idx} />
              <CardMin key={idx + 1} card={card} id={idx} />
            </Fragment>
          );
        })}
        <button
          className='btn-more'
          onClick={() => {
            dispatch(getCards(nextUrl, currentType));
          }}
        >
          Load more
        </button>
      </div>
      {currentCardId !== null ? (
        <CardView info={allCards[currentCardId]} />
      ) : null}
    </div>
  );
};

export default Cards;
