"use client";
import { useState } from "react";

const Comments = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [comment, setComment] = useState<string>("");

    const handleAddComment = () => {
        setComments([...comments, comment]);
        setComment("");
    };

  return (
    <div>
      <h3>Comments</h3>
      <input
      type="text"
      value={comment}
      onChange={(e) => setComment(e. target.value)}
      placeholder="Add a comment"
      />

      <button onClick={handleAddComment} className="bg-emerald-800 flex gap-6 text-white rounded-full p-3 hover:bg-cyan-600">Submit</button>

      <ul>
        {comments.map((c, index) =>(
            <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  )
}

export default Comments;
