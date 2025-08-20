"use client";

import { motion } from "framer-motion";
import { PlusCircle, Edit, Trash2, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Dummy posts (later connect with API)
  const posts = [
    {
      id: "1",
      title: "How AI is Changing Blogging Forever",
      date: "2025-08-15",
      status: "Published",
    },
    {
      id: "2",
      title: "Next.js 15: What You Need to Know",
      date: "2025-08-10",
      status: "Draft",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <Link
          href="/dashboard/new-post"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          <PlusCircle className="w-5 h-5" /> New Post
        </Link>
      </div>

      {/* Analytics Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <BarChart3 className="text-blue-600 w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold text-gray-900">Total Views</h2>
          <p className="text-2xl font-bold text-gray-800">12,430</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h2 className="text-lg font-semibold text-gray-900">
            Published Posts
          </h2>
          <p className="text-2xl font-bold text-gray-800">24</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h2 className="text-lg font-semibold text-gray-900">Drafts</h2>
          <p className="text-2xl font-bold text-gray-800">6</p>
        </motion.div>
      </div>

      {/* Posts Management */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Manage Posts
      </h2>
      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-900">
              <th className="p-4">Title</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-t hover:bg-gray-50 transition text-gray-800"
              >
                <td className="p-4">{post.title}</td>
                <td className="p-4">{post.date}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="p-4 flex gap-3">
                  <Link
                    href={`/dashboard/edit/${post.id}`}
                    className="text-blue-700 hover:underline flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </Link>
                  <button className="text-red-700 hover:underline flex items-center gap-1">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
