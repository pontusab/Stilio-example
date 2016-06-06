import { list, get, add, update, remove } from './handlers/products';
import { upload, serve } from './handlers/image';
import { payload, query, params } from './schemas';

export default [
  {
    method: 'GET',
    path: '/products',
    handler: list,
    config: {
      validate: { query },
      description: 'Get products',
      notes: 'Returns a list of products',
      tags: ['api'],
    },
  }, {
    method: 'GET',
    path: '/products/{id}',
    handler: get,
    config: {
      validate: { params },
      description: 'Get product',
      notes: 'Returns a product by the id passed in the path',
      tags: ['api'],
    },
  }, {
    method: 'POST',
    path: '/products',
    handler: add,
    config: {
      validate: { payload },
      description: 'Add product',
      notes: 'Add a new product',
      tags: ['api'],
    },
  }, {
    method: 'PUT',
    path: '/products/{id}',
    handler: update,
    config: {
      validate: { payload, params },
      description: 'Edit product',
      notes: 'Edit a product by the id passed in the path',
      tags: ['api'],
    },
  }, {
    method: 'DELETE',
    path: '/products/{id}',
    handler: remove,
    config: {
      validate: { params },
      description: 'Remove product',
      notes: 'Remove a product by the id passed in the path',
      tags: ['api'],
    },
  }, {
    method: 'POST',
    path: '/upload',
    handler: upload,
    config: {
      description: 'Upload image',
      notes: 'Upload image by binary file',
      payload: {
        output: 'stream',
      },
      tags: ['api'],
    },
  }, {
    method: 'GET',
    path: '/image/{id}',
    handler: serve,
    config: {
      description: 'Get image',
      notes: 'Returns a image by the id passed in the path',
      tags: ['api'],
    },
  },
];
