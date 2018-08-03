export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (item) => {
  console.log(item, 'in action')
  return {
    type: 'ADD_ITEM',
    data: item,
  }
}

export const removeItem = (item) => {
  console.log(item, 'in action')
  return {
    type: 'REMOVE_ITEM',
    data: item,
  }
}
