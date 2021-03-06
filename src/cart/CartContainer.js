import React, {Component} from 'react';
import styled from 'styled-components';
import CartItemBox from './CartItemBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class CartContainer extends Component {
  render() {
    return(
      <Wrapper>
        <div className='left'>
          <Link to='/'>
            <button>
              <i class="material-icons">arrow_back_ios</i> Search
            </button>
          </Link>
        </div>
        <div className='center'>

        {
          this.props.isEmpty ?
          'Your shopping cart is empty - go back and by stuff!' :
            <div className='not-empty'>
              {this.props.cartList.map(item => <CartItemBox key={item.id} item={item} />)}
              <button className='checkoutBtn'>
                <i class="material-icons">payment</i>
              </button>
            </div>

        }


        </div>
        <div className='right'></div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  isEmpty: state.cart.isEmpty,
  cartList: state.cart.cartList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

// export default CartContainer;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  margin-top: 300px;

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .not-empty{
      .checkoutBtn{
        padding: 10px;
        margin-left: 90%;
        background:white;
        border:none;
        i{
          margin-top: 30px;
          color:green;
        }
        :hover{
          cursor:pointer;
        }
      }
    }
  }
  .left{
    display: flex;
    justify-content: center;
    button{
      background: white;
      border: none;
      font-size: 15px;
      display: flex;
      align-items: center;

      :hover{
        cursor:pointer;
      }
    }
  }

  i {
    font-size: 40px;
  }
`;
