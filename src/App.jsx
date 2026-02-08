import Post from "./components/Post";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h2 className="header">Instagram</h2>

      <Post username="vasu_dev" />
      <Post username="react_learner" />
    </div>
  );
}

export default App;