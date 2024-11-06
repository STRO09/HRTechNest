import { SidebarDemo } from "../admin/pages/sidebardemo";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white fixed h-full">
        <SidebarDemo />
      </aside>
      <main className="flex-grow p-6 bg-white"></main>
    </div>
  );
}
