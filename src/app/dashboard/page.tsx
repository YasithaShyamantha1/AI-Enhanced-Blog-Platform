"use client";

import { motion } from "framer-motion";
import { Edit, Trash2, BarChart3, FileText } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const posts = [
    { id: "1", title: "How AI is Changing Blogging Forever", date: "2025-08-15", status: "Published" },
    { id: "2", title: "Next.js 15: What You Need to Know", date: "2025-08-10", status: "Draft" },
  ];

  return (
    <div className="space-y-10">
      {/* Analytics Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-lg">
          <BarChart3 className="text-indigo-600 w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold">Total Views</h2>
          <p className="text-2xl font-bold">12,430</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-lg">
          <FileText className="text-green-600 w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold">Published Posts</h2>
          <p className="text-2xl font-bold">24</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold">Drafts</h2>
          <p className="text-2xl font-bold">6</p>
        </motion.div>
      </div>

      {/* Posts Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Manage Posts</h2>
        <div className="bg-white shadow rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Title</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t hover:bg-gray-50 transition">
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
                    <Link href={`/dashboard/edit/${post.id}`} className="text-blue-700 hover:underline flex items-center gap-1">
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
    </div>
  );
}
