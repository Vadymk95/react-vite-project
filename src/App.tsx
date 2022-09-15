import { FC } from 'react';
import { AppRouter } from './router';

export const App: FC = () => {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <AppRouter />
    </div>
  );
};
