import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../img/blueShirtModel.jpg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../cart/actions';


class ShirtDisplay extends Component {

  submitItem = (e) => {
    e.preventDefault();
    const item = this.props.shirt;
    console.log(item, 'submit');
    this.props.addItem(item);
  };

  render() {
    const { shirt, user, match, image, toggle } = this.props;
    return(
      <DisContainer>
        <div className='left'>
          <img src={image} alt="blue shirt"/>
        </div>
        <div className='right'>
          <div className='bottom'>
            <div className='stats'>
              <p>{match}% MATCH</p>
              <p>${shirt.price}</p>
              <p>{shirt.brand.name}</p>
            </div>
            <p>{shirt.desc}</p>
            <button onClick={ (e) => {
              this.submitItem(e);
              toggle();
            }}>
              <i class="material-icons">add_circle</i>
            </button>
          </div>
        </div>
      </DisContainer>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShirtDisplay);

// export default ShirtDisplay;

const DisContainer = styled.div`
  display: flex;

  .left {
    max-height: 100%;
    width: auto;

    img {
      max-height: 570px;
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
      button {
        padding: 10px;
        margin-left: 100%;
        background-color: :white;
        border:none;
        color:green;
        i{
        }
        :hover{
          cursor:pointer;
        }
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
