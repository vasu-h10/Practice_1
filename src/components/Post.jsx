import { useState } from "react";

function Post({ username }) {
  const [liked, setLiked] = useState(false);
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  function addComment(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setComments([...comments, text]);
    setText("");
  }

  return (
    <div className="post">
      <strong>{username}</strong>

      <div className="image">📷</div>

      <button className="likeBtn" onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <div className="comments">
        {comments.map((c, i) => (
          <div key={i}>💬 {c}</div>
        ))}
      </div>

      <form onSubmit={addComment}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
        />
      </form>
    </div>
  );
}

export default Post;
