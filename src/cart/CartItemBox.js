import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItem } from '../cart/actions';

class CartItemBox extends Component {
  deleteItem = (e) => {
    e.preventDefault();
    const item = this.props.item;
    console.log(item, 'submit');
    this.props.removeItem(item);
  };

  render() {
    return(
      <Container>
        <div className='top'>
          <div className='item-title'>{this.props.item.brand.name} Model Name and Size (M)</div>
          <button onClick={ (e) => {this.deleteItem(e)}}>
            <i class="material-icons">close</i>
          </button>
        </div>
        <div className='item-desc'>{this.props.item.desc}</div>
        <div className='price'>
          {this.props.item.price}.00
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  removeItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartItemBox);

const Container = styled.div`
  color: black;
  padding: 10px;
  border-bottom: 2px solid var(--gray);

  .top{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .item-title{
    font-weight: bold;
    margin-bottom: 15px;
  }
  .item-desc{
    padding-right: 20%;
  }
  .price{
    padding-top: 5px;
    width: 100%;
    justify-content: right;
    font-size: 16px;
    padding-left: 80%;
  }
  button{
    background: white;
    border: none;
    i{
      font-size: 15px;
    }
    :hover{
      cursor:pointer;
    }
  }

`;
