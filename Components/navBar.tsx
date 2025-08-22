"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PenSquare, LayoutDashboard, LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-gray-900 text-white shadow-lg px-6 py-4 flex justify-between items-center"
    >
      <Link href="/" className="text-2xl font-bold text-blue-400">
        AI Blog
      </Link>

      <div className="flex gap-6 text-lg">
        <Link href="/create" className="flex items-center gap-2 hover:text-blue-400">
          <PenSquare size={18} /> Write
        </Link>
        <Link href="/dashboard" className="flex items-center gap-2 hover:text-blue-400">
          <LayoutDashboard size={18} /> Dashboard
        </Link>
        <Link href="/login" className="flex items-center gap-2 hover:text-blue-400">
          <LogIn size={18} /> Login
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
