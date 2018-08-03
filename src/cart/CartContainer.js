import React, {Component} from 'react';
import styled from 'styled-components';

class CartContainer extends Component {
  render() {
    return(
      <Wrapper>
        <div className='left'></div>
        <div className-='center'>
          <div className='item-desc'>
            lkalaknsflaksnflaknf
          </div>
          <div className='price'>
            22.43
          </div>
        </div>
        <div className='right'></div>
      </Wrapper>
    );
  }
}

export default CartContainer;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  margin-top: 300px;

  .center {
    display: flex;
    flex-direction: column;
  }
`;
