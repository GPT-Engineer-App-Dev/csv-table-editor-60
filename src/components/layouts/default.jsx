import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default SharedLayout;
