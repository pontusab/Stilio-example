import { List, Publish } from './containers';

export const listRoute = {
  component: List,
};

export const publishRoute = {
  path: '/publish',
  component: Publish,
};

export const editRoute = {
  path: '/edit/:id',
  component: Publish,
};
