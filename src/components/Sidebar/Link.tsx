import { CSSProperties, FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ILink {
  route: string;
  name: string;
  sidebarLinks: ({ isActive }: { isActive: boolean }) => CSSProperties | undefined;
}


export const Link: FC<ILink> = ({ route, name, sidebarLinks }) => {
  return (
    <li>
      <NavLink className="hover:underline" to={route} style={sidebarLinks}>
        {name}
      </NavLink>
    </li>
  );
};
