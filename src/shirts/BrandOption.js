import React, { Component } from 'react';
import styled from 'styled-components';

class BrandOption extends Component {
  render() {
    return(
      <Container>
        {this.props.brand}
      </Container>
    );
  }
}

export default BrandOption;

const Container = styled.div`
  padding: 5px;
  margin: 3px;
  border: 1px solid green;
`;

// onclick check and refilter list to include only those that are checked
//
