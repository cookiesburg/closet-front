import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import defaultImage from './img/blueShirtModel.jpg';
import styled from 'styled-components';

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.element = document.createElement('div')
    this.modalRoot = document.getElementById('modal-root')
    this.modalRoot.appendChild(this.element)
  }
  componentDidMount() {
    document.addEventListener('keyup', this.keyup, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyup, false)
    this.modalRoot.removeChild(this.element)
  }
  keyup = e => {
    if (e.key === 'Escape') {
      this.props.onClose()
    }
  }

  clickedBackground = () => {
    this.props.onClose()
  }

  render() {
    return ReactDOM.createPortal( this._renderModal(), this.element )
  }
  _renderModal() {
    return (
      <div className='modal-background' onClick={this.clickedBackground}>
        <div className='modal-container' onClick={e => e.stopPropagation()}>
          <ShirtImg src={defaultImage} />
          <ShirtDet>
            <h1>{this.props.shirt.brand}</h1>
            <h2>{this.props.shirt.price}</h2>
            <p>{this.props.shirt.desc}</p>
            <Button>NEED IT</Button>
          </ShirtDet>
        </div>
      </div>
    );
  }
}

const ShirtImg = styled.img`
  width: 360px;
  box-shadow: 0 0 35px black;
  border-radius: 10px;
`;
const ShirtDet = styled.div`
  padding: 1.5rem;
  font-family: Lato;

  p {
     text-transform: uppercase;
     line-height: 1.8;
  }
`;
const Button = styled.button`
  font-size: 15px;
  border-radius: 5%;
  border: 3px solid white;
  background: #00000088;
  color:white;
  padding: .5rem;
  cursor: pointer;

  :hover {
    background: white;
    color:  #00000088;
  }
`;
