import Boom from 'boom';
import fs from 'fs';
import uuid from 'uuid';

const UPLOAD_DIR = 'uploads';

/**
 * Upload image
 * @property {object} req.payload.image - binary.
 * @returns {image_uuid}
 * Note: If real app , I would have chosen AWS or Google Cloud Storage
 */
export function upload(req, reply) {
  const { image } = req.payload;

  if (!image) reply(Boom.badData('Your data is bad and you should feel bad'));
  const image_uuid = uuid.v4();
  const file = fs.createWriteStream(`./${UPLOAD_DIR}/${image_uuid}.jpg`);

  image.pipe(file);
  image.on('end', (err) => {
    if (err) reply(Boom.badRequest('Could not upload image', err));
    reply({ image_uuid });
  });
}

/**
 * Serve image
 * @property {string} req.params.id - Id of the image to be returned.
 * @returns {image_uuid}
 */
export function serve(req, reply) {
  const { id } = req.params;
  const filePath = `./${UPLOAD_DIR}/${id}.jpg`;

  fs.access(filePath, (err) => {
    if (err) reply(Boom.badRequest('Image not found', err));
    reply.file(filePath);
  });
}
