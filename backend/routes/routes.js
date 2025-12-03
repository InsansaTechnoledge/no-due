import customerRoutes from './customer.routes.js';

const routes = (app) => {
  app.use('/api/v1/customers', customerRoutes);
}

export default routes;