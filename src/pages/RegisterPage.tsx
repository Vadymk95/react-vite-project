import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EnumRoutes } from '../router';

export const RegisterPage: FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>
        Already have an account <Link to={EnumRoutes.LOGIN_ROUTE}>Sign in</Link>
      </p>
    </div>
  );
};
