import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../components';
import { EnumRoutes } from '../router';

export const LoginPage: FC = () => {
  return (
    <div>
      <h1 className="title">Login</h1>
      <Login />
      <p className="text-[18px]">
        Or you can{' '}
        <span className="redirect-link">
          <Link to={EnumRoutes.REGISTER_ROUTE}>Register</Link>
        </span>
      </p>
    </div>
  );
};
