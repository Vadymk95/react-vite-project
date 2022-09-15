import { ReactNode } from 'react';
import { MainPage } from '../pages';
import { EnumRoutes } from './EnumRoutes';

interface IRoute {
  path: string;
  element: ReactNode;
}

export const routes: IRoute[] = [
  {
    path: EnumRoutes.MAIN_ROUTE,
    element: <MainPage />,
  },
];
