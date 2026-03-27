import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-slate-100 font-sans selection:bg-brand-500/30">
      <NavBar />
      <main className="flex-1 overflow-x-hidden pt-20 pb-8 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
