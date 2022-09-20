import { FC } from 'react';
import { Sidebar } from './components';
import { AppRouter } from './router';
import { styles } from './styles';

export const App: FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth} flex`}>
          <div
            className={`${styles.paddingY} w-[300px] h-screen text-white pl-8 pr-4 bg-primary`}
          >
            <Sidebar />
          </div>
          <div className={`${styles.padding} w-full`}>
            <AppRouter />
          </div>
        </div>
      </div>
    </div>
  );
};
