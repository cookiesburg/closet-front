import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../img/blueShirtModel.jpg';


class ShirtDisplay extends Component {
  render() {
    const { shirt, user, match } = this.props;
    return(
      <DisContainer>
        <div className='left'>
          <img src={img} alt="blue shirt"/>
        </div>
        <div className='right'>
          <div className='bottom'>
            <div className='stats'>
              <p>{match}% MATCH</p>
              <p>${shirt.price}</p>
              <p>{shirt.brand.name}</p>
            </div>
            <p>{shirt.desc}</p>
          </div>
      </div>
      </DisContainer>
    );
  }
}

export default ShirtDisplay;

const DisContainer = styled.div`
  display: flex;

  .left {
    max-height: 100%;
    width: auto;

    img {
      max-height: auto;
      max-width: 430px;
    }
  }

  .right {
    height:100%;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding-left: 20px;

    .bottom {
      position: absolute;
      bottom: 5px;
      width: 300px;
      p {
        font-size: 16px;
        font-family: lato;
      }
      .stats {
        p {
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 2px;
        }
      }
    }
  }

`;
