import { Link } from "react-router-dom";
import MindNest from "@/assets/MindNest.png";
import NavElement from "@/components/UI/NavElement";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-screen px-0 py-0 bg-white shadow">
      {/* Izquierda: Logo */}
      <div className="flex-shrink-0 h-12 w-16 ml-0">
        <Link to="/">
          <img src={MindNest} alt="Logo" className="h-full object-contain" />
        </Link>
      </div>

      {/* Centro: Navegación intermedia */}
      <div className="flex space-x-10">
        <NavElement to="/boards" label="Boards" Icon={ClipboardIcon} />
        <NavElement to="/boards" label="New Board" Icon={PlusCircleIcon} />
        <NavElement to="/notes" label="Notes" Icon={PaperClipIcon} />
      </div>

      {/* Derecha: Usuario */}
      <div className="flex-shrink-0 mr-5">
        <NavElement to="/users" label="" Icon={UserIcon} />
      </div>
    </nav>
  );
}
