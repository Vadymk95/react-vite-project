import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { useAuth } from '../hooks';
import { protectedRoutes, publishRoutes } from './routes';

export const AppRouter: FC = () => {
  const { isAuth } = useAuth();
  const routes = isAuth ? protectedRoutes : publishRoutes;
  const appRoutes = useRoutes(routes);
  return <>{appRoutes}</>;
};
