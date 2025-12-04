import customerRoutes from './customer.routes.js';
import userRoutes from "./auth.routes.js"

const routes = (app) => {
  app.use('/api/v1/customers', customerRoutes);
  app.use('/api/v1/auth', userRoutes);
}

export default routes;