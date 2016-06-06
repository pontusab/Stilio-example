import Joi from 'joi';

/**
 * Validate Product params
 * @property {String} id - id min 1.
 * @returns {Object}
 */
export default Joi.object({
  id: Joi.string().alphanum().min(1).description('id of the product'),
});
