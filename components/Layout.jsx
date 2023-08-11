import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <aside className="flex-1 flex">
        <Sidebar />
        <main className="bg-gray-100 p-4 flex-1">{children}</main>
      </aside>
    </div>
  );
};

export default Layout;
