import Boom from 'boom';
import { ProductModel } from '../models';

const DEFAULT_LIMIT = 10;
const DEFAULT_SKIP = 0;

/**
 * Get Product
 * @property {string} req.params.id - Id of the product to be returned.
 * @returns {Products}
 */
export async function get(req, reply) {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    reply(product);
  } catch (err) {
    reply(Boom.notFound(`Could not find product by id: ${id}`, err));
  }
}

/**
 * List Products
 * @property {string} req.query.limit - Limit number of products to be returned.
 * @property {string} req.query.skip - Number of products to be skipped.
 * @returns {Products}
 */
export async function list(req, reply) {
  const { limit: limit = DEFAULT_LIMIT, skip: skip = DEFAULT_SKIP } = req.query;
  try {
    const products = await ProductModel.find()
      .limit(parseInt(limit, 10))
      .skip(parseInt(skip, 10))
      .sort({ updated: 'desc' });

    reply(products);
  } catch (err) {
    reply(Boom.badRequest('Error while fetching products', err));
  }
}

/**
 * Create new Product
 * @property {string} req.payload.name - The name of the product.
 * @property {string} req.payload.price - The price of the product.
 * @returns {Product}
 */
export async function add(req, reply) {
  try {
    const product = new ProductModel({ ...req.payload });
    const savedProduct = await product.saveAsync();
    reply(savedProduct);
  } catch (err) {
    reply(Boom.badRequest('Error while saving product', err));
  }
}

/**
 * Update existing product
 * @property {string} req.params.id - The id of a product.
 * @returns {Product}
 */
export async function update(req, reply) {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndUpdate(id, { ...req.payload }, { new: true });
    reply(product);
  } catch (err) {
    reply(Boom.notFound(`Could not find product by id: ${id}`, err));
  }
}

/**
 * Delete product
 * @returns {Product}
 */
export async function remove(req, reply) {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    product.remove();

    reply(product);
  } catch (err) {
    reply(Boom.notFound(`Could not find product by id: ${id}`, err));
  }
}
