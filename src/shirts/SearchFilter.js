import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShirts } from './actions';
import { addBrandFilter, removeBrandFilter, changeMaxPrice, resetFilter } from './actions';

class SearchFilter extends Component {

  handleBrandFilter(e) {
    let brandId = e.target.value
    if (e.target.checked) {
      this.props.addBrandFilter(brandId);
    } else {
      this.props.removeBrandFilter(brandId);
    }
  }

  state = {
    value: 100,
  }
  handlePriceFilter = (e) => {
    this.setState({value: e.target.value});
    this.props.changeMaxPrice(e.target.value);
  }

  render() {
    return(
      <Wrapper>
        <h3>SEARCH FILTERS</h3>
        <form>
          <h4>BRANDS</h4>
          <div className='field brands'>
            {this.props.brands.map(brand =>
              <div key={brand.id}>
                <input type="checkbox" value={brand.id} onClick={(e) => this.handleBrandFilter(e)} />
                <label>{brand.name}</label>
              </div>
            )}
          </div>
          <div className='field'>
            <h4>Max ${this.state.value}</h4>
            <input type="range" min="20" max="100" step="5"
              value={this.state.value}
              onChange={this.handlePriceFilter}
            />
            {/* <output for="price" onforminput="value = price.valueAsNumber;"></output> */}
          </div>
          <button className='btn' onClick={this.props.resetFilter}><p>RESET</p></button>
        </form>
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getShirts,
  addBrandFilter,
  removeBrandFilter,
  changeMaxPrice,
  resetFilter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);


const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  font-family: 'karla';
  max-height: 500px;
  border: 1px solid var(--gray);
  position: sticky;
  top: 140px
  h3 {
    font-size: 15px;
    font-weight: 800;
    padding: 15px 20px;
    letter-spacing: 1px;
    color: white;
    background-color: var(--lightBlack);
    position: relative;
    margin-top: 0;
    display: flex;
    justify-content: flex-start;
  }

  form {
    padding-left: 15px;

    h4{
      position: relative;
      margin-top: 0;
      display: flex;
      justify-content: flex-start;
      font-size: 13px;
    }
    }
    button {
      margin-top: 30px;
      width: 120px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-content: center;
      background: linear-gradient(#4d89f0, blue);
      border-radius: 4px;
      p {
        font-size: 12px;
        color: white;
        letter-spacing: 1px;
        font-weight: 500;
      }
      :hover{
        cursor: pointer;
        border:black;
        box-shadow: 1px 1px 1px black;
      }
    }
  }
  .field {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 10px;
    font-weight: bold;
  }



  .brands {
    align-items: flex-start;
    font-size: 12px;

    div {
      margin-bottom: 10px;
    }
  }

`;
