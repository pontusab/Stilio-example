import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Loader, Form } from './../components';
import Image from 'components/layout/Image';
import { dataURItoBlob } from 'utils';
import {
  loadProduct,
  saveProduct,
  deleteProduct,
  uploadImage,
} from 'modules/products/actions';

class Publish extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    editProduct: React.PropTypes.object.isRequired,
    loadProduct: React.PropTypes.func.isRequired,
    uploadImage: React.PropTypes.func.isRequired,
    saveProduct: React.PropTypes.func.isRequired,
    deleteProduct: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { id } = this.props.params;
    if (id) this.props.loadProduct(id);
  }

  onImageChange(files) {
    const reader = new FileReader();
    reader.onload = ({ target }) => this.props.uploadImage(dataURItoBlob(target.result));
    reader.readAsDataURL(files[0]);
  }

  handleSave(product, id) {
    const { image_uuid } = this.props.editProduct;
    this.props.saveProduct({ ...product, ...{ image_uuid } }, id);
  }

  handleDelete(id) {
    this.props.deleteProduct(id);
  }

  render() {
    const { editProduct } = this.props;
    if (editProduct.isFetching) return <Loader />;

    return (
      <div className="add-container">
        <Dropzone
          className="image-drop-upload"
          onDrop={::this.onImageChange}
          multiple={false}
          accept="image/*"
          name="image"
        >
          {editProduct.image_uuid ?
            <Image src={editProduct.image_uuid} />
          :
            <div className="image-description">
              <span>Drag & Drop</span>
              <small>(jpg, png)</small>
            </div>
          }
        </Dropzone>

        <Form
          params={this.props.params}
          initialProduct={editProduct}
          deleteProduct={::this.handleDelete}
          saveProduct={::this.handleSave}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editProduct: state.editProduct,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProduct: (id) => dispatch(loadProduct(id)),
    saveProduct: (body, id) => dispatch(saveProduct(body, id)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    uploadImage: (blob) => dispatch(uploadImage(blob)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Publish);
