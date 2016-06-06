import React from 'react';
import { Link } from 'react-router';
import Image from 'components/layout/Image';
import edit from 'assets/icons/edit.svg';

const ProductRow = ({ product }) => (
  <li className="list-item row" key={product._id}>
    <div className="col-sm-2">
      <Image src={product.image_uuid} alt={product.name} className="list-image" />
    </div>
    <div className="col-sm-4">
      {product.name}
    </div>

    <div className="col-sm-4">
      €{product.price}
    </div>

    <div className="col-sm-2">
      <Link to={`/edit/${product._id}`} className="list-edit">
        <img src={edit} alt="edit" />
      </Link>
    </div>
  </li>
);

ProductRow.propTypes = {
  product: React.PropTypes.object,
};

export default ProductRow;
