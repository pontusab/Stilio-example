import hapi from 'hapi';
import Promise from 'bluebird';
import inert from 'inert';
import vision from 'vision';
import swagger from 'hapi-swagger';
import mongoose from 'mongoose';
import routes from './routes';

const { PORT_API, MONGODB_URL } = process.env;

const server = new hapi.Server();

server.connection({
  port: PORT_API,
  routes: { cors: true },
});

server.route(routes);

// promisify mongoose
Promise.promisifyAll(mongoose);

mongoose.connect(MONGODB_URL);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${MONGODB_URL}`);
});

// Generate API documentation based on hapi routes
const options = {
  info: {
    title: 'iZettle Product API Documentation',
    version: '0.1',
  },
};

server.register([
  inert,
  vision, {
    register: swagger,
    options,
  }], () => {
  server.start(() => console.log(`Server running at ${server.info.uri}`));
});
