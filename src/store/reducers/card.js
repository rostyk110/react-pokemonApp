import {
  GET_CARDS,
  GET_CARD_ID,
  GET_ALL_TYPES,
  FILTER,
  GET_CURRENT_TYPE
} from '../types';

const initialState = {
  allCards: [],
  allTypes: ['all'],
  reserveCards: [],
  currentType: 'all',
  nextUrl: '',
  cardViewId: null,
  loading: true
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      const allCards = action.payload.res;

      return {
        ...state,
        allCards: [...state.allCards, ...allCards],
        reserveCards: [...state.reserveCards, ...allCards],
        nextUrl: action.payload.nextUrl,
        loading: false
      };

    case GET_CARD_ID:
      return {
        ...state,
        cardViewId: action.payload
      };

    case GET_ALL_TYPES:
      return {
        ...state,
        allTypes: [...state.allTypes, ...action.payload]
      };

    case FILTER:
      return {
        ...state,
        allCards: action.payload
      };

    case GET_CURRENT_TYPE:
      return {
        ...state,
        currentType: action.payload
      };

    default:
      return state;
  }
};
