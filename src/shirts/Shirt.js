// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Modal from './Modal';
//
// import defaultImage from './img/blueShirtModel.jpg';
//
// class Shirt extends Component {
//   state={ hover:false,
//           showModal: false}
//
//   mouseOver = () => {
//     this.setState({ hover:true })
//   }
//   mouseOut = () => {
//     this.setState({ hover:false })
//   }
//
//   render() {
//     return(
//           <div onMouseOver={this.mouseOver}
//                onMouseOut={this.mouseOut}
//                style={{opacity: this.state.hover ? .9 : 1, cursor: 'pointer', userSelect: 'none' }}
//                onClick={this.props.onClick}>
//             <Tile src={defaultImage} alt='Man in Blue Dress Shirt' onClick={() => this.setState({showModal:true})}/>
//             { this.state.showModal && <Modal onClose={() => this.setState({showModal:false})} shirt={this.props.shirt}>modal</Modal> }
//           </div>
//     );
//   }
// }
//
//
// export default Shirt;
//
//
// Shirt.propTypes = {
//   shirt: PropTypes.shape({
//     neck: PropTypes.number.isRequired,
//     sleeve_l: PropTypes.number.isRequired,
//     sleeve_w: PropTypes.number.isRequired,
//     shoulder: PropTypes.number.isRequired,
//     chest: PropTypes.number.isRequired,
//     midsection: PropTypes.number.isRequired,
//     cuff: PropTypes.number.isRequired,
//     length: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//     brand: PropTypes.string.isRequired,
//     desc: PropTypes.string,
//   }).isRequired,
// }
//
// Shirt.defaultProps = {
//   desc: "shirt description"
// }
//
//
// export const Tile = styled.img`
//   width: 240px;
//   box-shadow: 0 0 35px black;
//   margin:.5rem;
// `;
