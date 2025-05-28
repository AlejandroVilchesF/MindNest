import { Link } from "react-router-dom";

export default function NavElement({ to, label, Icon }) {
  return (
    <div>
      <Link to={to} className="nav-link flex items-center space-x-2">
        {Icon && <Icon className="w-5 h-5 font-bold" />}
        <span>{label}</span>
      </Link>
    </div>
  );
}
