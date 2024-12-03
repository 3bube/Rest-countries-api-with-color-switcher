import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
