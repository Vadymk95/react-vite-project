import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import {
  MainPage,
  ListPage,
  LoginPage,
  RegisterPage,
  ErrorPage,
} from '../pages';
import { EnumRoutes } from './EnumRoutes';

interface IRoute {
  path: string;
  element: ReactNode;
}

export const routes: IRoute[] = [
  {
    path: EnumRoutes.DEFAULT_ROUTE,
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
  {
    path: EnumRoutes.LOGIN_ROUTE,
    element: <LoginPage />,
  },
  {
    path: EnumRoutes.REGISTER_ROUTE,
    element: <RegisterPage />,
  },
  {
    path: EnumRoutes.ERROR_ROUTE,
    element: <ErrorPage />,
  },
];
