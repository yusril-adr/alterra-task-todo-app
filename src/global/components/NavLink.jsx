import { Link, useResolvedPath, useMatch } from 'react-router-dom';

const NavLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      replace={match}
    >
      {children}
    </Link>
  );
};

export default NavLink;
