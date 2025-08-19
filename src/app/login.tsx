"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call backend login API with email & password
    console.log("Login:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold text-center mb-6">
          AI-Enhanced Blog Platform
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-gray-600 text-sm">Email</label>
            <div className="flex items-center gap-2 mt-1 border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-600 text-sm">Password</label>
            <div className="flex items-center gap-2 mt-1 border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium shadow-md hover:bg-blue-700 transition"
          >
            Login
          </motion.button>
        </form>

        {/* Extra Links */}
        <div className="flex justify-between mt-5 text-sm text-gray-500">
          <Link href="/signup" className="hover:text-blue-600">
            Create an account
          </Link>
          <Link href="/forgot-password" className="hover:text-blue-600">
            Forgot Password?
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
