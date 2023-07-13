import { Link } from "react-router-dom";

const Button = ({ onClick, children, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="w-full outline-none border-1 font-medium rounded-lg text-sm p-2.5 bg-yellow-300 hover:bg-yellow-400 text-[#131921]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const BLink = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  to = "/",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="w-full outline-none border-1 font-medium rounded-lg text-sm bg-yellow-300 hover:bg-yellow-400 text-[#131921]"
      onClick={onClick}
    >
      <Link to={to} className="w-full h-full p-2.5 block">
        {children}
      </Link>
    </button>
  );
};

Button.Link = BLink;
export default Button;
