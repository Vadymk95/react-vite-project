import { FC } from 'react';
import { Container } from '../components';

export const MainPage: FC = () => {
  return (
    <Container name="Home Page">
      <div className="mt-8 text-[20px]">
        <p>
          This project for my needs and here you can find solutions of different
          cases which can help you.
        </p>
        <p>You can login or use only basic routes</p>
      </div>
    </Container>
  );
};
