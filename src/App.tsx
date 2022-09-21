import { FC } from 'react';
import { Sidebar } from './components';
import { AppRouter } from './router';
import { styles } from './styles';

export const App: FC = () => {
  return (
    <div className="w-full overflow-hidden font-poppins text-primary-text">
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth} flex`}>
          <div
            className={`${styles.paddingY} w-1/5 h-screen text-white pl-8 pr-4 bg-gradient-to-b from-primary`}
          >
            <Sidebar />
          </div>
          <div className={`${styles.padding} w-4/5 bg-gradient-to-tr from-sky-50 to-sky-100`}>
            <AppRouter />
          </div>
        </div>
      </div>
    </div>
  );
};
