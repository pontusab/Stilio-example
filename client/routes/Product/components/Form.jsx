import React from 'react';

export default class Form extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    initialProduct: React.PropTypes.shape({
      name: React.PropTypes.string,
      price: React.PropTypes.number,
      image_uuid: React.PropTypes.string,
    }),
    saveProduct: React.PropTypes.func.isRequired,
    deleteProduct: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { ...props.initialProduct };
  }

  onFormChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.saveProduct(this.state, this.props.params.id);
  }

  handleDelete(evt) {
    evt.preventDefault();
    if (confirm('Do you want to delete product?')) {
      this.props.deleteProduct(this.props.params.id);
    }
  }

  render() {
    const { name, price } = this.state;

    return (
      <form onSubmit={::this.handleSubmit}>
        <fieldset>
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Chocolate cupcake"
            defaultValue={name}
            onChange={(evt) => ::this.onFormChange('name', evt.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            min="1"
            step="any"
            placeholder="7,90"
            defaultValue={price}
            onChange={(evt) => ::this.onFormChange('price', evt.target.value)}
            required
          />
        </fieldset>

        <div className="add-edit-buttons">
          {this.props.params.id ?
            <button
              className="button red add-delete"
              type="button"
              onClick={::this.handleDelete}
            >
              Delete product
            </button>
          : null}

          <button
            className="button blue add-save"
            type="submit"
          >
            Update product
          </button>

        </div>
      </form>
    );
  }
}
