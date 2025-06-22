import Subheader from "@/components/Layout/Subheader";
import Sidebar from "@/components/Layout/Sidebar";

function Boards() {
  return (
    <div className="flex h-full bg-[#8f3f65]">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col">
        <Subheader />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Boards</h1>
        </main>
      </div>
    </div>
  );
}

export default Boards;