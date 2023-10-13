import Notes from "./components/ElephantSQL";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="site">
        <div>
          <Nav />
        </div>
        {/* <img src="./img/kiciaku.jpg" width="20%" /> */}
        <div className="newNote">
          <Notes />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
