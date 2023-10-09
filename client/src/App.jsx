import Notes from "./components/ElephantSQL";
import "./App.css";

function App() {
  return (
    <>
      <div className="site">
        <nav className="header">
          <img src="./img/kiciaku.jpg" width="20%" />
          <h1>My Blog</h1>
        </nav>
        <Notes />
        <footer className="footer">
          <p>MyBlog | Copyright 2023</p>
        </footer>
      </div>
    </>
  );
}

export default App;
