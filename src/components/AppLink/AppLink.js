import { Link, useMatch, useResolvedPath } from "react-router-dom";

const AppLink = ({ children, activeClass, className, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      // style={{ textDecoration: match ? "underline" : "none" }}
      className={(match ? activeClass || 'active' : "") + ' ' + className}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default AppLink;