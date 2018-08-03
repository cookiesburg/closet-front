import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CartIcon extends Component {
  render() {
    return(
      <Cart>
        { this.props.cartList.length }
      </Cart>
    );
  }
}

const mapStateToProps = state => ({
  isEmpty: state.cart.isEmpty,
  cartList: state.cart.cartList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// export default CartIcon;

const Cart = styled.div`
  border: 3px solid black;
  color: black;
  position: fixed;
  top: 70px;
  right: 60px;
  z-index: 3;
  padding: 10px;
`;
