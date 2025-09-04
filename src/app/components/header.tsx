"use client";

import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-indigo-600 text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">AI Blog Platform</h1>
        </Link>

        {/* Nav Links */}
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/dashboard/create" className="hover:underline">
            Create Blog
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </motion.header>
  );
}
