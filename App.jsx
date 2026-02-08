import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  function toggleLike() {
    setLiked(!liked);
  }

  function submitComment(e) {
    e.preventDefault();
    if (text.trim() === "") return;

    setComments([...comments, text]);
    setText("");
  }

  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <strong>vasu_dev</strong>
      </div>

      <div style={styles.image}>📷</div>

      <div style={styles.actions}>
        <button onClick={toggleLike} style={styles.likeBtn}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>

      <div style={styles.comments}>
        {comments.map((c, i) => (
          <div key={i}>💬 {c}</div>
        ))}
      </div>

      <form onSubmit={submitComment} style={styles.form}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          style={styles.input}
        />
        <button type="submit" style={styles.postBtn}>
          Post
        </button>
      </form>
    </div>
  );
}

export default App;
