import Joi from 'joi';

/**
 * Validate Product payload
 * @property {string} name - Name is required.
 * @property {Number} price - Price is required and min 1.
 * @property {String} image_uuid - image_uuid is optional.
 * @returns {Object}
 */
export default Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(1).required(),
  image_uuid: Joi.string(),
});
