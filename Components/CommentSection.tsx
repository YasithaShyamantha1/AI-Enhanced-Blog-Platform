"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (!input.trim()) return;
    setComments([...comments, input]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full mt-8 bg-gray-50 p-5 rounded-2xl shadow border"
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Comments</h3>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Write a comment..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-xl p-2"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 flex items-center gap-2"
        >
          <Send size={16} /> Post
        </button>
      </div>

      <ul className="mt-4 space-y-3">
        {comments.map((comment, i) => (
          <li key={i} className="bg-white shadow px-4 py-2 rounded-xl text-gray-700">
            {comment}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CommentSection;
