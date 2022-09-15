import { FC } from 'react';
import { Sidebar } from './components';
import { AppRouter } from './router';

export const App: FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Sidebar />
      <AppRouter />
    </div>
  );
};
