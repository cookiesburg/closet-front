export const GET_SHIRTS = 'GET_SHIRTS';
export const GET_BRANDS = 'GET_BRANDS';
export const GET_SHIRT = 'GET_SHIRT';
export const ADD_BRAND_FILTER = 'ADD_BRAND_FILTER';
export const REMOVE_BRAND_FILTER = 'REMOVE_BRAND_FILTER';
export const CHANGE_PRICE_FILTER = 'CHANGE_PRICE_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export function getShirts() {
  return async function (dispatch) {
    const res = await fetch('https://closet-api.herokuapp.com/api/v1/shirts');
    const shirts = await res.json();
    return dispatch({
      type: 'GET_SHIRTS',
      data: shirts,
    });
  };
}
export function getBrands() {
  return async function (dispatch) {
    const res = await fetch('https://closet-api.herokuapp.com/api/v1/brands');
    const brands = await res.json();
    return dispatch({
      type: 'GET_BRANDS',
      data: brands,
    });
  };
}

export function getShirt(id) {
  return async function (dispatch) {
    const res = await fetch('https://closet-api.herokuapp.com/api/v1/${id}');
    const shirt = await res.json();
    return dispatch({
      type: 'GET_SHIRT',
      data: shirt,
    });
  };
}

export const addBrandFilter = (brandId) => {
  console.log(brandId, 'in action')
  return {
    type: 'ADD_BRAND_FILTER',
    data: brandId,
  }
}

export const removeBrandFilter = (brandId) => {
  return {
    type: 'REMOVE_BRAND_FILTER',
    data: brandId,
  }
}

export const changeMaxPrice = (price) => {
  return {
    type: 'CHANGE_PRICE_FILTER',
    data: price,
  }
}
export const resetFilter = () => {
  console.log('reset');
  return {
    type: 'RESET_FILTER',
    data: '',
  }
}
