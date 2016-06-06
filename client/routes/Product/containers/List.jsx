import React from 'react';
import { connect } from 'react-redux';
import { loadProducts } from 'modules/products/actions';
import { Link } from 'react-router';
import { ProductRow, ProductHeader, NoProducts, Loader } from './../components';
import add from 'assets/icons/add.svg';

class List extends React.Component {
  static propTypes = {
    loadProducts: React.PropTypes.func,
    products: React.PropTypes.object,
  };

  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const { isFetching, items } = this.props.products;
    if (isFetching) return <Loader />;

    return (
      <div className="list">
        <div className="list-header">
          <h4>Product library</h4>

          <Link to="/publish" className="list-add">
            <img src={add} className="list-add-icon" alt="Add button" />
            Add product
          </Link>
        </div>

        <div className="list-container">
          <ProductHeader />

          {items.length ?
            <ul>
              {items.map((product) => <ProductRow
                key={product._id}
                product={product}
              />)}
            </ul>
          : <NoProducts />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: () => dispatch(loadProducts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
