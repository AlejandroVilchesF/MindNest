import SidebarItem from "@/components/UI/SidebarItem";

export default function Sidebar({boards}) {
  return (
    <aside className="w-40 text-left bg-white border-r border-black">
      {boards.map((board) => (
        <SidebarItem key={board.board_id} board={board} />
      ))}
    </aside>
  );
}
