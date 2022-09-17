import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { MainPage, ListPage } from '../pages';
import { EnumRoutes } from './EnumRoutes';

interface IRoute {
  path: string;
  element: ReactNode;
}

export const routes: IRoute[] = [
  {
    path: '/',
    element: <Navigate to={EnumRoutes.MAIN_ROUTE} replace />,
  },
  {
    path: EnumRoutes.MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: EnumRoutes.LIST_ROUTE,
    element: <ListPage />,
  },
];
