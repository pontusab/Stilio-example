import Joi from 'joi';

/**
 * Validate Product query
 * @property {string} limit - Limit min 1 max 100 default 10 products.
 * @property {string} skip - Skip min 0 default 0 products.
 * @returns {Object}
 */
export default Joi.object({
  limit: Joi.number().integer().min(1).max(100).default(10).description('limit amount of products'),
  skip: Joi.number().integer().min(0).default(0).description('skip products'),
});
