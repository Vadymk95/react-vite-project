import { useRoutes } from 'react-router-dom';
import { routes } from './router';

export const AppRouter = () => {
  const appRoutes = useRoutes(routes);
  return <>{appRoutes}</>;
};
