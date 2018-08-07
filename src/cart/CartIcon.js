import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CartIcon extends Component {
  render() {
    return(
      <Link to='/shopping-cart'>
      <Cart>
        <i class="material-icons">shopping_cart</i>
        {
          this.props.cartList.length === 0 ?
          'empty' :
          this.props.cartList.length
        }
      </Cart>
    </Link>
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
  color: white;
  position: fixed;
  top: 25px;
  right: 60px;
  z-index: 3;
  padding: 10px;
  font-size: 13px;
  display: flex;
  align-items: flex-end;

  i {
    font-size: 20px;
    padding-right: 10px;
  }
`;
