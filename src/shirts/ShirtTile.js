import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../img/blueShirtModel.jpg';
import Toggle from '../utilities/Toggle';
import Modal from '../utilities/Modal';
import ShirtDisplay from './ShirtDisplay';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { calcMatch } from './actions';

class ShirtTile extends Component {
  state = {
    match: null,
  }
  componentDidMount() {
      const { shirt, user, calcMatch } = this.props;

      const shirtArr = [ shirt.neck, shirt.l_sleeve, shirt.w_sleeve, shirt.slder, shirt.chest, shirt.mid, shirt.cuff, shirt.length];
      const userArr = [ user.neck, user.l_sleeve, user.w_sleeve, user.sldr, user.chest, user.mid, user.cuff, user.length];
      const diffs = userArr.map((e, i) => {
        return (Math.abs(e - shirtArr[i]))/e;
      });
      const combMatch = diffs.reduce((a,b) => a + b, 0);
      const match = Math.round( (1 - combMatch/8)*100);
      this.setState({match:match});
  }


  render() {
    const { shirt, user } = this.props;
    return(
      <Toggle>
        {({on, toggle}) => (
          <div>
            <Modal on={on} toggle={toggle}>
              <ShirtDisplay user={user} shirt={shirt} match={this.state.match} />
            </Modal>
            <TileContainer onClick={toggle}>
              <div className='image'>
                <img src={img} alt="blue shirt"/>
                {
                  this.state.match ?
                  <p className='match'>{this.state.match}%</p> :
                  <p className='match'>calculating...</p>
                }
              </div>
              <div className='desc'>${shirt.price}<span>{shirt.brand.name}</span></div>
            </TileContainer>
          </div>
        )}
      </Toggle>
    );
  }
}


// const mapStateToProps = state => ({
//   shirt: state.shirts.shirt,
//   match: state.shirts.userMatch,
//   isLoaded: state.shirts.calcLoaded,
// });
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   calcMatch,
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(ShirtTile);
export default ShirtTile;

const TileContainer = styled.div`
  width: 270px;
  height: 450px;
  display: flex;
  flex-direction: column;


  :hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px var(--lightGray);
    border: 1px solid #eeeef0;
  }

  .desc {
    padding-left: 10px;
    padding-top: 10px;
    color: black;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .image {
    position: relative;
    p {
      padding-top:3px
      padding-left:10px;
      position: absolute;
      font-size: 16px;
      color: white;
    }
    img {
      max-width: 100%;
      opacity: .9;
    }
  }
`;
