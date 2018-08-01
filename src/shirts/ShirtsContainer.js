import React, { Component } from 'react';
import Shirt from './Shirt';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShirts, getBrands } from './actions';
import { getUser } from '../users/actions';
import ShirtTile from './ShirtTile';
import SearchFilter from './SearchFilter';
//on mount grabs full shirt list and user
//has filterSearch action that resets shirtlist

class ShirtsContainer extends Component {
  componentDidMount() {
    this.props.getShirts();
    this.props.getBrands();
    this.props.getUser(1);
  }

  render() {
    const { isLoaded, shirts, brands, filter, filteredList, user } = this.props;
    if (!isLoaded) return <h1>loading...</h1>;
    return (
        <Wrapper>
          <div></div>
          <SearchFilter />
          <div></div>
          <ShirtGrid>
            {
              (!filter) ?
              shirts.map(shirt => <ShirtTile key={shirt.id} user={user} shirt={shirt}/>) :
              filteredList.map(shirt => <ShirtTile key={shirt.id} user={user} shirt={shirt}/>)
            }
          </ShirtGrid>
        </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  shirts: state.shirts.shirts,
  isLoaded: state.shirts.shirtsLoaded,
  brands: state.shirts.brands,
  filter: state.shirts.filter,
  filteredList: state.shirts.filteredList,
  user: state.users.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getShirts, getBrands, getUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShirtsContainer);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 7% 20% 3% 60% 10%;
  margin-top: 200px;
`;

const ShirtGrid = styled.div`
  margin-top: 50px;
  display:grid;
  grid-template-columns: 33% 33% 33%;
  grid-row-gap: 10px;
  
`;
