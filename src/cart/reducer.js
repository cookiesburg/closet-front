import {
  ADD_ITEM,
  REMOVE_ITEM,
} from './actions';

const initialState = {
  isEmpty: true,
  cartList: [],
};

export default function (state = initialState, action) {
  const type = action.type;
  const data = action.data;
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        isEmpty: false,
        cartList: [data, ...state.cartList],
      };
    case REMOVE_ITEM:
        const items = state.cartList.filter(e => e.id !== data.id);
        return {
          ...state,
          cartList: items,
        };

    default:
      return state;
  }
}
