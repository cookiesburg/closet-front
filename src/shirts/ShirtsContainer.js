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
          <div>
          <h4>SEARCH RESULTS</h4>
          <ShirtGrid>
            {
              (!filter) ?
              shirts.map(shirt => <ShirtTile key={shirt.id} user={user} shirt={shirt}/>) :
              filteredList.map(shirt => <ShirtTile key={shirt.id} user={user} shirt={shirt}/>)
            }
          </ShirtGrid>
        </div>
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
  margin-top: 150px;

  h4 {
    font-size: 20px;
    letter-spacing: 3px;
    text-align: center;
  }
`;

const ShirtGrid = styled.div`
  margin-top: 50px;
  display:grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

`;
