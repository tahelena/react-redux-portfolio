import classnames from "classnames";
import useNavigation from "../../hooks/use-navigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();
  const classes = classnames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (e) => {
    if (e.metakey || e.ctrlKey) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
