"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard, FileText, BarChart3, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-64 bg-gradient-to-b from-indigo-600 to-purple-700 text-white shadow-xl flex flex-col"
      >
        <div className="p-6 text-2xl font-bold tracking-wide">MyAdmin</div>
        <nav className="flex-1 space-y-2 px-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-500 transition">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/dashboard/new-post" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-500 transition">
            <FileText size={20} /> New Post
          </Link>
          <Link href="/dashboard/analytics" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-500 transition">
            <BarChart3 size={20} /> Analytics
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-500 transition">
            <Settings size={20} /> Settings
          </Link>
        </nav>
        <div className="p-4">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-500 transition">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 flex items-center justify-between bg-white shadow px-6">
          <h1 className="text-xl font-semibold">Welcome back 👋</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <div className="w-10 h-10 bg-indigo-500 text-white flex items-center justify-center rounded-full font-bold">
              Y
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
