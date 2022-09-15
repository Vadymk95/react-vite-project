import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const AppRouter: FC = () => {
  const appRoutes = useRoutes(routes);
  return <>{appRoutes}</>;
};
