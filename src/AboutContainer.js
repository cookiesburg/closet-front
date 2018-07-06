import React, { Component } from 'react';
import styled from 'styled-components';

class AboutContainer extends Component {
  render() {
    return(
      <Wrapper>
        <h1>coming soon...</h1>
      </Wrapper>
    );
  }
}

export default AboutContainer;

const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-left: 100px;

  h1 {
    display: flex;
    justify-content: flex-start;
  }
  p {
    font-size: 16px;
    display: block;
    justify-content: flex-start;
    line-height: 25px;
  }
`;
