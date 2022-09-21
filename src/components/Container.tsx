import { FC, ReactNode } from 'react';

type ContainerProps = {
  name: string;
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ name, children }) => {
  return (
    <div>
      <h1 className="title">{name}</h1>
      {children}
    </div>
  );
};
