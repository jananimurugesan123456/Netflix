import logo from "./logo.svg";
import "./App.css";
import Advertise from "./Advertise";
import About from "./About";
import Home from "./Home";
import { Link, Route, Routes } from "react-router-dom";
import Post1 from "./Post1";
import Added from "./Added";
import Postcall from "./Postcall";
// import {Link}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> */}
        {/* <li>
            <Link to="/Post1">Post1</Link>
          </li> */}
        {/* </ul> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Advertise /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Post1/:id" element={<Post1 />} />
          <Route path="Added" element={<Added />} />
        </Routes> */}
        {/* <Home />
        <About /> */}
        <Added />
        <Postcall />
      </header>
    </div>
  );
}

export default App;
