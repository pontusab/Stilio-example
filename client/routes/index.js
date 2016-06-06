import App from 'components/App';

const rootRoute = () => ({
  component: 'div',
  childRoutes: [{
    path: '/',
    component: App,
    indexRoute: require('routes/Product').listRoute,
    childRoutes: [
      require('routes/Product').publishRoute,
      require('routes/Product').editRoute,
    ],
  }],
});

export default rootRoute;
