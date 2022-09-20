import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SignUp } from '../components';
import { EnumRoutes } from '../router';

export const RegisterPage: FC = () => {
  return (
    <div>
      <h1 className="title">Register</h1>
      <SignUp />
      <p className="text-[18px]">
        Already have an account?{' '}
        <span className="redirect-link">
          <Link to={EnumRoutes.LOGIN_ROUTE}>Sign in</Link>
        </span>
      </p>
    </div>
  );
};
