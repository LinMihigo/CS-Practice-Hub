import { useContext } from "react";
import NavigationContext from "../Context/navigation";

function Link({ to, children, className }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a className={className} href={to} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
}

export default Link;
