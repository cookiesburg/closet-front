import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CartIcon extends Component {
  render() {
    return(
      <Cart>
        cart
      </Cart>
    );
  }
}

// const mapStateToProps = state => ({
//   shirts: state.shirts.shirts,
//   isLoaded: state.shirts.shirtsLoaded,
//   brands: state.shirts.brands,
//   filter: state.shirts.filter,
//   filteredList: state.shirts.filteredList,
// });
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   getShirts,
//   addBrandFilter,
//   removeBrandFilter,
//   changeMaxPrice,
//   resetFilter
// }, dispatch);
//
// export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

export default CartIcon;

const Cart = styled.div`
  border: 3px solid black;
  color: black;
  position: fixed;
  top: 70px;
  right: 60px;
  z-index: 3;
  padding: 10px;
`;
