// components/Layout/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 ml-20 lg:ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
