import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EnumRoutes } from '../router';

export const LoginPage: FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        Or <Link to={EnumRoutes.REGISTER_ROUTE}>register</Link>
      </p>
    </div>
  );
};
