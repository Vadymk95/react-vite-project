import { FC } from 'react';
import { Sidebar } from './components';
import { AppRouter } from './router';
import { styles } from './styles';

export const App: FC = () => {
  return (
    <div className="w-full flex overflow-hidden">
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </div>
  );
};
