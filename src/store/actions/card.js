import {
  GET_CARDS,
  GET_CARD_ID,
  GET_ALL_TYPES,
  FILTER,
  GET_CURRENT_TYPE
} from '../types';
import axios from 'axios';

// Get cards
export const getCards = (url, type = 'all') => async dispatch => {
  try {
    axios.get(url).then(res => {
      const allCards = [];
      const nextUrl = res.data.next;

      res.data.results.forEach(item => {
        allCards.push(axios.get(item.url));
      });

      Promise.all(allCards).then(res => {
        const filtered = filterFunction(
          res.map(d => d.data),
          type
        );

        return dispatch({
          type: GET_CARDS,
          payload: { res: filtered, nextUrl }
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
};

// Get current card's id
export const getCardId = id => async dispatch => {
  return dispatch({
    type: GET_CARD_ID,
    payload: id
  });
};

// Get all types
export const getAllTypes = url => async dispatch => {
  try {
    axios.get(url).then(res => {
      const allTypes = [];

      res.data.results.forEach((i, idx) => {
        allTypes[idx] = i.name;
      });

      return dispatch({
        type: GET_ALL_TYPES,
        payload: allTypes
      });
    });
  } catch (err) {
    console.log(err);
  }
};

// Filter
export const filter = (type = 'all', allCards) => async dispatch => {
  const filtered = filterFunction(allCards, type);

  return dispatch({
    type: FILTER,
    payload: filtered
  });
};

// Set current type
export const setCurrentType = type => async dispatch => {
  return dispatch({
    type: GET_CURRENT_TYPE,
    payload: type
  });
};

const filterFunction = (data, type) => {
  if (data.length) {
    const filtered = data.filter(i => {
      if (type === 'all') {
        return true;
      }

      let includes = false;
      i.types.forEach(t => {
        if (t.type.name === type) {
          includes = true;
          return true;
        }
        return false;
      });
      return includes;
    });
    return filtered;
  }

  return [];
};
