import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter, getCardId, setCurrentType } from '../../store/actions/card';

const Filter = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector(state => state.card.allTypes);
  const allCards = useSelector(state => state.card.reserveCards);

  const [isActive, setIsActive] = useState(0);

  return (
    <div className='filter container'>
      <ul className='filter-list'>
        {allTypes.map((type, idx) => {
          return (
            <li
              key={idx}
              className={
                isActive === idx ? 'filter-item active' : 'filter-item'
              }
              onClick={() => {
                setIsActive(idx);
                dispatch(setCurrentType(type));
                dispatch(getCardId(null));
                dispatch(filter(type, allCards));
              }}
            >
              {type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
