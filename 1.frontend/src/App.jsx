import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Menú</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Inicio</li>
            <li className="hover:text-blue-600 cursor-pointer">Notas</li>
            <li className="hover:text-blue-600 cursor-pointer">Usuarios</li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-auto">
          <h1 className="text-3xl font-bold mb-4">Panel Principal</h1>
          <p className="text-gray-700">
            Este es un layout básico para empezar a construir tu app con
            Tailwind y React.
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
